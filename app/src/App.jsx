import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Products from "./Products";


export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/products" element={<Products />}></Route>
            </Routes>
        </BrowserRouter>
    )
}