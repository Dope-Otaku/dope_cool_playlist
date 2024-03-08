//destructuring - it extracts values from arrays and objects and assign them into a variables in a convenient way!
//[]- to perform array destructuring , and {} - to perform object destructuring

//ex -1 | swap the values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

//ex-2 | swap two elements in an array
const colors = ["red", "black", "blue", "green"];
console.log("before");
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

[colors[0], colors[1]] = [colors[2], colors[3]]; //assigned 2 to 0 and 3 to 1
console.log("after");
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

//ex-3 | assign array elements to variables

const foods = ["burger", "cocacola", "rice", "daal"];

const [firstFood, secondFood, thirdFood, ...extraFood] = foods;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(extraFood);

//ex-4 | extract values from objects

const person1 = {
  firstName: "souvik",
  lastName: "Halder",
  age: 30,
  job: "employed",
};

const person2 = {
  firstName: "sourabh",
  lastName: "Halder",
  age: 20,
};

const { firstName, lastName, age, job = "Unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//ex-5 | destructure in function parameters
function displayDesc({ firstName, lastName, age, job = "unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}
// displayDesc(person1);
displayDesc(person2);
