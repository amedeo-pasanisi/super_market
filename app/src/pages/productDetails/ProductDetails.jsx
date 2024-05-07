import { useState, useEffect } from "react"
import { NavLink, useParams, Outlet } from "react-router-dom"
import useFetch from "../../useFetch"

const ProductDetails = ({onAddCartProduct}) => {
    const params = useParams()
    const {get, loading} = useFetch("https://stripe-server-opal.vercel.app/")
    const [product, setProduct] = useState({})

    useEffect(() => {
        get(`products/${params.id}`)
            .then((data) => {
                setProduct(data)
            })
            .catch((error) => console.log("Could not load product details", error))
    }, [])
    
    return loading ? <p>...</p> :
        <>
            <h1>{product.name}</h1>
            <button onClick={() => onAddCartProduct(product)}>{product.currency} {product.price}</button>
            <ul>
              <li>
                <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})} to="" end>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})} to="nutrition">
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})} to="storage">
                  Storage
                </NavLink>
              </li>
            </ul>
            <Outlet context={product} />
        </>
}

export default ProductDetails
