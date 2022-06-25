import * as React from "react"
export default function ShoppingCart({shoppingCart,products}) {
    console.log("Sh=",shoppingCart)
return(
 <div className = "shopping-cart"> 
    {shoppingCart.map((item) =>{   // iterating through shoppingCart array and displaying the itemId of each object 
        console.log("item s",item)
        let itemProduct= products.find(e => e.id === item.itemId) 
        console.log("name=", itemProduct)
        let quantity = item.quantity
        let price = itemProduct.price
        let totalPrice = quantity * price
        return(
            <div className= "cart-product-info">
                <span className="cart-product-name">Item: {itemProduct.name}</span>
                 <br></br>
                <span className="cart-product-quantity">Quantity:{quantity}</span> 
                <br></br>
                <span className="cart-product-total-price">Price:  {totalPrice}</span> 
            </div>

        )})}
</div> 
)
 }