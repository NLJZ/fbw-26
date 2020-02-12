// Deconstructing objects as function parameters

function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(22, { name: "Ali" });
const userData = {
  firstName: "Nathan",
  lastName: "Johnson",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};
userData.fullName;
userData.firstName = "Ali";
userData.lastName = "Zzz";
// getter

// setter
userData.fullName;
