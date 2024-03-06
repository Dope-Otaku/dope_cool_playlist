//ternary operators are shortcut for if else loop

const price = 2000; //this is a price and can be changed
const discount = 10; // this is a discount and can be changed

const amount = price > 1000 ? price - price * (discount / 100) : price; //if price is greater than 1000 then discount will be applied else not
console.log(amount);
