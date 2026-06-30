import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import CartIcon from "../../components/CardIcon/CardIcon";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import "./Catalog.css";

function Catalog() {
  const items = useCartStore((state) => state.items);
  return (
    <section className="cat-container">
      <div className="cat-nav">
        <div className="icon-cat-container">
          <NavLink to="/">
            <FaHouse className="icon-cat" />
          </NavLink>
        </div>

        <h2>Productos</h2>

        <div className="icon-cat-container">
          <CartIcon />
          <NavLink to="/cart">
            <FaCartShopping
              className={items.length > 0 ? "cart-cat-items" : "icon-cat-cart"}
            />
          </NavLink>
        </div>
      </div>
      <div className="products-container">
        {products.map((item) =>
          item.status == true ? (
            <ProductCard key={item.id} product={item} />
          ) : (
            ""
          ),
        )}
      </div>
    </section>
  );
}

export default Catalog;
