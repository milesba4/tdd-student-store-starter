import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
export default function Sidebar({isOpen, shoppingCart,products, checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm,handleOnToggle, error}) {

  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
        <button className="toggle-button" onClick={()=>handleOnToggle()}> 
        <i className="material-icons md-48">arrow_forward</i>
        </button> 
         {<><ShoppingCart products={products} shoppingCart={shoppingCart}/>
         <CheckoutForm/></>
         } 

  </section>
  )
}
