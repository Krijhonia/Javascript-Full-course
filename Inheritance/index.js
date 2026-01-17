// Inheritance in JS
class User {
    constructor(username){
        this.username = username;
    }
    logMe(){ //Metod inside a class
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher('Kunal','email@.com','123')

chai.addCourse();

const newVar = new User('Thanos');
newVar.logMe();
chai.logMe()