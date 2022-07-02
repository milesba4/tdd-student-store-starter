import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
export default function Sidebar({
  isOpen,
  handleAddItemToCart,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  error,
}) {

  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
      <button
        className={isOpen ? "toggle-button button open" : "toggle-button"}
        onClick={() => handleOnToggle()}
      >
        <i className="material-icons md-48">arrow_forward</i>
      </button>
      {isOpen && (
        <>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            error={error}
          />
        </>
      )}
    </section>
  );
}
