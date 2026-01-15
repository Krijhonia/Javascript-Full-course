// .reduce() = It reduces the elements of an array to a single value

const prices = [3243,2243,24,32,34];

const total = prices.reduce(totalPrize);

console.log(`Your total is : $${total.toFixed(2)}`);

function totalPrize(accumalator,element){
    // Accumalator is the previous element
    // And element is the next element in this function
    return accumalator + element;
}