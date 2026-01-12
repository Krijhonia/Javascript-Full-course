let loggedIn = false;
let userName;
let password;

while(!loggedIn){
    userName = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(userName === 'myUsername' && password === 'myPassword'){
        loggedIn = true;
        console.log('You are logged IN');
    }
    else{
        console.log('Invalid Credentials! Try again after sometime');
    }
}