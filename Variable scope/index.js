// Variable scope = where a variable is recognized 
//                  and accessible (local vs global)


// let x = 1;  // It is not legal is global scope
// let x = 2;


function1(); // You can declare the duplicated variable name as long 
function2(); // as they are seperated with two different functions

function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}