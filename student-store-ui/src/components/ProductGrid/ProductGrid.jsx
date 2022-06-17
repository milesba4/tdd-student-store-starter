import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products}) {
    return (
    <div className="product-grid">
     {products.map((element) =>{
        return(
            <div className="product-card">
            <ProductCard key={element.id} element={element}/>
            </div>
        )})}

    </div>
 

)


 }