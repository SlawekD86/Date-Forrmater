
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();

/* 

Step 8
The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.

Create a const variable named minutes and assign it the minutes from date with the .getMinutes() method.

*/

const minutes = date.getMinutes();