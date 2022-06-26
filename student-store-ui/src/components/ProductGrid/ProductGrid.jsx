import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"


export default function ProductGrid({shoppingCart,products, handleRemoveItemToCart,handleAddItemToCart,selectCategory,userInput}) {

    console.log("userInput=",userInput)
    console.log("object=",products)
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
     {getSearchProducts().map((element) =>{  // iterates through every element in the returned array of getSearchProducts and renders a product card for it
        console.log("element.id=",element.id)
        return(
            <div className="product-card">
            
            <ProductCard shoppingCart = {shoppingCart} productId={element.id} handleRemoveItemToCart={handleRemoveItemToCart} handleAddItemToCart = {handleAddItemToCart} products={products}  key={element.id} element={element}/>
            </div>
        )})}

    </div>
 

)


 }