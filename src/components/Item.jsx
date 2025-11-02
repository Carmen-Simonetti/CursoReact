import './Item.css'
import StateComponent from './StateComponent';
import ButtonAddToCart from './ButtonAddToCart'
import { Link } from 'react-router';
import cartContext from '../context/cartContext';
import { useContext } from "react";
//un componente en React es una funcion
//reglas de componente --> 
// 1. siempre el nombre va en Mayúscula para que React identifique que es un componente y no una etiqueta html 
function Item (props) {
   //Destructuración
   const {id,title, img, price} = props;
   const { addToCart } = useContext(cartContext); // obtenemos la función del contexto
    //2. estas funciones siempre retornan JSX o HTML. Todo componente tiene q devolver sólo 1 elemento x eso usamos un div
    function handleAddToCart() {
    const newItem = { id, title, price, img };
    addToCart(newItem);
  }

    return (
        <div className="item-card">
            <h2 className="item-card-title">{title}</h2>
            <img 
            src={props.img} 
            alt={props.title} 
            />
            <h3 className="item-card-price"> Precio: $ {price}</h3>
            <StateComponent/>
            <div style={{textAlign:"center"}}>
                <Link to= {`/detalle/${id}`}>
                <button>Ver detalle</button>
                </Link>
                <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}
//3. exportamos el componente. Para pasar/exportar de un archivo a otro usamos export
export default Item;