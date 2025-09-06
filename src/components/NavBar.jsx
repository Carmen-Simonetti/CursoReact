import './NarBar.css'

export default function NavBar () {
    return (
        <nav>
            <img src="/logo.png" alt="" />
            <ul>
                <li>
                    <a href="">Refrigerantes</a>
                </li>
                <li>
                    <a href="">Aceites Sintéticos</a>
                </li>
                <li>
                    <a href="">Aceites Semisintéticos</a></li>
                <li>
                    <a href="">Aceites Minerales</a>
                </li>
                <li>
                    <a href="">Líquidos de frenos</a>
                </li>
            </ul>
            <img src="/cart4.svg" alt="" className="changuito" />
            {/*Mostrar CartWidget sólo item sin funcionalidad*/ }

        </nav>
    )
}