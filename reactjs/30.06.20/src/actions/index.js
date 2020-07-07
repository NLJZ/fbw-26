const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    product,
  };
};

const removeOne = (product) => {
  return {
    type: "REMOVE_ONE",
    product,
  };
};

const removeAll = (product) => {
  return {
    type: "REMOVE_ALL",
    product,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export { addProduct, removeOne, removeAll, checkout };

// const increment = (num) => {
//   return {
//     type: "INCREMENT",
//     payload: num,
//   };
// };

// const decrement = (num) => {
//   return {
//     type: "DECREMENT",
//     payload: num,
//   };
// };

// const login = () => {
//   return {
//     type: "LOGIN",
//   };
// };

// export { increment, decrement, login };
