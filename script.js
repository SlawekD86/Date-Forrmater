
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();

/* 

Step 5
The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.

Using const, create a variable named month and assign it the month from date with the .getMonth() method.

Remember to add 1 to the number returned by .getMonth().

*/

const month = date.getMonth() + 1;