// axios
axios
  .get(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//   numeral
let myNumeral = numeral(1000);
let value = myNumeral.value();
console.log(value);

let myNumeral2 = numeral("100");
let value2 = myNumeral2.value();
console.log(value2);

// moment
let time = moment().format("MMMM do YYYY, h:mm:ssa");
console.log(time);
let date = new Date();
console.log(date);
