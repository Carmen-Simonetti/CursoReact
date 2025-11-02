import StateComponent from "../StateComponent"
import { getProductById } from "../../data/firebase"
import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import cartContext from "../../context/cartContext";



function ItemDetailContainer() {
    const {idParam} = useParams()
const [product,setProduct] = useState({});
const context = useContext(cartContext); //envío información para eso creo una funcion que podamos llamar dentro de context
useEffect (   ()  =>  {
    //me devuelve una promesa que guardo en product
    getProductById(idParam)
    .then(  res  => setProduct(res))
    .catch( error => alert(error))
}, [])


    return (
    <div className="item-card">
            <h2 className="item-card-title">{product.title}</h2>
            <img 
            className="item-card-img"
            height="300"
            src={product.img}
            />
            <h3 className="item-card-price"> {product.price}</h3>
            <StateComponent/>
            <div style={{textAlign:"center"}}>
                <p>{product.description}</p>
            </div>
            <div>
                <button onClick={ () => context.addToCart (product)}>
                  Agregar al carrito  
                </button>
            </div>
        </div>
)}
export default ItemDetailContainer