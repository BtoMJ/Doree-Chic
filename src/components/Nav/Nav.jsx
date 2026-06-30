import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { FaCartShopping } from "react-icons/fa6";
import CartIcon from "../CardIcon/CardIcon";

import "./Nav.css";

function Nav() {
  const items = useCartStore((state) => state.items);
  console.log("ITEMS", items);
  return (
    <nav className="nav-container">
      <>
        <NavLink to="/cart" className="nav-cart-mobile">
          <div className={items.length > 0 ? "full" : ""}>
            <CartIcon />
            <FaCartShopping
              className={items.length > 0 ? "items-cart" : "no-items-cart"}
            />
          </div>
        </NavLink>
      </>
    </nav>
  );
}

export default Nav;
