// While loops = It repeats some code while some condition is true
//It is used when the number of repeating of the code we don't know in advance 
// Else if you know you can use the for loop

let username = "";
while(username === "" || username === null)
{
    username = window.prompt('Enter your username');
}
console.log(`Hello ${username}`);