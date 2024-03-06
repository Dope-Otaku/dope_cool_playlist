// map function -  accepts a callback and applies that function to each element of the array, an returns a new array

//method -1
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => {
  return number * 2;
});

console.log(double); // [2,4,6,8,10]

//method -

const students = ["ananya", "rahul", "viren", "suswik"];
const upperCase = students.map(display);

console.log(upperCase);

function display(elements, index, array) {
  return (array[index] = elements.charAt(0).toUpperCase() + elements.slice(1));
}
