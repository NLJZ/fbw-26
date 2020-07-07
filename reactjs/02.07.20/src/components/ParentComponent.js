import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  render() {
    const { store } = this.props;

    return (
      <Fragment>
        <ChildComponent store={store} propsName="Nancy" />
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store.userName);
  return {
    store,
  };
};

export default connect(mapStateToProps)(ParentComponent);
