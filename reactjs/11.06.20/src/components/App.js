import React from "react";
import { Text, Hello } from "./Text";
const userLogin = true;
const names = ["Elena", "Peter", "Orland", "Amber", "Charlie"];

const App = () => {
  const listName = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <React.Fragment>
      <h1>Hi, I am a sandwich.</h1>
      <Text name={userLogin ? "Name" : "IDKY"} />
      <Text name="bread" amount="2 slices" />
      <Text name="brown mustard" amount="2 tbsp" />
      <Text name="mayo" amount="2 tbsp" />
      <Text name="olives" amount="5" />
      <Text name="havarti cheese" amount="2 slices" />
      <Text name="lettuce" amount="4 leaves" />
      <Text name="tomato slices" amount="3" />
      <Text name="dill relish" amount="2 tbsp" />
      <h1>{userLogin ? "Hi User!" : "Please Login"}</h1>
      {
        // Comment
      }
      <ul>{listName}</ul>
      <Hello />
    </React.Fragment>
  );
};

export default App;
