const students = {
  ananya: 20,
  rahul: 21,
  viren: 22,
  suswik: 23,
};
// console.log(
//   setTimeout(() => {
//     console.log(students.ananya);
//   }, 3000)
// );

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  married: () => {
    return console.log(
      `${person.firstName} is eating a burger but he might die due to his age which is ${this.age}`
    );
  },
  isEmployed: function () {
    return this.age > 30 ? true : false;
  },
};

// you can console it here
// console.log(person.isEmployed());
console.log(person.married());

// we use this whyen we want to access the object properties inside the object or instantly when the object is created
//but here it is not working i don't know why
