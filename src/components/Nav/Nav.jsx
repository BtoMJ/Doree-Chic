// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { FaCartShopping } from "react-icons/fa6";
// import { FaXmark, FaBars, FaCartShopping } from "react-icons/fa6";
import CartIcon from "../CardIcon/CardIcon";

import "./Nav.css";

function Nav() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenWidth = window.innerWidth;
  const items = useCartStore((state) => state.items);
  console.log("ITEMS", items);
  return (
    <nav className="nav-container">
      {screenWidth < 768 && (
        <>
          {/* <div className="nav-logo-mobile">
            <NavLink to="/"></NavLink>
          </div> */}
          <NavLink to="/cart" className="nav-cart-mobile">
            <CartIcon />
            <FaCartShopping
              className={items.length > 0 ? "items-cart" : "no-items-cart"}
            />
          </NavLink>
          {/* <div className="menu-nav-mobile">
            {isMenuOpen ? (
              <FaXmark
                className="menu-open"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="menu-close"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div> */}
        </>
      )}
    </nav>
  );
}

export default Nav;
