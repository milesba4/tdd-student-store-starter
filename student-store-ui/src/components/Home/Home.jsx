import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search"
export default function Home({products,handleAddItemToCart,handleRemoveItemToCart, userInput, setUserInput, setCategories, selectCategory}) {



  return (
    <div className="home">
      <Hero/> 
      <Search UserInput={userInput} setUserInput={setUserInput} />
      <h2>Best Selling Products</h2>
      <Search UserInput={UserInput} setUserInput={setUserInput}/>
      <ProductGrid products={products}/> 
      <ul className="sub-nav">
      </ul>
     
    </div>
  )
}
