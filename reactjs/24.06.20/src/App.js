import React from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
      shoppingCart: [],
    };
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userText = this.state.userInput.toLowerCase();
    let newArr = this.state.data.filter(
      (item) => item.productName === userText
    );
    this.setState({
      filteredData: newArr,
    });
  };

  addToCart = (itemToAdd) => {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, itemToAdd],
    });
  };
  render() {
    return (
      <main>
        <h1>Welcome to our online store</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <input type="submit" value="filter" />
        </form>
        <ProductList
          data={
            this.state.userInput ? this.state.filteredData : this.state.data
          }
          addIt={this.addToCart}
        />
        <ShoppingCart data={this.state.shoppingCart} />
      </main>
    );
  }
}
