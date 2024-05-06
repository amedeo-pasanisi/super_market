import { useOutletContext } from "react-router-dom"
import Button from "./Button"

const ProductDetailInfo = ({ onProductAdd }) => {
  const product = useOutletContext()

  return (
    <>
      <p>
        {product.description} sold at <strong>{product.currency} {product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>{product.currency} {product.price}</Button>
    </>
  )
}

export default ProductDetailInfo
