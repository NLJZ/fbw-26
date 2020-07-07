import React, { Component, Fragment } from "react";

import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Redux Simple app</h1>
        <ParentComponent store="store" />
      </Fragment>
    );
  }
}

export default App;
