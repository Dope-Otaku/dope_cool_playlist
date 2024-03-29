// map function -  accepts a callback and applies that function to each element of the array, an returns a new array

//method -1
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => {
  return number * 2;
});

console.log(double); // [2,4,6,8,10]

//method - 2

const students = ["ananya", "rahul", "viren", "suswik"];
const upperCase = students.map(display);

console.log(upperCase);

function display(elements, index, array) {
  return (array[index] = elements.charAt(0).toUpperCase() + elements.slice(1));
}

// date time slicing and positioning

const dates = [
  "2024.05.08",
  "2023.05.09",
  "2022.05.10",
  "2021.05.11",
  "2020.05.12",
];
const newDates = dates.map((date) => {
  const parts = date.split(".");
  return `${parts[2]} - ${parts[1]} - ${parts[0]}`;
});

console.log(newDates);

//filter functions - accepts a callback and applies that function to each element of the array, an returns a new array with the elements that return true in the callback

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = num.filter((numE) => {
  return numE % 2 === 0;
});
console.log(evenNumber);

//reduce function - accepts a callback and applies that function to each element of the array, an return a  single variable
// accumulator and current value are the two parameters of the callback function

const tips = [1, 2, 3, 4, 5];
const total = tips.reduce((acc, tip) => {
  return acc + tip;
});

console.log(`$${total.toFixed(2)}`);
