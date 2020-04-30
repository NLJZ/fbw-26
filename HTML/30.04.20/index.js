const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
  // alert("hi");
});
// const del = document.querySelectorAll(".delete");
// del.addEventListener("click", function () {
//   event.stopPropagation();
//   console.log("nice ");
// });

const hide = document.querySelector("#hide");
hide.addEventListener("change", function () {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

// classList.contains
