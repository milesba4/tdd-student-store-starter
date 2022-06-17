import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products}) {
    return (
    <div className="product-grid">
        <ProductCard products={products}/>
    </div>
 

)


 }