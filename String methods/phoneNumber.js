let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-",'/') //Replace all - with / sign
console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(15,'0'); // Start the number with 3 zeros
// console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15,'0'); //Ends the number with 3 zeros
console.log(phoneNumber)