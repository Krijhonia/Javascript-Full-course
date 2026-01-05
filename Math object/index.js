// Math → built-in JavaScript object for mathematical operations

let x = 3.7;
let y = 2;
let n1 = -10;
let n2 = 25;

/* =======================
   📌 CONSTANTS
======================= */

// Value of PI (π)
console.log(Math.PI);

// Euler's number
console.log(Math.E);

/* =======================
   📌 ROUNDING METHODS
======================= */

// Rounds to nearest integer
console.log(Math.round(x));   // 4

// Always rounds DOWN
console.log(Math.floor(x));   // 3

// Always rounds UP
console.log(Math.ceil(x));    // 4

// Removes decimal part (no rounding)
console.log(Math.trunc(x));   // 3

/* =======================
   📌 POWER & ROOT
======================= */

// Power → xʸ
console.log(Math.pow(x, y));  // 3.7²

// Square root
console.log(Math.sqrt(n2));   // 5

// Cube root
console.log(Math.cbrt(27));   // 3

/* =======================
   📌 ABSOLUTE & SIGN
======================= */

// Absolute value (removes sign)
console.log(Math.abs(n1));    // 10

// Returns sign of number
// -1 for negative, 0 for zero, 1 for positive
console.log(Math.sign(n1));

/* =======================
   📌 MIN & MAX
======================= */

// Returns smallest value
console.log(Math.min(10, 5, 20, 1));

// Returns largest value
console.log(Math.max(10, 5, 20, 1));

/* =======================
   📌 LOGARITHMIC
======================= */

// Natural logarithm (base e)
console.log(Math.log(10));

// Log base 10
console.log(Math.log10(100)); // 2

// Log base 2
console.log(Math.log2(8));    // 3

/* =======================
   📌 TRIGONOMETRY
   (Angles are in RADIANS)
======================= */

// Sine
console.log(Math.sin(Math.PI / 2)); // 1

// Cosine
console.log(Math.cos(0));           // 1

// Tangent
console.log(Math.tan(0));           // 0

// Converts degrees → radians
console.log(Math.PI * 180 / 180);

// Converts radians → degrees
console.log(180 / Math.PI);

/* =======================
   📌 RANDOM NUMBERS
======================= */

// Random number between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

/* =======================
   📌 SPECIAL VALUES
======================= */

// Infinity
console.log(Infinity);

// Not a Number
console.log(NaN);
