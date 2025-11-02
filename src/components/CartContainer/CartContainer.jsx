import { useContext } from "react";
import cartContext from "../../context/cartContext";
import "./CartContainer.css";
import { createOrder } from "../../data/firebase";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 
import FormCheckout from "./FormCheckout";


function CartContainer() {
  const { cartItems, clearCart } = useContext(cartContext);
  
async function handleCheckout(formData) {
  console.log("🚨 Revisar qué está llegando como formData:", formData);
  console.log("👉 Tipo de formData:", typeof formData);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const orderData = {
    buyer: formData, 
    items: cartItems,
    price: totalPrice,
    date: new Date()
  };
  console.log("llamando a firebase, datos de comprador", formData);
  
  const newOrder = await createOrder(orderData);
  clearCart();
  Toastify({

text: `¡Compra éxitosa! tu número de compra es: ${newOrder.id}`,

duration: 3000

}).showToast();
  clearCart();
};

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <p className="cart-empty">El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container">
      <h3 className="cart-title">🛍️ Tu Carrito</h3>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="item-card">
            <img className="item-card-img" src={item.img} alt={item.title} />
            <h4 className="item-card-title">{item.title}</h4>
            <p className="item-card-price">Precio: ${item.price}</p>
            <p className="item-card-count">Cantidad: {item.count}</p>
            <p className="item-card-subtotal">
              Subtotal: ${item.price * item.count}
            </p>
            <button className="remove-btn">Quitar del carrito</button>
            <button onClick={handleCheckout}>Comprar</button> 
            <FormCheckout handleCheckout={handleCheckout} />
          </div>
        ))}
       
      </div>
      
    </div>
  );
}

export default CartContainer;
