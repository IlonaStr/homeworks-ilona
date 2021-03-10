//task 1

function getRandomArray(length, min, max) {
    const randomArr = [];
     for(let i = 0; i < length; i++) {
        randomArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
     }

    return randomArr;
}
console.log(getRandomArray(15, 1, 100));

//task 2

function getModa(array) {
    let frequentNumber = {};
    let maxFrequent = 0;
    let mode = [].filter((num) => num % 1 === 0);

    for(let i in array) {
        frequentNumber[array[i]] = (frequentNumber[array[i]] || 0) + 1;

        if(frequentNumber[array[i]] > maxFrequent) {
            maxFrequent = frequentNumber[array[i]];
            mode = array[i];
        }
    }

    return mode;
}
console.log(getModa([1.3, 3, 6, 3, 3, 2, 1.3, 55, 11, 78, 2, 55, 1.3, 77, 57, 87, 23, 2, 56, 3, 55]));

//task 3

function getAverage(array) {
    let total = 0;
    let count = array.length;

    for(let i in array) {

        if(Number.isInteger(+i)) {
            total += array[i];
        }
    }

    return total / count;
}

console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]))

//task 4

function getMedian(arr) {
    let sortedArr = 0;
    const median = Math.floor(arr.length / 2);
    let numbers = [...arr].sort((a, b) => a - b);

        sortedArr = arr.length % 2 !== 0 ? numbers[median] : (numbers[median - 1] + numbers[median]) / 2;
    
    return sortedArr;
}

console.log(getMedian([1, 2, 3, 4]))

//task 5

function filterEvenNumbers(...numbers) {
    return numbers.filter(el => el % 2 === 1);
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

//task 6

function countPositiveNumbers(...numbers) {
    return numbers.filter(el => el > 0).length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//task 7

function getDividedByFive(...numbers) {
    return numbers.filter(el => el % 5 === 0);
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));