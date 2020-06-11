import React from "react";
import Text from "./Text";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hi, I am a sandwich.</h1>
      <Text name="bread" amount="2 slices" />
      <Text name="brown mustard" amount="2 tbsp" />
      <Text name="mayo" amount="2 tbsp" />
      <Text name="olives" amount="5" />
      <Text name="havarti cheese" amount="2 slices" />
      <Text name="lettuce" amount="4 leaves" />
      <Text name="tomato slices" amount="3" />
      <Text name="dill relish" amount="2 tbsp" />
      {
        // Comment
      }
    </React.Fragment>
  );
};

export default App;
