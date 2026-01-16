// --- Advanced Arrow Function Examples ---

// 1. Arrow Functions with Array Methods
const numbers = [1, 2, 3, 4, 5];

// Traditional mapping
const doubledRegular = numbers.map(function(n) {
    return n * 2;
});

// Arrow function mapping (One-liner)
const doubledArrow = numbers.map(n => n * 2);

console.log("Doubled (Arrow):", doubledArrow);


// Filtering with Arrow Functions
// Keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// Reducing with Arrow Functions
// Sum of all numbers
const sum = numbers.reduce((total, current) => total + current, 0);
console.log("Sum:", sum);


// 2. Implicitly Returning Objects
// To return an object implicitly, wrap it in parentheses ()
// Incorrect: const makePerson = (name, age) => { name: name, age: age }; // JS treats {} as block
// Correct:
const createPerson = (name, age) => ({ name, age });

console.log("Person Object:", createPerson("Bob", 30));


// 3. Arrow Functions and 'arguments' object
// Arrow functions do NOT have their own 'arguments' object
const regularArgs = function() {
    console.log("Regular arguments:", arguments);
};
regularArgs(1, 2, 3);

const arrowArgs = (...args) => {
    // console.log(arguments); // This would throw a ReferenceError in strict mode or node
    console.log("Arrow rest params:", args);
};
arrowArgs(10, 20, 30);


// 4. Object Methods & 'this' Pitfall
const user = {
    name: "Charlie",
    score: 0,
    // Arrow function captures 'this' from surrounding scope (global/module), NOT the object!
    // Often NOT what you want for object methods.
    brokenIncreaseScore: () => {
        // 'this' is undefined or global here, not 'user'
        console.log("Broken method this:", this); 
    },
    // Regular function works as expected for methods
    workingIncreaseScore: function() {
        this.score++;
        console.log(`Score is now: ${this.score}`);
    }
};

console.log("\n--- Object Method Pitfall ---");
user.brokenIncreaseScore();
user.workingIncreaseScore();
