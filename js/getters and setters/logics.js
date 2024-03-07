//getters - it is a special property that make a property readable
//setters - it is a special property tha makes a property writeable

//helps in validating and modify a value when reading/writing a property

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; //this._width ..? bcoz it shows that it is targeting the private width
    } else {
      console.error("width should not be smaller than 0");
    }
  }
  get width() {
    return this._width; //it allows to read the vlaues from set
  }

  set length(newlength) {
    if (newlength > 0) {
      this._length = newlength; //this._length ..? bcoz it shows that it is targeting the private width
    } else {
      console.error("length should not be smaller than 0");
    }
  }
  get length() {
    return this._length; //it allows to read the vlaues from set
  }
  get area() {
    return this._length * this._width;
  }
}

const rectangle = new Rectangle(8, 12);
console.log(rectangle.width);
console.log(rectangle.length);
console.log(rectangle.area);
