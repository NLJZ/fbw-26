import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  const items = props.data.map((item, i) => {
    return <CartItem key={i} info={item} />;
  });
  return (
    <div>
      <h1>Your Cart</h1>
      <ul>{items}</ul>
    </div>
  );
};

export default ShoppingCart;
