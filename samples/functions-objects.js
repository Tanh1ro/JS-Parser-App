// Functions and Objects Sample

// Function declarations
function add(a, b) {
  return a + b;
}

// Arrow functions
const multiply = (a, b) => a * b;

// Function with default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Higher-order function
function operate(a, b, operation) {
  return operation(a, b);
}

// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  profession: "Developer",
  
  // Method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Getter
  get bio() {
    return `${this.getFullName()} is a ${this.age}-year-old ${this.profession}.`;
  }
};

// Class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Method
  getArea() {
    return this.width * this.height;
  }
  
  // Static method
  static createSquare(size) {
    return new Rectangle(size, size);
  }
}

// Object destructuring
const { firstName, lastName, profession } = person;

// Array methods with functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((total, num) => total + num, 0);

// Output results
add(5, 3);                    // 8
multiply(4, 6);               // 24
greet("Alice");               // "Hello, Alice!"
greet();                      // "Hello, Guest!"
operate(10, 5, (a, b) => a - b); // 5

person.getFullName();          // "John Doe"
person.bio;                    // "John Doe is a 30-year-old Developer."

const rect = new Rectangle(5, 3);
rect.getArea();                // 15

const square = Rectangle.createSquare(4);
square.getArea();              // 16

firstName;                     // "John"
profession;                    // "Developer"

doubled;                       // [2, 4, 6, 8, 10]
sum;                           // 15 