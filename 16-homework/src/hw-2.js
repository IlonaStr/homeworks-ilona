
let initialNumber = null;
let finalNumber = null;

do {
    initialNumber = +prompt('Enter please the initial number');
    
    if(!Number.isInteger(initialNumber)) {
        alert('Please insert only an integer number');
    } else if (initialNumber >= finalNumber) {
        alert(`The final number should be bigger, than initial`);
        continue;
    }
} while (!Number.isInteger(initialNumber));

do {
    finalNumber = +prompt('Enter please the final number');

    if(!Number.isInteger(finalNumber)) {
        alert('Please insert only an integer number');
    } else if (initialNumber >= finalNumber) {
        alert(`The final number should be bigger, than initial`);
        continue;
    }
} while (!Number.isInteger(finalNumber));


let numbersSum = 0;
const skipEvenNumbers = confirm('Would you like to skip even numbers?');

for(let i = initialNumber; i <= finalNumber; i++) {
 if(skipEvenNumbers && i % 2 === 0) {
   continue;
 }
    numbersSum += i;
}

// console.log(`The total sum is ${numbersSum}`)


export {initialNumber, finalNumber, numbersSum};