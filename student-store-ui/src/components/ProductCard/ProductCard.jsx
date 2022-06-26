import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";


export default function ProductCard({shoppingCart,handleAddItemToCart,handleRemoveItemToCart, element, productId }) {
  console.log("el=", element)
  return (
    <div>
      <Link to={"/products/" + productId}>
        <img src={element.image} width="200" height="200" />
      </Link>
      <p className="name"> {element.name}</p>
      <p className="price"> ${element.price}</p>
      <div class="buttons">
        <button class="add" onClick={()=>handleAddItemToCart(productId)}>
          <i class="material-icons md32">add</i>
        </button>
        <button class="remove" onClick={()=>handleRemoveItemToCart(productId)}>
          <i class="material-icons md32">remove</i>
        </button>
      </div>
      <div className = "quantity-display">
      {/* <QuantityDisplay productId={productId} shoppingCart={shoppingCart} element = {element} />     */}
      </div>
    </div>
  );
}

// export function QuantityDisplay({shoppingCart, productId}){
//   console.log("prodid",productId)
//   let index = shoppingCart.findIndex(item=> item.itemId == productId) // finding index of object that contains matching id
//   console.log("ind=", index)
// return(
// <div className = "quantity">
// {shoppingCart[index].quantity}
// </div>


// )



//}
