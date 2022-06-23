import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
export default function Sidebar({isOpen, ShoppingCart,products, checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm,handleOnToggle}) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={()=>handleOnToggle()}> toggle</button>
      {/* <p>Sidebar</p>
      
      <ul>
        <li>
          <a href=""> Home</a>
        </li>
        <li>
          <a href=""> About Us</a>
        </li>
        <li>
          <a href=""> Contact Us</a>
        </li>
        <li>
          <a href=""> Buy Now</a>
        </li>
      </ul> */}

      {<ShoppingCart/>}
      {<CheckoutForm/>}
    </section>
  )
}
