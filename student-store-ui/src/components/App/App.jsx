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



//fetching data



export default function App() {
  
  const API_URL= "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = React.useState([])

  React.useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    try {
      const ApiData = await axios.get(API_URL);
      console.log(ApiData.data.products);
      // if (ApiData.data.products.length > 0){
      //   setProducts(ApiData.data.products);
      // } else{
      //   setError("No products");
      // }
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setProducts([...ApiData])

  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="*" Navbar = {<Navbar/>} Sidebar={<Sidebar/>}/>
        </Routes>
        <main>
          {/* YOUR CODE HERE! */}
           <Navbar />
          {/* <Sidebar /> */}
          {/* <Home /> */}
          {/* <NotFound/>  */}
        </main>
        
      </BrowserRouter>
      
    </div>
  )
}
