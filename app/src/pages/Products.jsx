import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useFetch from "../useFetch"

const Products = ({cartProducts, onAddCartProduct, onDeleteCartProduct}) => {
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
                        <span>{(cartProducts.find(cartProduct => product.id === cartProduct.id)?.quantity) || 0}</span>&nbsp;
                        <Link to={`/products/${product.id}`}>{product.name}</Link>&nbsp;
                        <button onClick={() => onAddCartProduct(product)}>{product.currency} {product.price}</button>&nbsp;
                        <button onClick={() => onDeleteCartProduct(product)}>X</button>
                    </li>
                )}
            </ul>
        }
    </>
}

export default Products
