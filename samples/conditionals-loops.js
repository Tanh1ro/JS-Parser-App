// Conditionals and Loops Sample

// Variables for testing
const temperature = 22;
const isRaining = false;
const dayOfWeek = "Monday";

// If-else statement
let weatherAdvice;
if (temperature > 25) {
  weatherAdvice = "It's hot outside!";
} else if (temperature < 10) {
  weatherAdvice = "It's cold outside!";
} else {
  weatherAdvice = "The weather is pleasant.";
}

// Ternary operator
const shouldCarryUmbrella = isRaining ? "Yes" : "No";

// Switch statement
let schedule;
switch (dayOfWeek) {
  case "Monday":
    schedule = "Work day";
    break;
  case "Saturday":
  case "Sunday":
    schedule = "Weekend";
    break;
  default:
    schedule = "Regular day";
}

// For loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}

// While loop
let countdown = 3;
let countdownMessage = "";
while (countdown > 0) {
  countdownMessage += `${countdown}... `;
  countdown--;
}
countdownMessage += "Go!";

// For...of loop with array
const fruits = ["apple", "banana", "orange"];
let fruitList = "";
for (const fruit of fruits) {
  fruitList += fruit + ", ";
}
fruitList = fruitList.slice(0, -2); // Remove trailing comma and space

// Output results
weatherAdvice;      // "The weather is pleasant."
shouldCarryUmbrella; // "No"
schedule;           // "Work day"
sum;                // 15
countdownMessage;   // "3... 2... 1... Go!"
fruitList;          // "apple, banana, orange" 