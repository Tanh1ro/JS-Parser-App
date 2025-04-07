// Complex JavaScript Code for AST Analysis

// Class with inheritance, generators, and decorators
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks!`;
  }
  
  *activities() {
    yield "running";
    yield "playing fetch";
    yield "sleeping";
  }
}

// Higher-order function with closures
function createCounter(initialValue = 0) {
  let count = initialValue;
  
  return {
    increment: (step = 1) => {
      count += step;
      return count;
    },
    decrement: (step = 1) => {
      count -= step;
      return count;
    },
    reset: () => {
      count = initialValue;
      return count;
    },
    getValue: () => count
  };
}

// Complex object with nested structures
const store = {
  name: "Electronics Store",
  inventory: {
    smartphones: [
      { id: 1, brand: "Apple", model: "iPhone 13", price: 999 },
      { id: 2, brand: "Samsung", model: "Galaxy S21", price: 899 }
    ],
    laptops: [
      { id: 3, brand: "Dell", model: "XPS 13", price: 1299 },
      { id: 4, brand: "Apple", model: "MacBook Pro", price: 1999 }
    ]
  },
  calculateTotal: function() {
    let total = 0;
    for (const category in this.inventory) {
      for (const item of this.inventory[category]) {
        total += item.price;
      }
    }
    return total;
  },
  getExpensiveItems: function(threshold = 1000) {
    const result = [];
    for (const category in this.inventory) {
      result.push(
        ...this.inventory[category].filter(item => item.price >= threshold)
      );
    }
    return result;
  }
};

// Complex array manipulations with higher-order functions
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processedData = data
  .filter(x => x % 2 === 0)
  .map(x => x * x)
  .reduce((acc, x, index, array) => {
    acc.sum += x;
    acc.avg = acc.sum / array.length;
    return acc;
  }, { sum: 0, avg: 0 });

// Immediately Invoked Function Expression (IIFE) with destructuring
const config = ((env) => {
  const { NODE_ENV = 'development' } = env;
  
  return {
    isDev: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    isTest: NODE_ENV === 'test',
    baseUrl: NODE_ENV === 'production' 
      ? 'https://api.example.com'
      : 'http://localhost:3000'
  };
})({ NODE_ENV: 'production' });

// Return the store's expensive items to show in the parser output
store.getExpensiveItems(); 