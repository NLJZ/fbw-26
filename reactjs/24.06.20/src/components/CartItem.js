import React from "react";

const CartItem = (props) => {
  const { id, productName, icon, price } = props.info;
  return (
    <li key={id}>
      {productName} {icon} <h5>{price} Euros</h5>
    </li>
  );
};

export default CartItem;
