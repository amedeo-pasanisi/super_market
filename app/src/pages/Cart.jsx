const Cart = ({cart}) => {
    const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

    return <>
        <h1>Your Cart</h1>
        {cart.length ?
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Quanity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cartProduct => <tr key={cartProduct.id}>
                            <td>{cartProduct.name}</td>
                            <td>{cartProduct.currency} {cartProduct.price}</td>
                            <td>{cartProduct.quantity}</td>
                            <td>{cartProduct.currency} {(cartProduct.price) * cartProduct.quantity}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>{cart[0].currency} {totalPrice}</th>
                    </tr>
                </tfoot>
            </table>
            :
            <p>You have not added any product to your cart yet.</p>
        }
    </>
}

export default Cart
