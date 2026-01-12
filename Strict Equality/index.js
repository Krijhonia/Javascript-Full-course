// Strict Equality Operator in JS

// =  Assignment Operator
// == Equality Operator (Compares if the values are equal)
// === Strict Equality Operator (Checks if the value & data type both are equal)
// !=  Inequality Operator  // It returns value only if the given condition is false
// !== Strict Inequality Operator // It returns the value only if the value and data type both does not match

const PI = 3.14;


// == Only compares the value not the data type
if(PI == "3.14"){
    console.log('That is PI'); // That is PI
}
else{
    console.log('That is not PI');
}