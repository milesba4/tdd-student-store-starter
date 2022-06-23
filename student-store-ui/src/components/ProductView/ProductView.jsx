import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
export default function ProductView({products,productId,quantity,handleAddItemToCart,handleRemoveItemToCart}) {
    return (
        <div className = "product-view">
        <h1 className="product-id">Product #{productId}</h1>
        <ProductCard products={products}/>
        </div>
)


 }