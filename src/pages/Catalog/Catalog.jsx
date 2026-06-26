import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import CartIcon from "../../components/CardIcon/CardIcon";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Catalog.css";

function Catalog() {
  const items = useCartStore((state) => state.items);
  return (
    <section className="cat-container" id="cat">
      <div className="cat-nav">
        <NavLink to="/">
          <FaHouse />
        </NavLink>
        <h2>Productos</h2>
        <NavLink to="/cart" className="nav-cart-mobile">
          <CartIcon />
          <FaCartShopping
            className={items.length > 0 ? "items-cart" : "no-items-cart"}
          />
        </NavLink>
      </div>
      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Catalog;
