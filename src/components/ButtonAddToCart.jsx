export default function ButtonAddToCart ( ) {
    let statusInCart = "No agregaste este item al carrito"
    function handleClick() {
        alert("Gracias por agregarme al carrito")
        statusInCart = "Item agregado al carrito! 😊"
    }
    return (
        <div>
                <button onClick= {handleClick}>Agregar al carrito</button>
                <br/>
                <small> {statusInCart} </small>
        </div>
    )
}