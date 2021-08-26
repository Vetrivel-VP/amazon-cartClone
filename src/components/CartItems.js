import React from "react";
import "../css/CartItems.css";
import CartItem from "./CartItem";

function CartItems({ items }) {
  console.log(items);
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <CartItem />
    </div>
  );
}

export default CartItems;
