import * as React from "react"
import "./Sidebar.css"
import "../ShoppingCart/ShoppingCart"
export default function Sidebar() {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <ShoppingCart/>
      <CheckoutForm/>
    </section>
  )
}
