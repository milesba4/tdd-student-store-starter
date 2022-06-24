import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
export default function Sidebar({isOpen,handleAddItemToCart, shoppingCart,products, checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm,handleOnToggle, error}) {

  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
        <button className={isOpen ? "toggle-button button open" : "toggle-button"} onClick={()=>handleOnToggle()}> 
        <i className="material-icons md-48">arrow_forward</i>
        </button> 
         {<><ShoppingCart products={products} handleAddItemToCart ={handleAddItemToCart} shoppingCart={shoppingCart}/>
         <CheckoutForm/></>
         } 

  </section>
  )
}
