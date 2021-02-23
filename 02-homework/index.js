let initialNumber;
let finalNumber;

do {
    initialNumber = +prompt('Enter please the initial number');
    finalNumber = +prompt('Enter please the final number');

    if(!Number.isInteger(initialNumber) || !Number.isInteger(finalNumber)) {
        alert('Please insert only an integer number');
    } else if (initialNumber >= finalNumber) {
        alert(`The final number should be bigger, than initial`)
    }
} while (!Number.isInteger(initialNumber) || !Number.isInteger(finalNumber));


let numbersSum = 0;
let skipEvenNumbers = confirm('Would you like to skip even numbers?');

    for(let i = initialNumber; i <= finalNumber; i++) {
      if(skipEvenNumbers === true) {
        if(i % 2 !== 0) {
            numbersSum += i;
        } 
        } else {
        numbersSum += i;
    }
}
console.log(`The total sum is ${numbersSum}`)