import React, { Fragment, useState } from "react";

const BookInfo = ({ info }) => {
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  );
};

const AddBookForm = ({ addNewBook }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      addNewBook(userInput);
    }
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value.trim())}
        value={userInput}
      />
    </form>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState([
    { title: "javascript" },
    { title: "react" },
    { title: "redux" },
  ]);
  const addNewBook = (userText) => {
    const newArr = [...books, { title: userText }];
    setBooks(newArr);
  };
  return (
    <Fragment>
      <h1>Hey, I am React Hooks</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {books.map((book, i) => (
        <BookInfo key={i} info={book} />
      ))}
      <AddBookForm addNewBook={addNewBook} />
    </Fragment>
  );
};

export default App;
