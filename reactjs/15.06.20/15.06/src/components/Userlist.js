import React from "react";

const UserList = (props) => {
  const toDos = props.list.map((item, i) => (
    <li key={i}>
      {item}{" "}
      <span
        onClick={() => {
          props.del(item);
        }}
      >
        delete
      </span>
    </li>
  ));
  return <ul>{toDos}</ul>;
};

export default UserList;
