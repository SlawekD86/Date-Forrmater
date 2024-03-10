
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

/* 

Step 13
To see the results of the formattedDate variable, add a console.log() statement and pass in the formattedDate variable as an argument.

Open up the console and you should see the date printed out.

*/

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
