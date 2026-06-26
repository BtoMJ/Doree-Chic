import { useCartStore } from "../../store/cartStore.js";
import "./CardIcon.css";

function CartIcon() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={totalItems > 0 ? "items" : "items no-items"}>
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </div>
  );
}

export default CartIcon;
