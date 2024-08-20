import { CartWidget } from "./components/CartWidget"

export const NavBar = ()=>{
    return <>
        <nav>
            <ul>
                <li><a href="#">Fuguras</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#"> Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </>
}