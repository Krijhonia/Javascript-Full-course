// --- Practice Questions: Arrow Functions ---

// QUESTION 1: Convert this regular function to an Arrow Function
function greet(name) {
    return "Hello, " + name + "!";
}
// TODO: Write your answer below
// const greetArrow = ...
// console.log(greetArrow("World"));


// QUESTION 2: Simplify this arrow function to a one-liner (implicit return)
const isPositive = (number) => {
    return number > 0;
};
// TODO: Write your answer below
// const isPositiveSimple = ...
// console.log("Is 10 positive?", isPositiveSimple(10));


// QUESTION 3: Use an arrow function inside .find() to get the first number greater than 10
const nums = [5, 8, 12, 3, 15];
// TODO: Write your answer below
// const found = nums.find(...) 
// console.log("First number > 10:", found);


// QUESTION 4: Fix the 'this' context issue.
// The code below fails because the regular function inside setTimeout loses 'this'.
// Rewrite the callback inside setTimeout as an arrow function to fix it.
const timer = {
    seconds: 0,
    start() {
        // Change this function to an arrow function:
        setTimeout(function() { 
            this.seconds++;
            console.log("Timer tick:", this.seconds);
        }, 1000);
    }
};

// timer.start(); // Uncomment this line to test (it might crash or print NaN currently)

console.log("Open this file and solve the TODOs!");
