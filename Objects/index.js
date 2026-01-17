// Helper function to display output in the HTML page (for better visualization)
function displayLog(label, data) {
    const outputDiv = document.getElementById('output');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    
    // Convert object to string if necessary for display
    let displayData = data;
    if (typeof data === 'object') {
        displayData = JSON.stringify(data, null, 2);
    }
    
    entry.innerHTML = `<span class="log-label">${label}:</span> ${displayData}`;
    outputDiv.appendChild(entry);
    console.log(label, data); // Also log to browser console
}

/* 
    =========================================
    JAVASCRIPT OBJECTS - EXPLAINED
    =========================================
    Objects are variables that can contain many values.
    They are containers for named values called properties and methods.
*/

// 1. CREATING AN OBJECT (Object Literal)
// --------------------------------------
// An object is defined with curly braces {}.
// It holds key-value pairs.
const car = {
    brand: "Tesla",        // Property (key: value)
    model: "Model 3",      // Property
    year: 2024,            // Property
    color: "Red",          // Property
    isElectric: true,      // Boolean Property
    features: ["Autopilot", "Touchscreen", "Ludicrous Mode"], // Array as property

    // 2. OBJECT METHODS
    // -----------------
    // Methods are functions stored as object properties.
    // 'this' refers to the owner of the function (the car object itself).
    start: function() {
        return `The ${this.brand} ${this.model} is starting silently...`;
    },

    getDescription: function() {
        return `This is a ${this.year} ${this.color} ${this.brand} ${this.model}.`;
    }
};

displayLog("Full Car Object", car);


// 3. ACCESSING PROPERTIES
// -----------------------
// There are two ways to access object properties:

// Method A: Dot Notation (objectName.propertyName)
// Most common and cleaner.
const carBrand = car.brand; 
displayLog("Dot Notation (car.brand)", carBrand);

// Method B: Bracket Notation (objectName["propertyName"])
// Useful when key is dynamic or has spaces.
const carModel = car["model"];
displayLog("Bracket Notation (car['model'])", carModel);


// 4. MODIFYING OBJECTS
// --------------------
// You can change values or add new properties.
car.color = "Midnight Silver"; // Update value
car.autopilotVersion = "FSD v12"; // Add new property

displayLog("Updated Car Color", car.color);
displayLog("New Property Added", car.autopilotVersion);


// 5. EXECUTING METHODS
// --------------------
// We call methods like regular functions just attached to the object.
const startMessage = car.start();
displayLog("Method Call (car.start())", startMessage);

const description = car.getDescription();
displayLog("Method Call (car.getDescription())", description);


/* 
    SUMMARY:
    - Objects group related data and functionality.
    - Keys are variable names (strings), Values can be anything.
    - Methods are actions the object can perform. 
    - 'this' is used inside methods to access the object's own properties.
*/
