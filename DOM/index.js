// 1. SELECTING ELEMENTS
// The DOM allows us to select HTML elements from our Javascript code.

// Select the element with class 'heading'
const heading = document.querySelector('.heading');

// Select the paragraph element
// (querySelector selects the first matching element it finds)
const paragraph = document.querySelector('p');

// Select the parent div by its class
const container = document.querySelector('.bg-black');


// 2. MODIFYING CONTENT
// We can change the text inside elements dynamically.
console.log("Original heading:", heading.textContent);

// Change the text of the heading after 2 seconds to show the change
setTimeout(() => {
    heading.textContent = "DOM Manipulation is Cool!";
    console.log("Heading updated!");
}, 2000);


// 3. MODIFYING STYLES
// We can change the CSS styles of elements directly.

// Change the text color of the paragraph
paragraph.style.color = 'blue';
paragraph.style.fontSize = '18px';


// 4. CREATING AND ADDING NEW ELEMENTS
// We can create new HTML elements and add them to the page.

// Create a new button element
const button = document.createElement('button');
button.textContent = "Click Me!";
button.style.padding = "10px 20px";
button.style.marginTop = "15px";
button.style.cursor = "pointer";

// Add the button to our container div
container.appendChild(button);


// 5. HANDLING EVENTS
// The DOM allows us to listen for user interactions like clicks.

button.addEventListener('click', () => {
    // This code runs when the button is clicked
    document.body.style.backgroundColor = '#f0f0f0';
    paragraph.textContent = "You clicked the button! The background color has changed.";
    alert("Button Clicked!");
});