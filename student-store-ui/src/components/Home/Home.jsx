import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
export default function Home({products,handleAddItemToCart,handleRemoveItemToCart}) {
  return (
    <div className="home">
       <Hero/> 
      <h2>Best Selling Products</h2>
      <ProductGrid products={products}/> 
     
    </div>
  )
}
