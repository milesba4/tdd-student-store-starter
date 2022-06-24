import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ element, productId }) {
  return (
    <div>
      <Link to={`/products/${productId}`}>
        <img src={element.image} width="200" height="200" />
      </Link>
      <p className="name"> {element.name}</p>
      <p className="price"> ${element.price}</p>
      <div class="buttons">
        <button class="add">
          <i class="material-icons">add</i>
        </button>
        <button class="remove">
          <i class="material-icons">remove</i>
        </button>
      </div>
    </div>
  );
}
