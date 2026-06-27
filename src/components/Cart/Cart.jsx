import { FaWhatsapp, FaRegTrashAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import empty from "../../assets/empty.png";
import "./Cart.css";

function Cart() {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCartStore();
  const navigate = useNavigate();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const sendToWhatsapp = () => {
    const products = items
      .map(
        (item) =>
          `${item.name}\n` +
          `Cantidad: ${item.quantity}\n` +
          `Precio Unitario: $${item.price}\n` +
          `Subtotal: $${item.price * item.quantity}\n\n`,
      )
      .join("\n");

    const message =
      `🛍️ NUEVO PEDIDO \n\n` +
      `${products}\n` +
      "-------------------------------------------\n\n" +
      `💰 TOTAL: $${total}`;

    const phone = "5214761037311";

    const urlWhatsApp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(urlWhatsApp, "_blank");

    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <img src={empty} alt="Carrito vacío" />
        <h2>Tu carrito está vacío</h2>
        <NavLink to="/catalog" className="btn-empty">
          Ver Catálogo
        </NavLink>
      </div>
    );
  }

  return (
    <section className="cart">
      <div className="cart-nav">
        <h2>Mi Pedido</h2>
      </div>

      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3 className="item-name-cart">{item.name}</h3>

              <p className="unit-price">P.U. ${item.price}</p>

              <p className="subtotal">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>

            <div className="cart-actions">
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>

                <span className="quantity-cart">{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <button
                className="btn-remove"
                onClick={() => removeItem(item.id)}
              >
                <FaRegTrashAlt className="trash-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total}</h3>

        <NavLink to="/catalog" className="btn-secondary">
          Seguir Comprando
        </NavLink>

        <button className="btn-whatsapp" onClick={sendToWhatsapp}>
          <FaWhatsapp className="whatsapp-icon" />
          Enviar Pedido
        </button>
      </div>
    </section>
  );
}

export default Cart;
