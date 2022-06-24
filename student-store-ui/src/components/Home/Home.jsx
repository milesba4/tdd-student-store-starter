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
      
      <ul className="sub-nav">
      {["All Categories","Clothing","Food","Accessories","Tech"].map((category)=>
        (
          <li><button type="button" onClick={()=>setCategories(category)}>{category}</button></li>
        )
        )}
      </ul>
      <ProductGrid handleAddItemToCart={handleAddItemToCart} userInput={userInput} selectCategory={selectCategory} products={products} /> 
     
    </div>
  )
}
