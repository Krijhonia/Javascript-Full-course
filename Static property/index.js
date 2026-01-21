class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Your username is ${this.username}`)
    }
    createId(){
        return `123`;
    }

}

const kunal = new User('Kunal')
// kunal.logMe();
console.log(kunal.createId());