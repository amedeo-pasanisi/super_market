import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Cart from "./Cart";

export default function App() {
    const [cart, setCart] = useState(0)

    return (
        <BrowserRouter>
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/cart" element={<Cart cart={cart}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}