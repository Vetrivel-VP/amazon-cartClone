import React from "react";
import "../css/App.css";
import CartItems from "./CartItems.js";
import CartTotal from "./CartTotal.js";

function AppMain() {
  return (
    <div className="App-main">
      <CartItems />
      <CartTotal />
    </div>
  );
}

export default AppMain;
