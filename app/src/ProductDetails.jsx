import { useState, useEffect } from "react"
import { NavLink, useParams, Outlet } from "react-router-dom"
import useFetch from "./useFetch"

export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/")
  const params = useParams()

  useEffect(() => {
    let id = 0
    switch(params.id) {
      case "prod_OigW4dRxAUQbx8":
        id = 4
        break
      case "prod_OigVxBsLDrKnae":
        id = 3
        break
      case "prod_OigTP8QJHZEASc":
        id = 2
        break
      case "prod_OigN0xJvtpg8xZ":
        id = 1
        break
    }
    get(`productinfo/id${id}.json`)
      .then((data) => {setProduct(data)})
      .catch((error) => console.log("Could not load product details", error))
  }, [])

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to=""
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="nutrition"
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>

        <Outlet context={product} />
      </div>
    </div>
  )
}
