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
            <div className="item-quantity">
              <select>
                <option value="1">Qty:1</option>
                <option value="2">Qty:2</option>
                <option value="3">Qty:3</option>
              </select>
            </div>
            <div className="item-action-divider">|</div>
            <div className="item-delete">Delete</div>
          </div>
        </div>
      </div>
      <div className="CartItem-price">$799.00</div>
    </div>
  );
}

export default CartItem;
