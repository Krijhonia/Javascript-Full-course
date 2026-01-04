//const = a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("What's the radius of the circle");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log(circumference)