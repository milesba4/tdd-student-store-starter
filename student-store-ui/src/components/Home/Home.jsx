import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";
export default function Home({
  handleOnCheckoutFormChange,
  shoppingCart,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  userInput,
  setUserInput,
  setCategories,
  selectCategory,
  checkoutForm
}) {
  return (
    <div className="home">
      <Hero />
      <div className="display">
        <Search UserInput={userInput} setUserInput={setUserInput} />
        <h2>Best Selling Products</h2>
      </div>
      <ul className="sub-nav">
        {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map(
          (category) => (
            <li>
              <button type="button" onClick={() => setCategories(category)}>
                {category}
              </button>
            </li>
          )
        )}
      </ul>
      <ProductGrid
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        shoppingCart={shoppingCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        handleAddItemToCart={handleAddItemToCart}
        userInput={userInput}
        selectCategory={selectCategory}
        products={products}
      />
    </div>
  );
}
