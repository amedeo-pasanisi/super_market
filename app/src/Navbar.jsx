import { useMemo } from "react"
import {NavLink} from "react-router-dom"

const Navbar = ({cartProducts}) => {
    const cartProductsQuantity = useMemo(() => cartProducts.reduce((acc, cartProduct) => acc + cartProduct.quantity, 0), [cartProducts])
    
    return <nav>
        <ul>
            <li>
                <NavLink to="/" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})} end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/products" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})}>Products</NavLink>
            </li>
            <li>
                <NavLink to="/aboutus" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})}>About us</NavLink>
            </li>
            <li>
                <NavLink to="/cart" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})}>
                    Cart ({cartProductsQuantity})
                </NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar
