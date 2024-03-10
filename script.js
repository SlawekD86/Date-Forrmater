
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

/* 

Step 11
After the day variable, add a dash (-) followed by another embedded expression that contains the month variable.

*/

const formattedDate = `${day} - ${month}`;