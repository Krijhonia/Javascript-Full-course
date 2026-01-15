// Callback in Javascript
// When a function is passed as an argument to a another function

// These are used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with a data base

//

hello(goodbye);

function hello(callback){
    console.log('Hello !');
    callback();
}
function goodbye(){
    console.log('Goodbye !');
}