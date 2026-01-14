// ? Introduction to arrays in JS

// Array = a variable like structure that can hold more than 1 value in it 

let fruits = ['Apple', 'Orange','Banana'];


// fruits.shift();
fruits[3] = 'Litchi';
fruits[4] = 'mango';

fruits.sort().reverse();
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
for (i = 0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}