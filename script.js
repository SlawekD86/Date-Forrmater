
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();

/* 

Step 4
The Date object has a number of methods that allow you to get the date and time in different formats.

One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. For example:

const date = new Date();
const dayOfTheMonth = date.getDate();
console.log(dayOfTheMonth); // 20
Using const, create a variable named day and assign it the day of the month from date with the .getDate() method.

*/

const day = date.getDate();