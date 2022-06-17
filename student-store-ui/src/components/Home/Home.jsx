import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search"
export default function Home({products,handleAddItemToCart,handleRemoveItemToCart, UserInput, setUserInput}) {
  return (
    <div className="home">
      <Hero/> 
      <h2>Best Selling Products</h2>
      <Search UserInput={UserInput} setUserInput={setUserInput}/>
      <ProductGrid products={products}/> 
     
    </div>
  )
}
