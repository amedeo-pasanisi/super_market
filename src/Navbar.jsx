import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/aboutus"><li>About us</li></Link>
            </ul>
        </nav>
    )
}