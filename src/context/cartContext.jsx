import { cartItems, createContext, useState } from "react";

const cartContext = createContext();
// 4. Crear un Custom Provider -> componente
export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    function addToCart(newItem){
        //copia del carrito
        const newCartItems = structuredClone(cartItems);
const isInCart = cartItems.some ( item => item.id === newItem.id)
//evalúo si tengo que actualizar un producto o si tengo que crear uno nuevo
if (isInCart) {
    //actualizamos producto del carrito
    const index = cartItems.findIndex( item=> item.id === newItem.id); 
    newCartItems[index].count = newCartItems[index].count + 1;
} 
else {
        //manipulo
        newCartItems.push( {...newItem, count : 1 });
       
    }
//actualizo el estado del carrito 

    setCartItems(newCartItems)    
    alert(`Agregaste ${newItem.title} al carrito`)

}
function removeItems(idRemove){
let newCartItems = structuredClone(cartItems)
 const isInCart = cartItems.find((item) => item.id === idRemove)

const countInCart = isInCart.count;

if (countInCart > 1 ) {
const index = cartItems.findIndex( item => item.id === idRemove);
newCartItems[index].count--;
}
else { 
    const newCartItems = cartItems.filter ( item => item.id !== idRemove );}
    setCartItems(newCartItems);
}
function countItems() {
    let count = 0;
    cartItems.forEach ( item => count += item.count) 
    return count;
}
function clearCart(){
    setCartItems([])
}
    return (
        <cartContext.Provider value= {
{ cartItems, addToCart, countItems, removeItems, clearCart} }>
            { props.children }
        </cartContext.Provider>
    )
}

export default cartContext;