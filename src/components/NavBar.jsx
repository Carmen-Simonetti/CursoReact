import './NarBar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router';

export default function NavBar () {
    return (
        <nav> 
            <ul>
                <Link to="/"> 
            <img src="/public/img/logo.png" alt="" />
            </Link>
            <Link to="/detalle">
            Detalle
            </Link>
                <li>
                    <Link to="/category/Cambio de aceite">Cambio de aceite</Link>
                </li>
                <li>
                    <Link to="/category/Bujías">Bujías</Link>
                </li>
                <li>
                    <Link to="/category/Pastillas de freno">Pastillas de freno</Link>
                </li>
            </ul>
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </nav>
    )
}