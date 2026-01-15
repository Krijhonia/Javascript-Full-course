// 1. Basic Syntax
// Traditional Function Expression
const helloRegular = function() {
    console.log("Hello (Regular)");
};

// Arrow Function
const helloArrow = () => console.log("Hello (Arrow)");

// 2. Parameters
// Single parameter doesn't need parentheses
const square = x => x * x;

// Multiple parameters
const add = (a, b) => a + b;

// 3. Implicit Return
// If the body is a single expression, 'return' and {} are implied
const multiply = (a, b) => a * b;

// 4. Lexical 'this' (Important!)
const person = {
    name: 'Alice',
    sayNameRegular: function() {
        console.log(`Regular Function: My name is ${this.name}`);
        
        // In a regular function inside setTimeout, 'this' defaults to global/window
        setTimeout(function() {
            console.log(`Regular inside Timeout: My name is ${this.name} (undefined)`);
        }, 1000);
    },
    
    sayNameArrow: function() {
        // Arrow function inherits 'this' from the 'person' scope
        setTimeout(() => {
            console.log(`Arrow inside Timeout: My name is ${this.name} (Works!)`);
        }, 1000);
    }
};

console.log("--- Basic Examples ---");
helloRegular();
helloArrow();
console.log("Square of 5:", square(5));
console.log("Add 3 + 4:", add(3, 4));

console.log("\n--- 'this' Keyword Demo ---");
person.sayNameRegular();
person.sayNameArrow();
