
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

Step 15
In JavaScript, the change event is used to detect when the value of an HTML element has changed:

element.addEventListener("change", () => {
    
});
Attach the addEventListener method to the dateOptionsSelectElement. The first argument of the event listener should be the string change and the second argument should be an empty arrow function.

*/

dateOptionsSelectElement.addEventListener('change', () => { });
