import counter from "./counter";
import userLog from "./login";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  userLog,
});

export default allReducers;
