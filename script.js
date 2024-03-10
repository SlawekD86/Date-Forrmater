
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;

/* 

Step 6
The .getFullYear() method returns a number which represents the year for the provided date.

Using const, create a variable named year and assign it the year from date with the .getFullYear() method.

*/

const year = date.getFullYear();