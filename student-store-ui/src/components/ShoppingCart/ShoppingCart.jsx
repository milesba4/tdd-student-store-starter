import * as React from "react"
export default function ShoppingCart({shoppingCart,products}) {
return(
 <div className = "shopping-cart"> 
 
    {shoppingCart.map((item) =>{   // iterating through shoppingCart array and displaying the itemId of each object 
        console.log("item s",item)
        let itemProduct = products.find(e => e.id === item.itemId) // store product object if matches id
        console.log("name=", itemProduct)
        return(
            <div className= "cart-product-info">
                <div className="cart-product-name">
                {itemProduct}   
                </div>
                <div className="cart-product-quantity">
                {item.quantity}   
                </div>
            </div>
        )})}
</div> 
)
 }