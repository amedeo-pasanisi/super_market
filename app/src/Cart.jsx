const Cart = ({cart}) => {
    return <>
        <h1>Your Cart</h1>
        {cart ?
            <p>Cart products</p> :
            <p>You have not added any product to your cart yet.</p>
        }
    </>
}

export default Cart
