import { NavLink, useLocation } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import CartIcon from "../../components/CardIcon/CardIcon";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import "./Catalog.css";

function Catalog() {
  const location = useLocation();
  console.log(location.pathname);

  const items = useCartStore((state) => state.items);
  return (
    <section className="cat-container" id="cat">
      <div className="cat-nav">
        <div className="icon-cat-container">
          <NavLink to="/">
            <FaHouse className="icon-cat" />
          </NavLink>
        </div>
        <h2>Productos</h2>
        <div className="icon-cat-container">
          <NavLink to="/cart">
            <CartIcon className="cart-icon-cat" />
            <FaCartShopping
              className={items.length > 0 ? "icon-cat" : "icon-cat-cart"}
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
