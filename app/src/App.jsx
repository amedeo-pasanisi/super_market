import { useMemo, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

export default function App() {
    const [cartProducts, setCartProducts] = useState([])

    const handleAddCartProduct = addedProduct => {
        const alreadyInCart = cartProducts.find(cartProduct => cartProduct.id === addedProduct.id )
        if (!alreadyInCart) {
            setCartProducts(prevState => [...prevState, {...addedProduct, quantity: 1}])
        } else {
            setCartProducts(cartProducts.map(cartProduct => {
                if (cartProduct.id === alreadyInCart.id) return {...cartProduct, quantity: alreadyInCart.quantity + 1}
                return cartProduct
            }))
        }
    }

    const handleDeleteCartProduct = deletedProduct => {
        setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== deletedProduct.id))
    }

    return (
        <BrowserRouter>
            <Navbar cart={cartProducts} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/products" element={<Products cart={cartProducts} onAddCartProduct={handleAddCartProduct} onDeleteCartProduct={handleDeleteCartProduct} />}></Route>
                <Route path="/cart" element={<Cart cart={cartProducts}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}