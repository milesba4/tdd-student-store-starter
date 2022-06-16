import * as React from "react"
import "./Home.css"

export default function Home({products,handleAddItemToCart,handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero/>
      <ProductGrid/>
      <p>Home</p>
    </div>
  )
}
