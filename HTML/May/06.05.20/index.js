const fetchTextFile = () => {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".result").innerHTML = data;
      console.log(data);
    })
    .catch((error) => console.log(error));
};

// const obj = {
//   id: 1,
//   name: "hadi",
//   age: 30,
// };

const fetchJsonFile = () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2> All Users </h2>";
      data.forEach((user) => {
        userCard += `
        <div class='card' id=${user.id}>
          <div class='avatar'> ${user.photo}</div>
          ${user.name} is <span>${user.age}</span> years old, and lives in <span>${user.city}</span>
        </div>`;
      });
      document.querySelector(".result").innerHTML = userCard;
    });
};

// https://jsonplaceholder.typicode.com/

const fetchApi = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let imgCard = "<h2>Images</h2>";
      data.forEach((photo) => {
        imgCard += `
        <div class='card' id=${photo.id}>
          <img src=${photo.thumbnailUrl} alt=${photo.title}>
          <h3>${photo.title}</h3>
          <img src=${photo.url} alt=${photo.title}>

        </div>`;
      });
      document.querySelector(".result").innerHTML = imgCard;
    });
};
