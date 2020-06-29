import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.state = { text: "" };
  }

  login = () => {
    this.setState({ userName: "DogMan" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ userName: "Nathan" });
    }, 1000);
  }

  componentDidUpdate() {
    this.text = "I run after componentDidMount";
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hi {this.state.userName} I am React</h1>
        <h1>{this.state.text}</h1>
        <button onClick={this.login}> Login</button>
      </React.Fragment>
    );
  }
}
