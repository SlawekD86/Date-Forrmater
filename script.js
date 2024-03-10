
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

Step 20
Finally, you need to create a string with the reversed array elements separated by dash (-) character.

Use the .join() method to join the reversed array elements into a string and use a "-" for the separator.

*/

dateOptionsSelectElement.addEventListener('change', () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-')
    };
});
