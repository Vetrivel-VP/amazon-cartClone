import React from "react";
import "../css/CartItem.css";

function CartItem({ value }) {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={process.env.PUBLIC_URL + "/items/" + value.image} alt="" />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>{value.title}</h2>
          <div className="info-stock">{value.stock}</div>
          <div className="item-actions">
            <div className="item-quantity">
              <select value={value.quantity}>
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
      <div className="CartItem-price">{value.price}</div>
    </div>
  );
}

export default CartItem;
