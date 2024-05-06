import { useState, useEffect } from "react"
import Product from "./Product"
import useFetch from "./useFetch"
import Loader from "./Loader"

const Products = ({cart, onProductAdd, onProductDelete}) => {
  const [products, setProducts] = useState([])
  const { get, loading } = useFetch("https://stripe-server-opal.vercel.app/")

  useEffect(() => {
    get("products")
      .then((data) => {setProducts(data)})
      .catch((error) => console.log("Could not load products", error))
  }, [])

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            ></Product>
          )
        })}
      </div>
    </div>
  )
}

export default Products
