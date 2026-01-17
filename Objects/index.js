/* 
   JAVASCRIPT OBJECTS - BASIC TUTORIAL
   ===================================
   An Object is just a collection of related values.
   Think of it like a real-life object (e.g., a Person, a Car, a Phone) 
   that has properties (features) and methods (actions).
*/

// 1. CREATING AN OBJECT
// We use curly braces { } to create an object.
const person = {
    // --- DATA TYPES INSIDE AN OBJECT ---
    
    // String: Text data
    firstName: "John",
    lastName: "Doe",

    // Number: Integer or float
    age: 25,

    // Boolean: True or False
    isStudent: true,

    // Array: A list of items
    skills: ["HTML", "CSS", "JavaScript"],

    // Nested Object: An object inside another object
    address: {
        city: "New York",
        zipCode: 10001
    },

    // --- METHODS (Functions inside an object) ---
    
    // Method 1: A function to introduce the person
    introduce: function() {
        // 'this' refers to 'person' (the current object)
        console.log("Hi, I am " + this.firstName + " " + this.lastName);
    },

    // Method 2: A function using the array inside the object
    countSkills: function() {
        return this.skills.length;
    }
};


// 2. USE CASES (How to use the object)
console.log("--- Object Basics Output ---");

// Case A: Accessing Properties (Dot Notation)
// Most common way to get value
console.log("First Name:", person.firstName);
console.log("Age:", person.age);

// Case B: Accessing Arrays inside Objects
console.log("First Skill:", person.skills[0]);

// Case C: Accessing Nested Objects
console.log("City:", person.address.city);

// Case D: Using Methods
// Calling the function stored inside the object
person.introduce(); 

let totalSkills = person.countSkills();
console.log("Total Skills:", totalSkills);
