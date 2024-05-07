import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductDetailInfo from "./pages/productDetails/ProductDetailInfo";
import ProductDetailNutrition from "./pages/productDetails/ProductDetailNutrition";
import ProductDetailStorage from "./pages/productDetails/ProductDetailStorage";

const App = () => {
    const [cartProducts, setCartProducts] = useState([])

    const handleAddCartProduct = addedProduct => {
        const alreadyInCart = cartProducts.find(cartProduct => cartProduct.id === addedProduct.id )
        if (!alreadyInCart) {
            setCartProducts(prevState => [...prevState, {...addedProduct, quantity: 1}])
        } else {
            const updatedCartProducts = cartProducts.map(cartProduct => {
                if (cartProduct.id === alreadyInCart.id) return {...cartProduct, quantity: alreadyInCart.quantity + 1}
                return cartProduct
            })
            setCartProducts(updatedCartProducts)
        }
    }

    const handleDeleteCartProduct = deletedProduct => {
        const updatedCartProducts = cartProducts.filter(cartProduct => cartProduct.id !== deletedProduct.id)
        setCartProducts(updatedCartProducts)
    }

    return (
        <BrowserRouter>
            <Navbar cartProducts={cartProducts} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/products" element={<Products cartProducts={cartProducts} onAddCartProduct={handleAddCartProduct} onDeleteCartProduct={handleDeleteCartProduct} />} />
                <Route path="/products/:id/" element={<ProductDetails onAddCartProduct={handleAddCartProduct} />}>
                    <Route path="" element={<ProductDetailInfo />} />
                    <Route path="nutrition" element={<ProductDetailNutrition />} />
                    <Route path="storage" element={<ProductDetailStorage />} />
                </Route>
                <Route path="/cart" element={<Cart cartProducts={cartProducts}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App