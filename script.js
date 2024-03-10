
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

Step 23
Inside the case for mm-dd-yyyy-h-mm, set the textContent property of currentDateParagraph to ${month}-${day}-${year} ${hours} Hours ${minutes} Minutes.

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
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hour} Hours ${minutes} Minutes`;
            break;
    };
});
