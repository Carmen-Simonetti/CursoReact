import StateComponent from "../StateComponent"
import { getProductById } from "../../data/mockAPI"
import { useParams } from "react-router";
import { useState,useEffect } from "react";



function ItemDetailContainer() {
    const {idParam} = useParams()
const [product,setProduct] = useState({});
useEffect (   ()  =>  {
    //me devuelve una promesa que guardo en product
    getProductById(idParam).then(  res  => setProduct(product))
}, [])


    getProductById(idParam);

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
                <button>
                  Agregar al carrito  
                </button>
            </div>
        </div>
)}
export default ItemDetailContainer