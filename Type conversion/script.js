/*************************************************
 * JAVASCRIPT TYPE CONVERSION – ALL IN ONE FILE
 * Practical + Project-Used Examples
 *************************************************/

// 1️⃣ STRING ➜ NUMBER (Form / API input)
let priceFromInput = "499";
let quantityFromInput = "3";

// Explicit conversion (BEST PRACTICE)
let price = Number(priceFromInput);
let quantity = parseInt(quantityFromInput);

let totalAmount = price * quantity;

console.log("Total Amount:", totalAmount); // 1497


// 2️⃣ NUMBER ➜ STRING (Displaying in UI)
let orderId = 12345;

// Convert number to string for display or storage
let orderIdText = orderId.toString();

console.log("Order ID:", orderIdText);
console.log("Type:", typeof orderIdText);


// 3️⃣ BOOLEAN CONVERSION (Authentication / Conditions)
let apiLoginStatus = "true";

// Convert string to boolean safely
let isLoggedIn = (apiLoginStatus === "true");

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}


// 4️⃣ IMPLICIT CONVERSION (WHY TO AVOID)
let a = "10";
let b = 2;

console.log(a + b); // "102" ❌ string concatenation
console.log(a - b); // 8   ✅ number conversion

// Always prefer explicit conversion
console.log(Number(a) + b); // 12 ✅


// 5️⃣ FORM INPUT EXAMPLE (Real Project Use Case)
let inputAge = "21"; // always string from HTML input

let age = Number(inputAge);

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}


// 6️⃣ NUMBER VALIDATION (IMPORTANT)
let userInput = "123abc";

let convertedValue = Number(userInput);

if (isNaN(convertedValue)) {
  console.log("Invalid number input");
} else {
  console.log("Valid number:", convertedValue);
}


// 7️⃣ OBJECT ➜ STRING (LocalStorage / API)
let user = {
  name: "Kunal",
  role: "Developer",
  loggedIn: true
};

// Convert object to string
let userString = JSON.stringify(user);

console.log("User String:", userString);


// 8️⃣ STRING ➜ OBJECT (Reading from Storage / API)
let userObject = JSON.parse(userString);

console.log("User Name:", userObject.name);


// 9️⃣ BOOLEAN CHECK USING TYPE CONVERSION
let cartItems = 0;

// Boolean conversion to check empty cart
if (Boolean(cartItems)) {
  console.log("Cart has items");
} else {
  console.log("Cart is empty");
}


/*************************************************
 * BEST PRACTICES SUMMARY:
 * - Always use explicit conversion
 * - Convert form and API data immediately
 * - Avoid relying on implicit coercion
 *************************************************/
