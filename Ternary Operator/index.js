// Ternary Operator = a shortcut to if and else statements in js
//                    helps to assign a variable based on a condition
//   Syntax        =  condition ? codeIfTrue : codeIfFalse;

let age = Number(window.prompt('Enter Your age '));

let message = age >= 18 ? 'You are an adult' : 'You are a minor';

console.log(message);