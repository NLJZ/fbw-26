const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

const login = () => {
  return {
    type: "LOGIN",
  };
};

export { increment, decrement, login };
