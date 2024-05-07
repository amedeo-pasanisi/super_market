import { Link } from "react-router-dom"
import reactImg from "../assets/home.jpg"

const Home = () => {
    return <>
        <h1>Online shopping simplified</h1>
        <p>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
        <Link to="/products">Start shopping</Link>
        <br/><br/>
        <img
            src={reactImg}
            width="350"
            alt="Fruits and books"
        />
    </>
}

export default Home