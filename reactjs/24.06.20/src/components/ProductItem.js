import React from "react";

const ProductItem = (props) => {
  const { id, productName, icon, price, inventory } = props.info;
  return (
    <li key={id}>
      {productName} {icon} <h5>{price}</h5>
      <button onClick={() => props.add(props.info)} disabled={inventory === 0}>
        {inventory > 0 ? "Add To Cart" : "Sold Out"};
      </button>
    </li>
  );
};

export default ProductItem;
