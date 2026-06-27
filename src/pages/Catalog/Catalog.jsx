import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import CartIcon from "../../components/CardIcon/CardIcon";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Catalog.css";

function Catalog() {
  const items = useCartStore((state) => state.items);
  return (
    <section className="cat-container" id="cat">
      <div className="cat-nav">
        <div className="icon-cat">
          <NavLink to="/">
            <FaHouse />
          </NavLink>
        </div>
        <h2>Productos</h2>
        <div className="icon-cat">
          <NavLink to="/cart" className="nav-cart-mobile">
            <CartIcon />
            <FaCartShopping
              className={items.length > 0 ? "items-cart" : "no-items-cart"}
            />
          </NavLink>
        </div>
      </div>
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
