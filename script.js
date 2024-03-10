
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

/* 

Step 3
In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time:

const currentDate = new Date();
console.log(currentDate);

// Output:
// Mon Aug 23 2021 15:31:00 GMT-0400 (Eastern Daylight Time)
Create a new const variable called date and assign it a Date object with new Date().

*/

const date = new Date();