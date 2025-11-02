import { useContext } from "react";
import cartContext from '//context/cartContext.jsx';




export default function CartWitges() {
    const { countItems } = useContext(cartContext)
    return (
        <div>
            <span>🛒{countItems()}</span>
        </div>
    )
}