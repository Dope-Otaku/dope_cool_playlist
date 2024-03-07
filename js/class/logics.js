//class - es6 features provides a more structured and cleaner way to work with objects compared to traditional constructor function ex. static keyword, encapsulation and inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(
      `Product name: ${this.name} and price: ${this.price.toFixed(2)}`
    );
  }
  calculateTax(salesTax) {
    return (this.price * salesTax) / 100;
  }
}
const salesTax = 0.05;
const product1 = new Product("Laptop", 1000);
const total = product1.calculateTax(salesTax);
product1.displayProduct();
console.log(total);
