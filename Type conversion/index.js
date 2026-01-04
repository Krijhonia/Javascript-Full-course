//Type conversion = change the data type of a value to another
//                  (strings, numbers, booleans)

// let age = window.prompt('How old are u?');
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

//Explaining type conversion with a pizza example
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);  // NaN 'number'
console.log(y, typeof y);  // pizza string
console.log(z, typeof z);  // true 'boolean'
