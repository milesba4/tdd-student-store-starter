import * as React from "react";





export default function Receipt({receiptPrice,receiptTotal, subTotal  }) {
    return (
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
            <span className="center">${(receiptPrice * 0.0875).toFixed(2)}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span />
            <span />
            <span className="center total-price">${receiptTotal}</span>
          </div>
        </div>
    );
  }