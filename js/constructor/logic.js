// constructor: specill method for defniing the properties and methods of objects

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = () => console.log(`You are driving  ${this.model} `);
}

const car1 = new Car("Eon", "Hyundai", 2015, "Red");
console.log(
  `The car is ${car1.color} in color and it is made by ${car1.make} in the year ${car1.year} and the model is ${car1.model}`
);
car1.drive();

const car2 = new Car("i20", "Hyundai", 2017, "Blue");
console.log(
  `The car is ${car2.color} in color and it is made by ${car2.make} in the year ${car2.year} and the model is ${car2.model}`
);
car2.drive();
