import React from "react";
import List from "./components/List";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hi I am React</h1>
        <List />
      </React.Fragment>
    );
  }
}
