// forEach is a method that is used to iterate over an array and perform a function on each element of the array. It is a higher order function that takes a callback function as an argument. The callback function is called for each element of the array. The callback function takes three arguments: the current element, the index of the current element, and the array itself. The forEach method does not return anything. It simply calls the callback function for each element of the array.(element, index, array)

let numbers = ["apple", "orange", "cherry"];

numbers.forEach(dis);
numbers.forEach(display);

function display(x) {
  console.log(x);
}
function double(element, index, array) {
  array[index] = element;
}

//now only decapitalizze first letter of the fruits name and then run the code

function dis(element, index, array) {
  array[index] =
    element.charAt(0).toLowerCase() + element.slice(1).toUpperCase();
}

//doubt: why does it prints only the value of double function and not the value of display function?
//ans: because the forEach method does not return anything. It simply calls the callback function for each element of the array. So, it will call the double function for each element of the array and not the display function.

//doubt: but we are calling both display and double function using forEach method?
//ans:
