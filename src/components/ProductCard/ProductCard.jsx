import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import extractos from "../../assets/products/8extractos.png";
import "./ProductCard.css";

function ProductCard() {
  // const addItem = useCartStore((state) => state.addItem);
  const Item = useCartStore((state) => state.items);
  console.log(Item);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={extractos} alt="shampoo 8 extractos" />
        <div className="details">+</div>
      </div>

      <div className="card-info-container">
        <h3 className="type-product">SHAMPOO</h3>
        <h2 className="title-product">8 EXTRACTOS</h2>
        <p className="price-product">$320</p>
        <div className="card-overlay">
          <div className="quantity-selector">
            <button
              className="btn-counter"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>

            <p className="quantity">{quantity}</p>

            <button
              className="btn-counter"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            // onClick={() => addItem(product, quantity)}
            className="btn-add-to-cart"
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
