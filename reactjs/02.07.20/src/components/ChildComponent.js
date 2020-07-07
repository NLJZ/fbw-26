import React, { Component, Fragment } from "react";
import { increment, decrement, changeName } from "../actions";
import { connect } from "react-redux";

class ChildComponent extends Component {
  render() {
    const { store, increment, decrement, changeName } = this.props;

    return (
      <Fragment>
        <h4>Hey, {store.userName} I am a child component</h4>
        <button onClick={() => changeName("Ali")}>click</button>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        {store.counter}
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return store;
};

const mapDispatchToProps = {
  increment,
  decrement,
  changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent);
