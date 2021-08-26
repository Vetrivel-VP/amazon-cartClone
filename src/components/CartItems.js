import React from "react";
import "../css/CartItems.css";
import CartItem from "./CartItem";

function CartItems() {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <CartItem />
    </div>
  );
}

export default CartItems;
