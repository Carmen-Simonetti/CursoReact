import { useContext } from "react";
import cartContext from '/src/context/cartContext.jsx';




export default function CartWitges() {
    const { countItems } = useContext(cartContext)
    return (
        <div>
            <span>🛒{countItems()}</span>
        </div>
    )
}