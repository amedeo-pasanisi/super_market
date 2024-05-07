import { useMemo } from "react"
import {NavLink} from "react-router-dom"

const Navbar = ({cart}) => {
    const cartQuantity = useMemo(() => cart.reduce((acc, cur) => acc + cur.quantity, 0), [cart])
    
    return (
        <nav>
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
                        Cart ({cartQuantity})
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
