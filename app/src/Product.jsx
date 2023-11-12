import { Link } from "react-router-dom"
import Button from "./Button"

export default function Product({product, ...props}) {
  const productFromCart = props.cart.find((cartProduct) => product.id === cartProduct.id)
  const quantity = productFromCart ? productFromCart.quantity : 0

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            width="100"
            height="100"
            className="product-image"
            alt={product.name}
          />
        </Link>
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (<Button outline onClick={() => props.onProductDelete(product.id)} className="product-delete">x</Button>)}
        </div>
        <Button outline onClick={() => props.onProductAdd(product)}>{product.currency} {product.price}</Button>
      </div>
    </div>
  )
}
