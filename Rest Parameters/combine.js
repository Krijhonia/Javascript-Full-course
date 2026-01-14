// You can use rest parameters to combine strings together
// It is opposite of spread parameters
function combineStrings(...strings){
    return strings.join(' ');
}


const fullname = combineStrings('Mr.','Spongebob','Squarepants','III');
console.log(fullname);