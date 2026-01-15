// For each loop = It is used to iterate over the elements of an array
// and apply a specified function on each element(callback)

// Syntax = array.forEach(callback)
//          element , index ,array are provided

numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);



function display(element){
    console.log(element);
}

function double(element,index,array){
    array[index] = element * 2
}

function triple(element,index,array){
    array[index] = element * 3;
}
function square(element,index,array){
    array[index] = Math.pow(element,2);
}
