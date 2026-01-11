// String slicing = creating a substring from the portion of another string
// Syntax        = string.slice(start,end)

const fullName = 'Kunal Rijhonia';

let firstname = fullName.slice(0,5); //Slice the first 5 index (Kunal)
//Ending index is exclusive in this string slicing

let lastName = fullName.slice(6,14); //Prints (Rijhonia) Means my lastName

let firstChar = fullName.slice(0,1);// Prints only the first character which is K

let lastChar = fullName.slice(-1);//Prints the last character which is a 

let firstName = fullName.slice(0,fullName.indexOf(" "));//The ending index in this case is the " " space

let lastname = fullName.slice(fullName.indexOf(' ')+1); //Prints (Rijhonia)
console.log(firstname);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
console.log(firstName);
console.log(lastname);
