import { useOutletContext } from "react-router-dom"

const ProductDetailInfo = () => {
    const product = useOutletContext()

    return <p>
        {product.description} sold at <strong>{product.currency} {product.price}</strong> per
        piece.
    </p>
}

export default ProductDetailInfo
