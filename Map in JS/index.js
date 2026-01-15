// map() : map in javascript is similar to forEach in JS but it returns a new array
// it Accepts a callback and applies that function to each element of and array and returns a new array

// Note : A map doesn't change the values of the original array it just create new array by modifying the existing array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element,2);
}
function cube(element){
    return Math.pow(element,3);
}