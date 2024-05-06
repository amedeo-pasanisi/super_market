import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Input from "./Input"
import Button from "./Button"

const stripeLoadedPromise = loadStripe("pk_test_51LC4KNCO80cQwQQ59GI91jcPVwOt1Ccu4VyCSmPnHFhloE9o7fRsV13gKzSGWuingZsUxhW56gpsdkNNeETLIfDu00WJBrWT4p")

const Cart = ({ cart }) => {
  const [email, setEmail] = useState("")
  const totalPrice = cart.reduce((total, cartProduct) => total + cartProduct.price * cartProduct.quantity, 0)
  
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const lineItems = cart.map((cartProduct) => {
      return { price: cartProduct.default_price, quantity: cartProduct.quantity }
    })
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "https://supermarkettest.vercel.app/",
          cancelUrl: "https://supermarkettest.vercel.app/",
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

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
        {cart.length > 0 && <>
          <table className="table table-cart">
            <thead>
              <tr>
                <th width="25%" className="th-product">Product</th>
                <th width="20%">Unit price</th>
                <th width="10%">Quanity</th>
                <th width="25%">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartProduct) => {
                return (
                  <tr key={cartProduct.id}>
                    <td><img src={cartProduct.images[0]} width="30" height="30" alt="" />{" "}{cartProduct.name}</td>
                    <td>{cartProduct.currency} {cartProduct.price}</td>
                    <td>{cartProduct.quantity}</td>
                    <td><strong>{cartProduct.currency} {(cartProduct.price) * cartProduct.quantity}</strong></td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
                <th className="cart-highlight">Total</th>
                <th className="cart-highlight">{cart[0].currency} {totalPrice}</th>
              </tr>
            </tfoot>
          </table>
          <form className="pay-form" onSubmit={handleFormSubmit}>
            <p>Enter your email and then click on pay and your products will be delivered to you on the same day!</p><br />
            <Input
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="email"
              required
            />
            <Button type="submit">Pay</Button>
          </form>
        </>}
      </div>
    </div>
  )
}

export default Cart
