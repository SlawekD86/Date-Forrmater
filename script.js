
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

Step 21
If your switch statement is going to have multiple cases, it is best practice to include a break statement.

The break statement will tell the JavaScript interpreter to stop executing statements. Without adding a break statement at the end of each case block, the program will execute the code for all matching cases:

switch (someVariable) {
  case 'case123':
    // Write your logic here
    break; // Terminates the switch statement
}
Add a break statement to the end of your case block.

*/

dateOptionsSelectElement.addEventListener('change', () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate
                .split('-')
                .reverse()
                .join('-')
            break;
    };
});
