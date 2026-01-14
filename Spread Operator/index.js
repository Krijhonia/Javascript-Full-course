// Spread Operator = ... allows an iterable such as array or string to be expanded into seperated elements
//                   It unpacks the elements

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let username = "Kunal Rijhonia";
let letters = [...username].join('-');
console.log(letters);

let fruits = ['apple','orange','banana'];
let vegetables = ['carrots','celery','potatoes'];
let foods = [...fruits,...vegetables , 'eggs','milk'];

console.log(foods);

console.log(fruits);