import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
export default function Sidebar({isOpen, ShoppingCart,products, checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm,handleOnToggle}) {
  return (

      {<ShoppingCart/>}
      {<CheckoutForm/>}
    </section>
  )
}
