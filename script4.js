// object
const App = {
  start() {
    console.log("running");
  },
  end() {
    console.log("stop");
  },
};

App.start();

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PT * 2 * this.radius;
  }
}
let circle = new Circle(10);
let totalArea = circle.getArea();
console.log(`this totalArea is ${totalArea}`);

const functionName1 = () => {
  console.log("no parameter");
};
functionName1();

const functionName2 = (argument1) => {
  console.log("argument 1" + argument1);
};
functionName2("theFirst");

const functionName3 = (argument1) => {
  console.log(argument1);
  return argument1;
};

let sentence = functionName3("i'm wanna be programmer");
console.log(`this sentence is ${sentence}`);

const functionName4 = (argument1) => `hi i'm argumen1 with value ${argument1}`;
let newSetence = functionName4("batam");
console.log(`functionName4 is ${newSetence}`);

// destructuring

const object = {
  name: "hersin",
  gender: "waria",
  live: "pedalaman hutan",
};
console.log(object);

const { name, live } = object;

console.log(name, live);

// object destructuring

const object1 = {
  name1: "Budi",
  gender: "Male",
  live: "Batam",
};

const { name1, ...newObject } = object1;
console.log(name1);
console.log(newObject);

const person3 = {
  name: "omni knight",
  class: "support",
  level: "21",
};

const person4 = {
  ...person3,
  name: "Tide hunter",
};

console.log(`personal 3 is`, person3);
console.log(`personal 4 is`, person4);
