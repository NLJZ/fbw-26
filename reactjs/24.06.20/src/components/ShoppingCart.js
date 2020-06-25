import React from "react";

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      data: this.props.cartData,
    };
  }

  render() {
    return <ul></ul>;
  }
}
