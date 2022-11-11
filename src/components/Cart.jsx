
import React, { useState } from "react";
import "../styles/Cart.css";

export default function Cart({ handleClick }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Flamingo",
      price: 5,
      amount: 2,
    },
    {
      id: 3,
      name: "Peperroni",
      price: 6,
      amount: 3,
    },
  ]);
  var total = 0;
  return (
    <div className="cartCard">
      <button className="closeCart" onClick={handleClick}>
        X
      </button>
      <h3>
        <i class="fa-solid fa-cart-shopping"></i>
        Cart
      </h3>
      <p>
        {cartItems.length > 0
          ? `There are ${cartItems.length} items in your cart`
          : "No items yet"}
      </p>
      <div className="cartItems">
        {cartItems.map((item) => {
          total += item.price * item.amount;
          return (
            <div key={item.id}>
              <p>
                <b>{item.amount}</b> x {item.name} --------- {item.price} x{" "}
                {item.amount} = <b>${item.price * item.amount}</b>
              </p>
            </div>
          );
        })}
        <h2 className="cartTotal">{total > 0 ? `Total $${total}` : null}</h2>
      </div>
      <button className="resetCart">Reset Cart</button>
    </div>
  );
}
