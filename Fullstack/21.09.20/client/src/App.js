import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users")
      .then((result) => result.json)
      .then((data) => setUsers(data));
  });
  const usersArray = users.map((user) => (
    <h4 id={user._id}>{user.userName}</h4>
  ));
  return <div className="App">{usersArray}</div>;
}

export default App;
