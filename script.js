
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

/* 

Step 16
When a user makes a selection from the dropdown menu, the function should get the user's value and display the date in their chosen date format. To do this, you can use the switch statement.

A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.

For example, here's how to compare the expression dayOfWeek against possible values:

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  // ...cases for other workdays
  default:
    console.log("It's the weekend!");
}
Create a switch statement and use dateOptionsSelectElement.value as the expression.

*/

dateOptionsSelectElement.addEventListener('change', () => {
    switch (dateOptionsSelectElement.value) {
    };
});
