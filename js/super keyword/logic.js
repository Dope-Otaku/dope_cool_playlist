//super  - it is used to call the methods and properties of parent class into child class.

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, showSpeed) {
    super(name, age);
    this.showSpeed = showSpeed;
  }
}

class Lion extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

const rabbit = new Rabbit("bunny", 1, 23);
console.log(rabbit);
