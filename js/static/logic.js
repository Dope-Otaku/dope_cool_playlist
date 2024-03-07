//static- keyword that defines properties or mthods that refer to a class itself rather than the objects created from that class , and also it can be directly called on the class itself rather than on the instances of the class

class Product {
  static pi = 3.1423;
  static calculateArea(radius) {
    return (this.pi * radius).toFixed(2);
  }
}

// we dont need to create an instance of the class to access the static property
console.log(Product.pi);
console.log(Product.calculateArea(5));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static get getUserCount() {
    return `total numbers of users online are: ${User.userCount}`;
  }
  sayHello() {
    console.log(`hello ${this.username}`);
  }
}

const user = new User("hey");
console.log(user.username);

user.sayHello();
console.log(User.userCount);
console.log(User.getUserCount);
