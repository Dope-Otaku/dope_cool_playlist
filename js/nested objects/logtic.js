//nested objects = these are objects which have a parent object under which they are created

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
  hobbies: ["reading", "writing"],
};
console.log(person.address.city); // New York
console.log(person.hobbies[0]); // reading
console.log(person.name);

//--------------------------------------------------------------------------------------------
//complex objects

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

const person1 = new Person("John", 30, "New York", "NY");
console.log(person1); // New York
console.log(person1.address); // city, state
