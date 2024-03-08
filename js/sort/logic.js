//sort- it is amethod used to sort the elements of an array in place, sorts elements in lexicographic order and not alphabetical order
//lexicograph order (alphabet + numbers + symbols) as strings

// Example 1
const fruits = ["banana", "apple", "orange", "mango", "kiwi", "papaya"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "kiwi", "mango", "orange", "papaya"]

// Example 2
const numbers = [4, 10, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // ascending order- why a and b are used? because sort method sorts elements as strings
console.log(numbers);

// Example 3
const profile = [
  { name: "souvik", age: 22, gpa: 3.0 },
  { name: "kabir", age: 20, gpa: 4.0 },
  { name: "kush", age: 20, gpa: 3.2 },
];

profile.sort((a, b) => a.gpa - b.gpa);
//this method is used for numbers but not for strings

//now for strings i will show you this trick
profile.sort((a, b) => a.name.localeCompare(b.name));
console.log(profile);
