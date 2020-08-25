// let

let greeting = "say Hi";
console.log(greeting);
greeting = "say Hello instead";
console.log(greeting);

let greeting1 = "say Hi";
let times = 4;
if (times > 3) {
  let greeting = "say hello instead";
  console.log(greeting);
}
// console.log(hello);

// function
function myFunction(totalPrice, name) {
  let totalTax = totalPrice * 0.1;
  let detailTax = `name ${name}, tax: ${totalTax}`;
  return detailTax;
}
console.log(myFunction(5, "apple"));

const funct = (totalPrice, name) => {
  let totalTax = totalPrice * 0.2;
  let detailTax = `name: ${name}. tax: ${totalTax}`;

  return detailTax;
};
console.log(funct(3, "water melon"));

let names = ["Budi", "Joni", "Tono", "Jaka"];
let modifiedName = names.map((name) => {
  console.log("Mr." + name);
});

function myFunction1(totalPrice, name) {
  let totalTax = totalPrice * 0.1;

  let detailTax = `name: ${name}, tax :${name}`;
  return detailTax;
}
console.log(myFunction1(6, "nanas"));

function factorial(n, accumulator) {
  if (n === 0) {
    return accumulator;
  }
  return factorial(n - 1, n * accumulator);
}

console.log(factorial(5, 1));
