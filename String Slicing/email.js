const email = 'Kunal1@gmail.com'

let userName = email.slice(0,email.indexOf('@')+1);
//The +1 will include @ in the end also if you don't use this then the output will be Kunal1

let extension = email.slice(email.indexOf('@'))

console.log(userName); //Kunal1@
console.log(extension); // @gmail.com
