import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products}) {

export default function ProductGrid({products, selectCategory,userInput}) {

    console.log("userInput=",userInput)

    function getSearchProducts(){
        if(userInput=="" && selectCategory=="All Categories"){  // if search query is nothing return all products
        return products
        }
        else if (selectCategory=="All Categories" && userInput != ""){ 
          return  products.filter((e)=>e.name.toLowerCase().includes(userInput))
        }
        else{   // otherwise return an array of products in which the search query value is in the product's name
        console.log("userInput2=", userInput)
        console.log("filter=",products.filter((e)=>e.name.includes(userInput.toLowerCase())))
        return products.filter((e)=>e.category == selectCategory.toLowerCase() && e.name.toLowerCase().includes(userInput))// return an arr of categories where all categories are return
        }
    }


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