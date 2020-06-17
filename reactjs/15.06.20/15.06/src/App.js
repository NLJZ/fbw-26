import React from "react";
import List from "./components/List";
import Data from "./data.json";
const fileData = Data.map((obj) => {
  const { id, name, address } = obj;
  return (
    <h4 key={id}>
      Hi I am {name}, and I live in {address}
    </h4>
  );
});

const headerStyle = {
  backgroundColor: "black",
  color: "red",
};

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={headerStyle}>Hi I am React</h1>
        {fileData}
        <List />
      </React.Fragment>
    );
  }
}
