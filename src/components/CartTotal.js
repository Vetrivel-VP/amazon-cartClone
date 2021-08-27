import React from "react";
import "../css/CartTotal.css";

function CartTotal() {
  return (
    <div className="CartTotal">
      <h3>
        Subtotal(5 items):
        <span className="CartTotal-price">$2,172.38</span>
      </h3>
      <button className="CartTotal-button">Processd to checkout</button>
    </div>
  );
}

export default CartTotal;
