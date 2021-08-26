import React from "react";
import "../css/CartItem.css";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://assets.swappie.com/swappie-product-iphone-11-black.png"
          alt=""
        />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Apple iPhone 11</h2>
          <div className="info-stock">In-Stock</div>
          <div className="item-actions">
            <div className="item-quantity"></div>
            <div className="item-delete">Delete</div>
          </div>
        </div>
      </div>
      <div className="CartItem-price">$799</div>
    </div>
  );
}

export default CartItem;
