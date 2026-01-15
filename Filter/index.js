// Filter = It creates an new array by filtering out the elements

const numbers = [1,2,3,4,5,6,7];
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

function isEven(element){
    return element % 2 === 0;
}