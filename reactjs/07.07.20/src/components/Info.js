import React, { Fragment, useContext } from "react";
import { DataContext } from "../context/DataContext.js";

const Info = () => {
  const [data, setData] = useContext(DataContext);
  return (
    <Fragment>
      <h2>Info</h2>
    </Fragment>
  );
};

export default Info;
