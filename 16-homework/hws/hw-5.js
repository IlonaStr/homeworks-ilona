const hw5 = () => {
    //task 1

function getRandomArray(length, min, max) {
    const randomArr = [];
    for (let i = 0; i < length; i++) {
      randomArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    return randomArr;
  }
  console.log(getRandomArray(15, 1, 100));
  
  //task 2
  
  function getModa(...array) {
    const arrayValues = {};
    const arrayNumbers = [...array];
    arrayNumbers.sort((a, b) => a - b);
  
    arrayNumbers.forEach((i) => {
      arrayValues[i] = arrayValues[i] + 1 || 1;
    }, []);
  
    let moda = [];
    let countDigits = 1;
  
    for (let num in arrayValues) {
      if (arrayValues[num] > countDigits) {
        countDigits = arrayValues[num];
        moda = num;
      } else if (arrayValues[num] === countDigits) {
        moda.push(num);
      }
    }
    return moda;
  }
  
  console.log(
    getModa(
      1.3,
      3,
      6,
      3,
      3,
      2,
      1.3,
      55,
      11,
      78,
      2,
      55,
      1.3,
      77,
      57,
      87,
      23,
      2,
      56,
      3,
      55
    )
  );
  
  //task 3
  
  function getAverage(array) {
    const count = array.filter((num) => Number.isInteger(num));
    const result = count.reduce((total, el) => total + el) / count.length;
    return result;
  }
  
  console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));
  
  //task 4
  
  function getMedian(arr) {
    const median = Math.floor(arr.length / 2);
    let numbers = arr.sort((a, b) => a - b);
  
    const sortedArr =
      arr.length % 2 !== 0
        ? numbers[median]
        : (numbers[median - 1] + numbers[median]) / 2;
  
    return sortedArr;
  }
  
  console.log(getMedian([1, 2, 3, 4]));
  
  //task 5
  
  function filterEvenNumbers(...numbers) {
    return numbers.filter((el) => el % 2);
  }
  
  console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
  
  //task 6
  
  function countPositiveNumbers(...numbers) {
    return numbers.filter((el) => el > 0).length;
  }
  
  console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
  
  //task 7
  
  function getDividedByFive(...numbers) {
    return numbers.filter((el) => el % 5 === 0);
  }
  console.log(
    getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
  );
  
}

export default hw5;