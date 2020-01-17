let thing = "";
for (let i = 1; i <= 4; i++) {
  thing += "T";
  console.log(thing);
}

for (let i = 4; i > 0; i--) {
  let atStuff = "@@@@";
  let atFinal = atStuff.slice(0, i);
  console.log(atFinal);
}
