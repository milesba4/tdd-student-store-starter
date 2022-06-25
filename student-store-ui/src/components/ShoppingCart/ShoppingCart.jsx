import * as React from "react"
export default function ShoppingCart({shoppingCart,products}) {
    return(

    <div className = "shopping-cart"> 
    {shoppingCart.length!=0?(<getShoppingCartItems shoppingCart={shoppingCart} products={products}/>):<h1>None</h1>}
    </div> 
    )
 }
export function getShoppingCartItems({shoppingCart,products}){
    console.log("works")
    return(
        shoppingCart.map((item) =>{   // iterating through shoppingCart array and displaying the itemId of each object 
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
            )})
    )
 }