
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

/* 

Step 14
Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable.

Also, make sure to remove your console.log(formattedDate); line.

*/

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;
