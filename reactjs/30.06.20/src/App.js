import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const userLog = useSelector((state) => state.userLog);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Hi, my value is: {counter}</h1>
      <button onClick={() => dispatch(actions.increment(10))}>+</button>
      <button onClick={() => dispatch(actions.decrement(5))}>-</button>
    </React.Fragment>
  );
};
export default App;
