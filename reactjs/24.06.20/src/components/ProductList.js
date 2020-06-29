import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const items = props.data.map((item) => {
    return <ProductItem key={item.id} info={item} add={props.addIt} />;
  });
  return <ul>{items}</ul>;
};

export default ProductList;
