import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
// const ProductItem = (props) => {
//   const { id, productName, icon, price, inventory } = props.info;
//   const cart = [];
//   const add = () => {
//     const clone = { ...props.info };
//     console.log(clone);
//     cart.push(clone);
//     console.log(cart);
//   };
//   return (
//     <li key={id}>
//       {productName} {icon} <h5>{price}</h5>
//       <button onClick={add} disabled={inventory === 0}>
//         {inventory > 0 ? "Add To Cart" : "Sold Out"};
//       </button>
//     </li>
//   );
// };

// export default ProductItem;

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      data: this.props.info,
    };
  }

  add = () => {
    console.log(this.state.data);
    this.setState({
      cart: [...this.state.cart, this.state.data],
    });
    return <ShoppingCart cartData={this.state.cart} />;
  };

  render() {
    const { id, productName, icon, price, inventory } = this.state.data;
    return (
      <li>
        {productName} {icon} <h5>{price}</h5>
        <button onClick={this.add} disabled={inventory === 0}>
          {inventory > 0 ? "Add To Cart" : "Sold Out"};
        </button>
      </li>
    );
  }
}
