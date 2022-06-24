import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import ProductView from "../ProductView/ProductView"
export default function ProductDetail({products, handleOnToggle}) {
return(
<div> 
    <ProductView products={products}/>
    Hello
</div>

)
 }