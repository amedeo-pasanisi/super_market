import { useState, useEffect } from "react"
import { NavLink, useParams, Outlet } from "react-router-dom"
import useFetch from "./useFetch"
import Loader from "./Loader"

export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const {get, loading} = useFetch("https://stripe-server-opal.vercel.app/")
  const params = useParams()

  useEffect(() => {
    get(`products/${params.id}`)
    .then((data) => {
      setProduct(data)
    })
    .catch((error) => console.log("Could not load product details", error))
  }, [])
  
  return (
    <div className="product-details-layout">
      {loading ? <Loader /> : <>
        <div>
          <h2>{product.name}</h2>
          <img src={product.images[0]} width="125" height="125" className="product-details-image" alt={product.name} />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "tab-active" : "")} to="" end>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "tab-active" : "")} to="nutrition">
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "tab-active" : "")} to="storage">
                  Storage
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet context={product} />
        </div>
      </>}
      
    </div>
  )
}
