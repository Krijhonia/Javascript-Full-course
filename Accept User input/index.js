//How to accept the user input in js

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox


let username; //Initialization of the username
//1. This is the easy way by using window.prompt
// username = window.prompt("What's your username"); //Declaration
// console.log(username);

//2. This is the professional way by using the HTML textbox
document.getElementById('mySubmit').onclick = function (){
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`;
    console.log(username);
}