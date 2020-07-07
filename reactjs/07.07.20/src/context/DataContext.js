import React, { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = () => {
  const [data, setData] = useState([
    { name: "Ali", age: 35 },
    { name: "Ben", age: 29 },
    { name: "Orland", age: 40 },
  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
