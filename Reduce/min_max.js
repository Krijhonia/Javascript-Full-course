const marks = [34,65,84,94,36,83];

const maximum = marks.reduce(getMaximum);
const minimum = marks.reduce(getMinimum);
console.log(maximum);
console.log(minimum);

function getMaximum(accumalator,element){
    return Math.max(accumalator,element);
}
function getMinimum(accumalator,element){
    return Math.min(accumalator,element)
}