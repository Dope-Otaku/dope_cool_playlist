// forEach is a method that is used to iterate over an array and perform a function on each element of the array. It is a higher order function that takes a callback function as an argument. The callback function is called for each element of the array. The callback function takes three arguments: the current element, the index of the current element, and the array itself. The forEach method does not return anything. It simply calls the callback function for each element of the array.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(x) {
  console.log(x);
}
