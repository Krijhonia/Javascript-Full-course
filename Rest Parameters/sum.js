function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
const total1 = sum(1,2,3,4);
console.log(`Your total is $${total1}`)

function getAverage(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result /numbers.length;
}
const total = getAverage(1,2,3,4);
console.log(total);