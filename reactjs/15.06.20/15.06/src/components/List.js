import React, { Component } from "react";
import UserList from "./Userlist";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  render() {
    this.changeHandle = (e) => {
      console.log(e.target.value);
      this.setState({ userInput: e.target.value });
      // console.log(this.state.userInput);
    };

    this.add = (e) => {
      e.preventDefault();
      const userText = this.state.userInput;
      this.setState({
        userInput: "",
        list: [...this.state.list, userText],
      });
    };

    this.remove = (itemToBeRemoved) => {
      const newArr = this.state.list.filter((item) => item !== itemToBeRemoved);
      console.log(newArr);
      this.setState({
        list: newArr,
      });
    };

    return (
      <React.Fragment>
        <form onSubmit={this.add}>
          <input
            type="text"
            value={this.state.userInput}
            // onChange checks for changes to user input field then runs changeHandle function to set the state.
            onChange={this.changeHandle}
            placeholder="Enter Todo..."
          />
          <input type="submit" value="Add" />
        </form>
        <UserList list={this.state.list} del={this.remove} />
      </React.Fragment>
    );
  }
}
