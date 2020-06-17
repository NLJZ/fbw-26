import React from "react";
import { display, add } from "./helpers";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // display("dogs");
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // print = () => {
  //   console.log("I am function without this and don't need bind");
  // };
  // function call outside of constructor with bind to use
  handleSubmit() {
    console.log("Hi I come from bind");
  }

  render() {
    // this in render
    this.newUser = () => {
      console.log("I am a function being built in render");
    };
    return (
      <React.Fragment>
        <h1 className="container">Hi I am React and Dogs</h1>
        {this.newUser()}
        {this.handleSubmit}
        {add(5, 2)}
        {/* <List fun={this.add} /> */}
        {/* {this.print()} */}
      </React.Fragment>
    );
  }
}
