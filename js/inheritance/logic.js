//inheritance - allows a new class to inherit properties and methods from an existing class (parent-> child) hwlps with the code reusability

class Animal {
  Alive = true;

  eat() {
    console.log(`${this.name} is eating!`);
  }
  sleep() {
    console.log(`${this.name} is sleeping!`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
  hop() {
    console.log(`${this.name} is jumping`);
  }
}
class Hawk extends Animal {
  name = "Hawk";
  fly() {
    console.log(`${this.name} is flying`);
  }
}
class Lion extends Animal {
  name = "Lion";
  run() {
    console.log(`${this.name} is running`);
  }
}

const rabbit = new Rabbit();
const lion = new Lion();
const hawk = new Hawk();
console.log(rabbit);
rabbit.eat();
lion.eat();

lion.run();
//and many more u thyink of one!
