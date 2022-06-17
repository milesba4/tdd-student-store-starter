import * as React from "react"
import "./ProductCard.css"
export default function ProductCard({element}) {
    return (
      <div>
        <img src = {element.image} width="200" height="200"/>
        <p className="name"> {element.name}</p>
        <p className="price"> ${element.price}</p>
      </div>
    )
  }
  