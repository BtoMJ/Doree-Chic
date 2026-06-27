import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import img1 from "../../assets/products/8extractos.png";
import img2 from "../../assets/products/cebolla.png";
import img3 from "../../assets/products/crece.png";
import img4 from "../../assets/products/miel.png";
import img5 from "../../assets/products/bergamota.png";
import img6 from "../../assets/products/linaza.png";
import img7 from "../../assets/products/rizos.png";
import img8 from "../../assets/products/lacios.png";
import img9 from "../../assets/products/arroz.png";
import img10 from "../../assets/products/avena.png";
import "./ProductCard.css";

function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);
  const Item = useCartStore((state) => state.items);
  console.log(Item);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const images = [
    "0",
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  return (
    <>
      <div className="card-container">
        <div className="card-img-container">
          <img src={images[product.id]} alt={images[product.name]} />
          <div className="details">
            <button className="btn-open-modal" onClick={() => setOpen(true)}>
              +
            </button>
          </div>
        </div>

        <div className="card-info-container">
          <h3 className="type-product">{product.type}</h3>
          <h2 className="title-product">{product.name}</h2>
          <p className="price-product">${product.price}</p>
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
              onClick={() => addItem(product, quantity)}
              className="btn-add-to-cart"
            >
              <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
      <div className={open == true ? "modal-container" : "no-view"}>
        <div className="modal-info">
          <h3>beneficios:</h3>
          <p>{product.description}</p>
          <h3>ingredientes:</h3>
          <p>{product.ingredients}</p>
          <button className="btn-close-modal" onClick={() => setOpen(false)}>
            cerrar
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
