import * as React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

const products = useState([])
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/"> <Home/> <Navbar/> <Sidebar/> </Route>
          <Route path="/products/:productId"> <ProductDetail/> <Navbar/> <Sidebar/> </Route>
          <Route path="*"> <NotFound/><Navbar/> <Sidebar/> </Route>




        </Routes>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
       
        </main>
        
      </BrowserRouter>
      
    </div>
  )
}
