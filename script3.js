function myFunction4() {
  const mobil = "ferari";
  //   debugger;
  return this;
}

myFunction4();

let person = {
  firstName: "Jhon",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    // debugger;
    return this.firstName + " " + this.lastName;
  },
};
console.log(`person fullName is ${person.fullName()}`);

let person1 = {
  fullName: function () {
    debugger;
    return this.firstName + " " + this.lastName;
  },
};
var person2 = {
  firstName: "John",
  lastName: "Doe",
};

person1.fullName.bind(person2)();
person1.fullName();
