import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import axios from "axios";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetail from "../ProductDetail/ProductDetail";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Search from "../Search/Search";

//fetching data

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");
  const [selectCategory, setCategories] = React.useState("All Categories");
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(true);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: " ",
    email: " ",
  });

  React.useEffect(async () => {
    try {
      const response = await axios.get(
        "https://codepath-store-api.herokuapp.com/store"
      );
      if (response.data.products) {
        setProducts(response.data.products);
      }
      console.log("products=", products);
    } catch (error) {
      setError(error);

      console.log("error=", error);
    }
  }, []);

  function handleOnToggle() {
    setIsOpen(!isOpen);

    console.log("open status1=", isOpen);
  }

  function handleAddItemToCart(productId) {
    console.log("productid=", productId);
    let itemFound = shoppingCart.find((x) => x.itemId === productId);
    if (itemFound) {
      console.log("quant1=", shoppingCart.itemId);
      let copyShoppingCart = shoppingCart;
      let index = shoppingCart.findIndex(
        (element) => element.itemId == productId
      );
      copyShoppingCart[index].quantity += 1; //add
      setShoppingCart(copyShoppingCart);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
      console.log("middlesc=", shoppingCart);
    }
    console.log("shopping cart=", shoppingCart);
  }

  function handleRemoveItemToCart(productId) {
    let itemFound = shoppingCart.find((x) => x.itemId === productId);
    if (itemFound) {
      let copyShoppingCart = shoppingCart;
      let index = shoppingCart.findIndex(
        (element) => element.itemId == productId
      );
      copyShoppingCart[index].quantity -= 1;
      if (copyShoppingCart[index].quantity <= 0) {
        // if quantity is less than 0 remove object from arr
        setShoppingCart(shoppingCart.filter((_, idx) => idx !== index)); // removes the selected index from arr
      } else {
        setShoppingCart(copyShoppingCart);
      }
    }
    console.log("shopping cart=", shoppingCart);
  }


  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleOnSubmitCheckoutForm = () => {
    axios
      .post("http://localhost:3001/store", {
        user: checkoutForm,
        shoppingCart: shoppingCart,
      })
      .then((response) => {
        setShoppingCart([]);
        setCheckoutForm({ name: " ", email: " "  });
        console.log("checkoutForm=", checkoutForm)
      })
      .catch((error) => {
      setError(error);
      console.log(error);
    });
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/store")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            error={error}
            products={products}
            shoppingCart={shoppingCart}
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
          />
          <Routes path="*" element={<NotFound />}>
            <Route
              path="/"
              element={
                <Home
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  shoppingCart={shoppingCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleOnToggle={handleOnToggle}
                  selectCategory={selectCategory}
                  userInput={userInput}
                  setUserInput={setUserInput}
                  products={products}
                  setCategories={setCategories}
                  
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  error={error}
                  setError={setError}
                  shoppingCart={shoppingCart}
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                  handleAddItemToCart={handleAddItemToCart}
                  handleOnToggle={handleOnToggle}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

