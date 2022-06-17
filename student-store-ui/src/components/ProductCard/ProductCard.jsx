import * as React from "react"
import "./ProductCard.css"
export default function ProductCard({products}) {
    return (
      <div>
        {products.map((element) =>{
        return(
        <div className="product-card"> 
        <img src = {element.image} width="200" height="200"/>
        </div>
        )})}
      </div>
    )
  }
  