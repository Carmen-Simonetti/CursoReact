import './Item.css'
//un componente en React es una funcion
//reglas de componente --> 
// 1. siempre el nombre va en Mayúscula para que React identifique que es un componente y no una etiqueta html 
function Item (props) {
   //Destructuración
   const {title, img, price} = props;
    //2. estas funciones siempre retornan JSX o HTML. Todo componente tiene q devolver sólo 1 elemento x eso usamos un div
    return (
        <div className="item-card">
            <h2 className="item-card-title">{title}</h2>
            <img src={img} alt={props.title} />
            <h3 className="item-card-price"> $ {price}</h3>
        </div>
    )
}
//3. exportamos el componente. Para pasar/exportar de un archivo a otro usamos export
export default Item;