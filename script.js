
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

Step 22
Add another case with the value mm-dd-yyyy-h-mm. Inside that case, set the text content of currentDateParagraph to empty template literals.

Also, make sure to include a break statement to terminate the switch statement.

*/

dateOptionsSelectElement.addEventListener('change', () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate
                .split('-')
                .reverse()
                .join('-');
            break;
        case 'mm-dd-yyyy-h-mm':
            currentDateParagraph.textContent = ``;
            break;
    };
});
