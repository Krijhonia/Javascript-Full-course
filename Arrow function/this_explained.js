// --- Lexical 'this' Explained ---

// CONCEPT:
// In Regular Functions: 'this' allows changes based on WHO calls the function.
// In Arrow Functions: 'this' is fixed (lexical). It blindly uses the 'this' 
// from the code surrounding it. It does NOT care who calls it.

const user = {
    name: "Alice",
    skills: ["Coding", "Design"],

    // SCENARIO 1: The Problem with Regular Functions
    showSkillsRegular: function() {
        console.log("1. Inside regular method, 'this' is:", this.name); // Works: "Alice"

        // We want to loop through skills and say "Alice knows [skill]"
        this.skills.forEach(function(skill) {
            // PROBLEM: Inside this inner regular function, a NEW 'this' is created!
            // It forgets about 'user' object and 'this' becomes undefined (or global window).
            console.log(`Regular Loop: ${this.name} knows ${skill}`); // Output: "undefined knows Coding"
        });
    },

    // SCENARIO 2: The Solution with Arrow Functions
    showSkillsArrow: function() {
        console.log("2. Inside setup method, 'this' is:", this.name); // Works: "Alice"

        // SOLUTION: Arrow function does NOT create a new 'this'.
        // It looks up and sees it is inside 'showSkillsArrow', where 'this' is 'user'.
        this.skills.forEach((skill) => {
            console.log(`Arrow Loop:   ${this.name} knows ${skill}`); // Works: "Alice knows Coding"
        });
    }
};

console.log("--- RUNNING REGULAR FUNCTION (Will Fail) ---");
// This will print "undefined" for the name inside the loop
try { user.showSkillsRegular(); } catch (e) { console.log(e.message); }

console.log("\n--- RUNNING ARROW FUNCTION (Will Work) ---");
user.showSkillsArrow();


// --- SUMMARY: WHEN TO USE WHICH? ---

// 1. USE ARROW FUNCTIONS:
//    When generally writing small functions, or using callbacks (map, filter, setTimeout)
//    where you want to access main object variables.

// 2. USE REGULAR FUNCTIONS:
//    When defining top-level methods in an object, or when you specifically want
//    'this' to be dynamic (like in some event handlers).
