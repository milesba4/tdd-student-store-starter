import * as React from "react"
import "./ProductCard.css"
export default function ProductCard({products}) {
    return (
      <div>
        {products.map((element) =>{
        return(
        <div className="product-card"> 
        </div>
        )})}
      </div>
    )
  }
  