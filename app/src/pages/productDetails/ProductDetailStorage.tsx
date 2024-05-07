import { useOutletContext } from "react-router-dom"

const ProductDetailStorage = () => {
  const storage = useOutletContext().storage
  
  return <p>
    <strong>Storage instructions:</strong> {storage}
  </p>
}

export default ProductDetailStorage