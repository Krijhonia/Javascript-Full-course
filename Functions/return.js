function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x /y;
}
function isEven(number){
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function isValidEmail(email){
    if(email.includes('@')){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(14));
console.log(isValidEmail('Kunal@gmail.com'))
console.log(multiply(2,3));