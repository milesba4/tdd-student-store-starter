export default function CheckoutForm(isOpen,shoppingCart,checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm) {
  return (
    <div classNme="wrapper">
      <div className="checkout-form">
        <input className ="checkout-form-input" type = "email" name = "email" placeholder = "student@codepath.org" value = "checkoutForm.email" onChange={handleOnCheckoutFormChange()}/>
        </div>

    </div>
  );
}
