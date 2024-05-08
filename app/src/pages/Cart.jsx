import { useMemo, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripeLoadedPromise = loadStripe("pk_test_51LC4KNCO80cQwQQ59GI91jcPVwOt1Ccu4VyCSmPnHFhloE9o7fRsV13gKzSGWuingZsUxhW56gpsdkNNeETLIfDu00WJBrWT4p")

const Cart = ({cartProducts}) => {
    const [email, setEmail] = useState("")
    const totalPrice = useMemo(() => {
        return cartProducts.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    }, [cartProducts])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const lineItems = cartProducts.map((cartProduct) => {
          return { price: cartProduct.default_price, quantity: cartProduct.quantity }
        })
        stripeLoadedPromise.then((stripe) => {
          stripe
            .redirectToCheckout({
              lineItems: lineItems,
              mode: "payment",
              successUrl: "http://localhost:5173/",
              cancelUrl: "http://localhost:5173/",
              customerEmail: email,
            })
            .then((response) => {
              // This will only log if the redirect did not work
              console.log(response.error)
            })
            .catch((error) => {
              // Wrong API key? you will see the error message here
              console.log(error)
            })
        })
      }

    return <>
        <h1>Your Cart</h1>
        {cartProducts.length ?
            <>
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
                        {cartProducts.map(cartProduct => <tr key={cartProduct.id}>
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
                            <th>{cartProducts[0].currency} {totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>
                <br />
                <form onSubmit={handleFormSubmit}>
                    <span>Enter your email and then click on pay and your products will be delivered to you on the same day!</span><br />
                    <label className="label">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            />
                        <span>*</span>
                    </label>
                    <button type="submit">Pay</button>
                </form>
            </>
            :
            <p>You have not added any product to your cart yet.</p>
        }
    </>
}

export default Cart
