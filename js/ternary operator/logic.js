//ternary operators are shortcut for if else loop

const price = 2000
const discount = 10

const amount = price>1000 ? (price-(price*(discount/100))) : (price)  
console.log(amount)