import * as React from "react"
export default function ShoppingCart({shoppingCart,products}) {
    console.log("Sh=",shoppingCart)
return(
 <div className = "shopping-cart"> 
    {shoppingCart.map((item) =>{   // iterating through shoppingCart array and displaying the itemId of each object 
        let quantity = item.quantity
        console.log("item s",item)
        let itemProduct= products.find(e => e.id === item.itemId) 
        console.log("name=", itemProduct)
        return(
            <div className= "cart-product-info">
                <span className="cart-product-name">{itemProduct.name} </span> 
                <span className="cart-product-quantity">{quantity}</span> 
            </div>
        )})}
</div> 
)
 }