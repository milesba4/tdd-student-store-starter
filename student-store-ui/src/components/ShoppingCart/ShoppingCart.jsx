import * as React from "react";
import "./ShoppingCart.css";
export default function ShoppingCart({ shoppingCart, products }) {
  return (
    <div className="shopping-cart">
      {shoppingCart.length == 0 ? (
        <h1>No items added to cart yet. Start shopping now!</h1>
      ) : (
        <GetShoppingCartItems shoppingCart={shoppingCart} products={products} />
      )}
    </div>
  );
}

export function GetShoppingCartItems({ shoppingCart, products }) {
  console.log("works");
  let subTotal = 0
  return(
     shoppingCart.map((item) => {
    // iterating through shoppingCart array and displaying the itemId of each object
    console.log("item s", item);
    let itemProduct = products.find((e) => e.id === item.itemId);
    console.log("name=", itemProduct);
    let quantity = item.quantity;
    console.log("q=", quantity);
    let price = itemProduct.price;
    let totalPrice = quantity * price;
    subTotal = subTotal + totalPrice
    
    return (
      <div class="header">
        <div class="product-row">
          <span class="flex-2 cart-product-name">Item: {itemProduct.name}</span>
          <br></br>
          <span class="center cart-product-quantity">Quantity:{quantity}</span>
          <br></br>
          <span class="center cart-product-price">Price:${price}</span>
          <br></br>
          <br></br>
        </div>
        
        <div className="receipt">
        <h2>------------------------------</h2>
              <h2>Receipt</h2>
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span />
            <span />
            <span className="center subtotal">${Math.ceil(subTotal.toFixed(2))}</span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="center">${(price * 0.0875).toFixed(2)}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span />
            <span />
            <span className="center total-price">${(subTotal+(price * 0.0875)).toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  })
    );
}
// {

//   <div className="CartTable">
//     <div className="header">
//       <div className="header-row">
//         <span className="flex-2">Name</span>
//         <span className="center">Quantity</span>
//         <span className="center">Unit Price</span>
//         <span className="center">Cost</span>
//       </div>
//       {
//        shoppingCart.map((item) => (
//       console.log("item s", item);
//     let itemProduct = products.find((e) => e.id === item.itemId);
//     console.log("name=", itemProduct);
//     let quantity = item.quantity;
//     console.log("q=", quantity);
//     let price = itemProduct.price;
//     let totalPrice = quantity * price;
//     subTotal = subTotal + totalPrice
//           <div className="product-row">
//             <span className="flex-2 cart-product-name">{itemProduct.name}</span>
//             <span className="flex-2 cart-product-quantity">{quantity}</span>
//             <span className="flex-2 cart-product-price">${price} </span>
//             <span className="flex-2 cart-product-subtotal">${Math.ceil(subTotal.toFixed(2))} </span>
//           </div>
//         ))
//       }
//     </div>
//     <div className="receipt">
//       <div className="receipt-subtotal">
//         <span className="label">Subtotal</span>
//         <span/>
//         <span/>
//         <span className="center subtotal">${(subTotal+(price * 0.0875)).toFixed(2)}</span>
//       </div>
//       <div className="receipt-taxes">
//         <span className="label">Taxes and Fees</span>
//         <span></span>
//         <span></span>
//         <span className="center">${(price * 0.0875).toFixed(2)}</span>
//       </div>
//       <div className="receipt-total">
//         <span className="label">Total</span>
//         <span/>
//         <span/>
//         <span className="center total-price">${(subTotal+(price * 0.0875)).toFixed(2)}</span>
//       </div>
//     </div>
//   </div>