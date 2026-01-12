//In do while loop the statement is printed  first then it checks the condition
// It always run the code even if the entered condition is false


let username;
//using do while loop you dont have to declare the username as an empty string


do
{
    username = window.prompt('Enter your username');
}while(username === "" || username === null)
console.log(`Hello ${username}`);