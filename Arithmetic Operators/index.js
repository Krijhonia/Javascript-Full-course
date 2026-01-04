// Arithmetic Operators = operands (values ,variables, etc.)
//                        operators(+ - * /)
//                        ex. 111 = x + 5

let students = 30;

students = students + 1; // addition
students = students - 1; 
students = students * 2;
students = students / 2;
students = students ** 2;

console.log(students);

/*
Operator precendence
1. parenthesis
2. exponents
3. multiplication & division & modulo
4 addition & subtraction
 */

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

let result2 = 12 % 5 + 8 / 2;
console.log(result2);