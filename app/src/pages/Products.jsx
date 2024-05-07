import { useState, useEffect } from "react"
import useFetch from "../useFetch"

const Products = ({cart, onAddCartProduct, onDeleteCartProduct}) => {
    const [products, setProducts] = useState([])
    const { get, loading } = useFetch("https://stripe-server-opal.vercel.app/")

    useEffect(() => {
        get("products")
            .then((data) => {setProducts(data)})
            .catch((error) => console.log("Could not load products", error))
    }, [])
    
    return <>
        <h1>Products</h1>
        <p>Take a look at our products</p>
        {loading ?
            <p>...</p> :
            <ul>
                {products.map(product => <li key={product.id}>
                        <span>{(cart.find(cartProduct => product.id === cartProduct.id)?.quantity) || 0}</span>&nbsp;
                        <span>{product.name}</span>&nbsp;
                        <button onClick={() => onAddCartProduct(product)}>{product.currency} {product.price}</button>&nbsp;
                        <button onClick={() => onDeleteCartProduct(product)}>X</button>
                    </li>
                )}
            </ul>
        }
    </>
}

export default Products
