
    //task 1

const getMaxDigit = function (number) {
    let maxDigit = 0;
    const numberIntoString = String(number);
  
    for (let i = 0; i < numberIntoString.length; i++) {
      if (maxDigit < numberIntoString[i]) {
        maxDigit = numberIntoString[i];
      }
    }
  
    return maxDigit;
  };
  // console.log(`${getMaxDigit(5497)}`);
  
  //task 3
  
  const nameChange = function (name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  };
  
  // console.log(`${nameChange("draKe")}`);
  
  //task 4
  
  const salaryMinusTax = (salary, tax) => salary - (salary * tax) / 100;
  
  // console.log(`${salaryMinusTax(1000, 18 + 1.5)}`);
  
  //task 5
  
  const getRandomNumber = function (initialNumber, finalNumber) {
    return (
      Math.ceil(
        Math.random() * (Math.floor(finalNumber) - Math.ceil(initialNumber))
      ) + initialNumber
    );
  };
  
  // console.log(`${getRandomNumber(1, 10)}`);
  
  //task 6
  
  const countLetter = function (letter, word) {
    let count = null;
  
    const wordToLower = word.toLowerCase(word);
  
    for (let i = 0; i < wordToLower.length; i++) {
      if (wordToLower[i] === letter) {
        count++;
      }
    }
  
    return count;
  };
  
  // console.log(`${countLetter("a", "Abraham")}`);
  
  //task 10
  
  const isPalindrome = function (palindrome) {
    let wordIsPalindrome = true;
  
    for (let i = 0, j = palindrome.length - 1; i < palindrome.length; i++, j--) {
      if (palindrome[i] !== palindrome[j]) wordIsPalindrome = false;
      break;
    }
  
    return wordIsPalindrome;
  };
  
  // console.log(`${isPalindrome("ufotofu")}`);
  // console.log(`${isPalindrome("great")}`);
  


export {getMaxDigit, nameChange, salaryMinusTax, getRandomNumber, countLetter, isPalindrome};