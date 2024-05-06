import reactImg from "./assets/about.jpg"

const AboutUs = () => {
    return <>
        <h1>About Us</h1>
        <p>
            We started operations in 2020. We guarantee fresh produce.
            Save time by shopping on our app and we'll deliver the products right to your home.
            We use Stripe to process your payment.
        </p>
        <img
            src={reactImg}
            height="240"
            alt="A hand passing groceries to another hand"
        />
    </>
}

export default AboutUs
