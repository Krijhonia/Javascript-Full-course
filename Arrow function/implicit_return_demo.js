// --- Understanding "Implicit Return" ---

// 1. THE LONG WAY (Explicit Return)
// When you use curly braces {}, you MUST write 'return' if you want to send a value back.
const longWay = (a, b) => {
    // We are doing some work here...
    const result = a * b;
    return result; // We explicitly say "return this value"
};


// 2. THE SHORT WAY (Implicit Return)
// If you REMOVE the curly braces {}, JavaScript AUTOMATICALLY adds 'return' for you.
// "Implied" means: It is there, even though you don't see it.
const shortWay = (a, b) => a * b; 
// The computer reads this as: 
// const shortWay = (a, b) => { return a * b; }


// Let's prove they do the exact same thing:
console.log("Long way result:", longWay(5, 5));
console.log("Short way result:", shortWay(5, 5));


// --- COMMON MISTAKE ---
// If you use {} but forget 'return', you get 'undefined'.
const mistake = (a, b) => { a * b }; // Oops! No 'return' keyword.

console.log("Mistake result:", mistake(5, 5)); // Prints: undefined
