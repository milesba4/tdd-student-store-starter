import * as React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../Logo/Logo"
import { useState } from "react";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound";
import "./App.css"
import axios from "axios"
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetail from "../ProductDetail/ProductDetail";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Search from "../Search/Search";


//fetching data



export default function App() {
  

  const [products, setProducts] = React.useState([])
  const[userInput,setUserInput]= React.useState("")
  const[selectCategory,setCategories] =React.useState("All Categories")
  const[isFetching,setIsFetching] = React.useState(false)
  const[error,setError]=React.useState("")
  const[isOpen,setIsOpen] = React.useState(false)
  const[isOpen,setIsOpen] = React.useState(true)
  const[shoppingCart,setShoppingCart]=React.useState([{itemId:"",quantity:0}])
  const[checkoutForm,setCheckoutForm]=React.useState("")

React.useEffect(async() => {
  try{
    const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
    if(response.data.products){
      setProducts(response.data.products)}
      console.log("products=",products)
  }
  catch (error){
    setError(error)
    
    console.log("error=", error)
  }
}, []);

function handleOnToggle(){
if (isOpen == true){
  setIsOpen(false)
}else{
  setIsOpen(true)
}
console.log("open status=", isOpen)
}

function handleAddItemToCart(productId){
if(productId){
  setShoppingCart(current =>  ({
    ...current, [itemId]:productId,[quantity]:shoppingCart[quantity] +=1
  }))
}else{
  setShoppingCart(current =>  ({
    ...current, [itemId]:productId,[quantity]:1
  }))
console.log("shopping cart=", shoppingCart)
}
}

function handleRemoveItemFromCart(){

}
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle}/>
          <Routes path="*" element = {<NotFound/>}>
          <Route path="/" element={<Home handleAddItemToCart={handleAddItemToCart} handleOnToggle={handleOnToggle} selectCategory={selectCategory} userInput={userInput} setUserInput={setUserInput} products={products} setCategories={setCategories}  />} /> 
          <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleOnToggle={handleOnToggle} />}/>
        </Routes>
        </main>
        
      </BrowserRouter>
      
    </div>
  )
}
