/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hw-1.js":
/*!*********************!*\
  !*** ./src/hw-1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"discount\": () => (/* binding */ discount),\n/* harmony export */   \"clientsDiscount\": () => (/* binding */ clientsDiscount),\n/* harmony export */   \"costWithDiscount\": () => (/* binding */ costWithDiscount)\n/* harmony export */ });\n\r\nconst phonePrice = 15.678;\r\nconst tabletPrice = 123.965;\r\nconst headphonesPrice = 90.2345;\r\n\r\n\r\nconst maxPrice = Math.max(phonePrice, tabletPrice, headphonesPrice);\r\nconst minPrice = Math.min(phonePrice, tabletPrice, headphonesPrice);\r\n// console.log(`Maximum: `, maxPrice);\r\n// console.log(`Minimum: `, minPrice);\r\n\r\n\r\nconst allProductsPrice = phonePrice + tabletPrice + headphonesPrice;\r\n// console.log(`Total of products: `, allProductsPrice);\r\n\r\n\r\nconst phoneEven = Math.floor(phonePrice);\r\nconst tabletEven = Math.floor(tabletPrice);\r\nconst headphonesEven = Math.floor(headphonesPrice);\r\nconst prodTtlEven = phoneEven + tabletEven + headphonesEven;\r\n// console.log(`Total of even prices: `, prodTtlEven);\r\n\r\n\r\nconst roundedTtl = Math.ceil(prodTtlEven / 100) * 100;\r\n// console.log(`Total rounded to hundreds: `, roundedTtl);\r\n\r\n\r\nconst pairedNumber = prodTtlEven % 2 === 0;\r\n// console.log(pairedNumber);\r\n\r\n\r\nconst clientPays = 500;\r\nconst totalRest = clientPays - allProductsPrice;\r\n// console.log(`Rest after client pays 500 UAH: `, totalRest);\r\n\r\n\r\nconst avrTtl = allProductsPrice / 3;\r\nconst avrEvened = Math.round(avrTtl * 100) / 100;\r\n// console.log(`Average total: `, avrEvened);\r\n\r\n\r\nconst discount = Math.random().toFixed(2) * 100;\r\n// console.log(`Amount of discount: `, discount, `%`);\r\nconst clientsDiscount = + (allProductsPrice - discount).toFixed(2);\r\n// console.log(`Price with discount: `, clientsDiscount);\r\nconst costWithDiscount = + (allProductsPrice / 2 - discount).toFixed(2);\r\n// console.log(`Final cost with discount: `, costWithDiscount);\r\n\r\n//Advanced\r\n// console.log (`\r\n//     Maximum price: ${maxPrice};\r\n//     Minimum price: ${minPrice};\r\n//     Price of all products: ${allProductsPrice};\r\n//     Price of all products evened to a less: ${prodTtlEven};\r\n//     Price of all products evened to hundreds: ${roundedTtl};\r\n//     Boolean value: ${pairedNumber};\r\n//     Rest after client pays 500UAH: ${totalRest};\r\n//     Rest evened after client paid 500UAH: ${avrEvened};\r\n//     Random discount: ${discount}%;\r\n//     A discount the client gets: ${clientsDiscount};\r\n//     Final cost with discount: ${costWithDiscount};\r\n// `)\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-1.js?");

/***/ }),

/***/ "./src/hw-2.js":
/*!*********************!*\
  !*** ./src/hw-2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialNumber\": () => (/* binding */ initialNumber),\n/* harmony export */   \"finalNumber\": () => (/* binding */ finalNumber),\n/* harmony export */   \"numbersSum\": () => (/* binding */ numbersSum)\n/* harmony export */ });\n\r\nlet initialNumber = null;\r\nlet finalNumber = null;\r\n\r\ndo {\r\n    initialNumber = +prompt('Enter please the initial number');\r\n    \r\n    if(!Number.isInteger(initialNumber)) {\r\n        alert('Please insert only an integer number');\r\n    } else if (initialNumber >= finalNumber) {\r\n        alert(`The final number should be bigger, than initial`);\r\n        continue;\r\n    }\r\n} while (!Number.isInteger(initialNumber));\r\n\r\ndo {\r\n    finalNumber = +prompt('Enter please the final number');\r\n\r\n    if(!Number.isInteger(finalNumber)) {\r\n        alert('Please insert only an integer number');\r\n    } else if (initialNumber >= finalNumber) {\r\n        alert(`The final number should be bigger, than initial`);\r\n        continue;\r\n    }\r\n} while (!Number.isInteger(finalNumber));\r\n\r\n\r\nlet numbersSum = 0;\r\nconst skipEvenNumbers = confirm('Would you like to skip even numbers?');\r\n\r\nfor(let i = initialNumber; i <= finalNumber; i++) {\r\n if(skipEvenNumbers && i % 2 === 0) {\r\n   continue;\r\n }\r\n    numbersSum += i;\r\n}\r\n\r\n// console.log(`The total sum is ${numbersSum}`)\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-2.js?");

/***/ }),

/***/ "./src/hw-3.js":
/*!*********************!*\
  !*** ./src/hw-3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMaxDigit\": () => (/* binding */ getMaxDigit),\n/* harmony export */   \"nameChange\": () => (/* binding */ nameChange),\n/* harmony export */   \"salaryMinusTax\": () => (/* binding */ salaryMinusTax),\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"countLetter\": () => (/* binding */ countLetter),\n/* harmony export */   \"isPalindrome\": () => (/* binding */ isPalindrome)\n/* harmony export */ });\n\r\n    //task 1\r\n\r\nconst getMaxDigit = function (number) {\r\n    let maxDigit = 0;\r\n    const numberIntoString = String(number);\r\n  \r\n    for (let i = 0; i < numberIntoString.length; i++) {\r\n      if (maxDigit < numberIntoString[i]) {\r\n        maxDigit = numberIntoString[i];\r\n      }\r\n    }\r\n  \r\n    return maxDigit;\r\n  };\r\n  // console.log(`${getMaxDigit(5497)}`);\r\n  \r\n  //task 3\r\n  \r\n  const nameChange = function (name) {\r\n    return name[0].toUpperCase() + name.slice(1).toLowerCase();\r\n  };\r\n  \r\n  // console.log(`${nameChange(\"draKe\")}`);\r\n  \r\n  //task 4\r\n  \r\n  const salaryMinusTax = (salary, tax) => salary - (salary * tax) / 100;\r\n  \r\n  // console.log(`${salaryMinusTax(1000, 18 + 1.5)}`);\r\n  \r\n  //task 5\r\n  \r\n  const getRandomNumber = function (initialNumber, finalNumber) {\r\n    return (\r\n      Math.ceil(\r\n        Math.random() * (Math.floor(finalNumber) - Math.ceil(initialNumber))\r\n      ) + initialNumber\r\n    );\r\n  };\r\n  \r\n  // console.log(`${getRandomNumber(1, 10)}`);\r\n  \r\n  //task 6\r\n  \r\n  const countLetter = function (letter, word) {\r\n    let count = null;\r\n  \r\n    const wordToLower = word.toLowerCase(word);\r\n  \r\n    for (let i = 0; i < wordToLower.length; i++) {\r\n      if (wordToLower[i] === letter) {\r\n        count++;\r\n      }\r\n    }\r\n  \r\n    return count;\r\n  };\r\n  \r\n  // console.log(`${countLetter(\"a\", \"Abraham\")}`);\r\n  \r\n  //task 10\r\n  \r\n  const isPalindrome = function (palindrome) {\r\n    let wordIsPalindrome = true;\r\n  \r\n    for (let i = 0, j = palindrome.length - 1; i < palindrome.length; i++, j--) {\r\n      if (palindrome[i] !== palindrome[j]) wordIsPalindrome = false;\r\n      break;\r\n    }\r\n  \r\n    return wordIsPalindrome;\r\n  };\r\n  \r\n  // console.log(`${isPalindrome(\"ufotofu\")}`);\r\n  // console.log(`${isPalindrome(\"great\")}`);\r\n  \r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-3.js?");

/***/ }),

/***/ "./src/hw-4.js":
/*!*********************!*\
  !*** ./src/hw-4.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pairsOfStudents\": () => (/* binding */ pairsOfStudents),\n/* harmony export */   \"pairsAndTopics\": () => (/* binding */ pairsAndTopics),\n/* harmony export */   \"studentsWithMarks\": () => (/* binding */ studentsWithMarks),\n/* harmony export */   \"markStudents\": () => (/* binding */ markStudents)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\nconst themes = [\r\n  \"Диференційне рівняння\",\r\n  \"Теорія автоматів\",\r\n  \"Алгоритми і структури даних\",\r\n];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\n\r\nconst femaleStudents = [students[2], students[3], students[5]];\r\nconst maleStudents = [students[0], students[1], students[4]];\r\n\r\nfunction getStudentsPairs(femaleStudents, maleStudents) {\r\n  let studentsPairs = [];\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    studentsPairs[i] = [femaleStudents[i], maleStudents[i]];\r\n  }\r\n\r\n  return studentsPairs;\r\n}\r\n\r\nconst pairsOfStudents = getStudentsPairs(femaleStudents, maleStudents);\r\n// console.log(pairsOfStudents);\r\n\r\nfunction addTopics(pairsOfStudents, themes) {\r\n  let studentsPairsAndTopics = [];\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    studentsPairsAndTopics[i] = [pairsOfStudents[i].join(\" і \"), themes[i]];\r\n  }\r\n\r\n  return studentsPairsAndTopics;\r\n}\r\n\r\nconst pairsAndTopics = addTopics(pairsOfStudents, themes);\r\n// console.log(pairsAndTopics);\r\n\r\nfunction addMarks(students, marks) {\r\n  let studentsAndMarks = [];\r\n\r\n  for (let i = 0; i < 6; i++) {\r\n    studentsAndMarks[i] = [students[i], marks[i]];\r\n  }\r\n\r\n  return studentsAndMarks;\r\n}\r\n\r\nconst studentsWithMarks = addMarks(students, marks);\r\n// console.log(studentsWithMarks);\r\n\r\nfunction addedMark(min, max) {\r\n  const mark = Math.floor(Math.random() * max) + min;\r\n\r\n  return mark;\r\n}\r\naddedMark();\r\n\r\nfunction putMarksOnProjects(pairsAndTopics) {\r\n  const markStudentsProjects = [];\r\n  for (let i = 0; i < pairsAndTopics.length; i++) {\r\n    const markStudents = [...pairsAndTopics[i], addedMark(1, 5)];\r\n    markStudentsProjects.push(markStudents);\r\n  }\r\n\r\n  return markStudentsProjects;\r\n}\r\n\r\nconst markStudents = putMarksOnProjects(pairsAndTopics);\r\n// console.log(markStudents);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-4.js?");

/***/ }),

/***/ "./src/hw-5.js":
/*!*********************!*\
  !*** ./src/hw-5.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomArray\": () => (/* binding */ getRandomArray),\n/* harmony export */   \"getModa\": () => (/* binding */ getModa),\n/* harmony export */   \"getAverage\": () => (/* binding */ getAverage),\n/* harmony export */   \"getMedian\": () => (/* binding */ getMedian),\n/* harmony export */   \"filterEvenNumbers\": () => (/* binding */ filterEvenNumbers),\n/* harmony export */   \"countPositiveNumbers\": () => (/* binding */ countPositiveNumbers),\n/* harmony export */   \"getDividedByFive\": () => (/* binding */ getDividedByFive)\n/* harmony export */ });\n  //task 1\r\n\r\nfunction getRandomArray(length, min, max) {\r\n    const randomArr = [];\r\n    for (let i = 0; i < length; i++) {\r\n      randomArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    }\r\n  \r\n    return randomArr;\r\n  }\r\n  // console.log(getRandomArray(15, 1, 100));\r\n  \r\n  //task 2\r\n  \r\n  function getModa(...array) {\r\n    const arrayValues = {};\r\n    const arrayNumbers = [...array];\r\n    arrayNumbers.sort((a, b) => a - b);\r\n  \r\n    arrayNumbers.forEach((i) => {\r\n      arrayValues[i] = arrayValues[i] + 1 || 1;\r\n    }, []);\r\n  \r\n    let moda = [];\r\n    let countDigits = 1;\r\n  \r\n    for (let num in arrayValues) {\r\n      if (arrayValues[num] > countDigits) {\r\n        countDigits = arrayValues[num];\r\n        moda = num;\r\n      } else if (arrayValues[num] === countDigits) {\r\n        moda.push(num);\r\n      }\r\n    }\r\n    return moda;\r\n  }\r\n  \r\n  // console.log(\r\n  //   getModa(\r\n  //     1.3,\r\n  //     3,\r\n  //     6,\r\n  //     3,\r\n  //     3,\r\n  //     2,\r\n  //     1.3,\r\n  //     55,\r\n  //     11,\r\n  //     78,\r\n  //     2,\r\n  //     55,\r\n  //     1.3,\r\n  //     77,\r\n  //     57,\r\n  //     87,\r\n  //     23,\r\n  //     2,\r\n  //     56,\r\n  //     3,\r\n  //     55\r\n  //   )\r\n  // );\r\n  \r\n  //task 3\r\n  \r\n  function getAverage(array) {\r\n    const count = array.filter((num) => Number.isInteger(num));\r\n    const result = count.reduce((total, el) => total + el) / count.length;\r\n    return result;\r\n  }\r\n  \r\n  // console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));\r\n  \r\n  //task 4\r\n  \r\n  function getMedian(arr) {\r\n    const median = Math.floor(arr.length / 2);\r\n    let numbers = arr.sort((a, b) => a - b);\r\n  \r\n    const sortedArr =\r\n      arr.length % 2 !== 0\r\n        ? numbers[median]\r\n        : (numbers[median - 1] + numbers[median]) / 2;\r\n  \r\n    return sortedArr;\r\n  }\r\n  \r\n  // console.log(getMedian([1, 2, 3, 4]));\r\n  \r\n  //task 5\r\n  \r\n  function filterEvenNumbers(...numbers) {\r\n    return numbers.filter((el) => el % 2);\r\n  }\r\n  \r\n  // console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));\r\n  \r\n  //task 6\r\n  \r\n  function countPositiveNumbers(...numbers) {\r\n    return numbers.filter((el) => el > 0).length;\r\n  }\r\n  \r\n  // console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));\r\n  \r\n  //task 7\r\n  \r\n  function getDividedByFive(...numbers) {\r\n    return numbers.filter((el) => el % 5 === 0);\r\n  }\r\n  // console.log(\r\n  //   getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)\r\n  // );\r\n  \r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-5.js?");

/***/ }),

/***/ "./src/hw-6.js":
/*!*********************!*\
  !*** ./src/hw-6.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"students\": () => (/* binding */ students),\n/* harmony export */   \"getSubjects\": () => (/* binding */ getSubjects),\n/* harmony export */   \"getAverageMark\": () => (/* binding */ getAverageMark),\n/* harmony export */   \"getStudentInfo\": () => (/* binding */ getStudentInfo),\n/* harmony export */   \"getStudentsNames\": () => (/* binding */ getStudentsNames),\n/* harmony export */   \"getBestStudent\": () => (/* binding */ getBestStudent),\n/* harmony export */   \"calculateWordLetters\": () => (/* binding */ calculateWordLetters)\n/* harmony export */ });\nconst students = [\r\n  {\r\n    name: \"Tanya\",\r\n    course: 3,\r\n    subjects: {\r\n      math: [4, 4, 3, 4],\r\n      algorithms: [3, 3, 3, 4, 4, 4],\r\n      data_science: [5, 5, 3, 4],\r\n    },\r\n  },\r\n  {\r\n    name: \"Victor\",\r\n    course: 4,\r\n    subjects: {\r\n      physics: [5, 5, 5, 3],\r\n      economics: [2, 3, 3, 3, 3, 5],\r\n      geometry: [5, 5, 2, 3, 5],\r\n    },\r\n  },\r\n  {\r\n    name: \"Anton\",\r\n    course: 2,\r\n    subjects: {\r\n      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n      english: [5, 3],\r\n      cosmology: [5, 5, 5, 5],\r\n    },\r\n  },\r\n];\r\n\r\n//task 1\r\n\r\nfunction getSubjects(student) {\r\n  const subjects = Object?.keys(student.subjects);\r\n  return subjects.map(\r\n    (chooseSubject) =>\r\n      chooseSubject[0].toUpperCase() +\r\n      chooseSubject.slice(1).toLowerCase().replace(\"_\", \" \")\r\n  );\r\n}\r\n\r\n// console.log(`Return subjects for students:`, getSubjects(students[0]));\r\n\r\n//task 2\r\n\r\nfunction getAverageMark(students) {\r\n  const studentsMarks = Object?.values(students.subjects).flat();\r\n  let listOfStudentsWithMarks = studentsMarks.reduce(\r\n    (listOfStudentsWithMarks, mark) => {\r\n      return listOfStudentsWithMarks + mark;\r\n    },\r\n    0\r\n  );\r\n\r\n  return (listOfStudentsWithMarks / studentsMarks.length).toFixed(2);\r\n}\r\n\r\n// console.log(`The average mark of students is:`, getAverageMark(students[0]));\r\n\r\n//task 3\r\n\r\nfunction getStudentInfo(students) {\r\n  return {\r\n    course: students.course,\r\n    name: students.name,\r\n    averageMark: getAverageMark(students),\r\n  };\r\n}\r\n\r\n// console.log(`Info on one student`, JSON.stringify(getStudentInfo(students[0])));\r\n\r\n//task 4\r\n\r\nfunction getStudentsNames(students) {\r\n  return students.map((student) => student.name).sort();\r\n}\r\n\r\n// console.log(`Alphabetic order of students`, getStudentsNames(students));\r\n\r\n//task 5\r\n\r\nfunction getBestStudent(students) {\r\n  let bestMark = 0;\r\n  let bestStudent = \"\";\r\n\r\n  for (const i in students) {\r\n    const studentsMark = getAverageMark(students[i]);\r\n    if (studentsMark > bestMark) {\r\n      bestStudent = students[i].name;\r\n    }\r\n  }\r\n  return bestStudent;\r\n}\r\n\r\n// console.log(`Student with the best marks`, getBestStudent(students));\r\n\r\n//task 6\r\n\r\nfunction calculateWordLetters(entry = \"ContInuation\") {\r\n  const smallLetters = entry.toLowerCase().split(\"\");\r\n  let countLetters = {};\r\n\r\n  smallLetters.forEach((letter) => {\r\n    countLetters[letter] = countLetters[letter] + 1 || 1;\r\n  });\r\n  return countLetters;\r\n}\r\n// console.log(`How often letters are repeated`, calculateWordLetters());\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-6.js?");

/***/ }),

/***/ "./src/hw-7.js":
/*!*********************!*\
  !*** ./src/hw-7.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ukraine\": () => (/* binding */ ukraine),\n/* harmony export */   \"latvia\": () => (/* binding */ latvia),\n/* harmony export */   \"litva\": () => (/* binding */ litva),\n/* harmony export */   \"getMyTaxes\": () => (/* binding */ getMyTaxes),\n/* harmony export */   \"getMiddleTaxes\": () => (/* binding */ getMiddleTaxes),\n/* harmony export */   \"getTotalTaxes\": () => (/* binding */ getTotalTaxes),\n/* harmony export */   \"getMySalary\": () => (/* binding */ getMySalary)\n/* harmony export */ });\nconst ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\r\nconst latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\r\nconst litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\r\n\r\nfunction randomSalary(maxSalary, minSalary) {\r\n    const randomSalaryAmount = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;\r\n    return randomSalaryAmount\r\n}\r\n//task 1\r\n\r\nfunction getMyTaxes(salary) {\r\n    const salaryTaxes = this.tax * salary;\r\n    return salaryTaxes\r\n}\r\n\r\n// console.log(`The amount of taxes paid is: `, getMyTaxes.call(litva, 3000));\r\n\r\n//task 2\r\n\r\nfunction getMiddleTaxes(country) {\r\n    const averageTaxesPaid = this.tax * this.middleSalary;\r\n    return averageTaxesPaid\r\n}\r\n\r\n// console.log(`Get average taxes: `, getMiddleTaxes.call(latvia));\r\n\r\n//task 3\r\n\r\nfunction getTotalTaxes(country) {\r\n    const totalTaxesPaid = this.tax * this.middleSalary * this.vacancies;\r\n    return totalTaxesPaid\r\n}\r\n\r\n// console.log(`Amount of taxes paid in every country: `, getTotalTaxes.call(ukraine));\r\n\r\n//task 4\r\n\r\nfunction getMySalary(country) {\r\n    const salary = randomSalary(1500, 2000);\r\n    \r\n    const taxes = +(this.tax * salary).toFixed(2);\r\n        \r\n    return {\r\n    salary,\r\n    taxes,\r\n    profit: salary - taxes,\r\n    }\r\n}\r\n\r\n// setInterval(() => {\r\n//     console.log(`Get data after 10 sec `, getMySalary.call(ukraine));\r\n// }, 10000)\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-7.js?");

/***/ }),

/***/ "./src/hw-8.js":
/*!*********************!*\
  !*** ./src/hw-8.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentData\": () => (/* binding */ studentData)\n/* harmony export */ });\nclass Student {\r\n  constructor(university, course, fullName, marks = [5, 4, 4, 5]) {\r\n    this.university = university;\r\n    this.course = course;\r\n    this.fullName = fullName;\r\n    this.marks = marks;\r\n    this.isDismiss = false;\r\n  }\r\n  getInfo() {\r\n    return `Студентка ${this.course}го курсу ${this.university}, ${this.fullName}`;\r\n  }\r\n\r\n  get getMarks() {\r\n    return !this.isDismiss ? this.marks : null;\r\n  }\r\n\r\n  set setMarks(mark) {\r\n    return !this.isDismiss ? this.marks.push(mark) : null;\r\n  }\r\n\r\n  getAverageMark() {\r\n    return (\r\n      this.marks.reduce((allMarks, mark) => allMarks + mark, 0) /\r\n      this.marks.length\r\n    );\r\n  }\r\n\r\n  dismiss() {\r\n    this.isDismiss = true;\r\n  }\r\n\r\n  recover() {\r\n    this.isDismiss = false;\r\n  }\r\n}\r\n\r\nconst studentData = new Student(\"Школи Магії та чародійства\", 1, \"Луна Лавґуд\");\r\n// console.log(`Інформація про студентку: `, studentData.getInfo());\r\n// console.log(`Список оцінок Луни: ${studentData.getMarks}`);\r\n// studentData.setMarks = 4;\r\n// console.log(`Додано нову оцінку 4: ${studentData.getMarks}`);\r\n// console.log(`Середня оцінка: `, Math.round(studentData.getAverageMark()));\r\n// studentData.dismiss();\r\n// console.log(`Оцінки після виключення студентки: ${studentData.getMarks}`);\r\n// studentData.recover();\r\n// console.log(`Студентку відновлено, оцінки: ${studentData.getMarks}`);\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/hw-8.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw-1 */ \"./src/hw-1.js\");\n/* harmony import */ var _hw_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw-2 */ \"./src/hw-2.js\");\n/* harmony import */ var _hw_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw-3 */ \"./src/hw-3.js\");\n/* harmony import */ var _hw_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw-4 */ \"./src/hw-4.js\");\n/* harmony import */ var _hw_5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw-5 */ \"./src/hw-5.js\");\n/* harmony import */ var _hw_6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw-6 */ \"./src/hw-6.js\");\n/* harmony import */ var _hw_7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw-7 */ \"./src/hw-7.js\");\n/* harmony import */ var _hw_8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw-8 */ \"./src/hw-8.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Amount of discount: \", `${_hw_1__WEBPACK_IMPORTED_MODULE_0__.discount}`);\r\nconsole.log(\"Price with discount: \", `${_hw_1__WEBPACK_IMPORTED_MODULE_0__.clientsDiscount}`);\r\nconsole.log(\"Final cost with discount: \", `${_hw_1__WEBPACK_IMPORTED_MODULE_0__.costWithDiscount}`);\r\n\r\nconsole.log(\"Initial number \", `${_hw_2__WEBPACK_IMPORTED_MODULE_1__.initialNumber}`);\r\nconsole.log(\"Final number: \", `${_hw_2__WEBPACK_IMPORTED_MODULE_1__.finalNumber}`);\r\nconsole.log(\"Sum of numbers: \", `${_hw_2__WEBPACK_IMPORTED_MODULE_1__.numbersSum}`);\r\n\r\nconsole.log(\"Max digit: \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.getMaxDigit)(5497)}`);\r\nconsole.log(\"Name mutation: \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.nameChange)(\"draKe\")}`);\r\nconsole.log(\"Salary without taxes: \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.salaryMinusTax)(1000, 18 + 1.5)}`);\r\nconsole.log(\"Random number: \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, 10)}`);\r\nconsole.log(\"Count letters a: \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.countLetter)(\"a\", \"Alabama\")}`);\r\nconsole.log(\"Is it a palindrome? \", `${(0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.isPalindrome)(\"ufotofu\")}`);\r\n\r\nconsole.log(\"Pairs of students: \", `${_hw_4__WEBPACK_IMPORTED_MODULE_3__.pairsOfStudents}`);\r\nconsole.log(\"Pairs of students with topics: \", `${_hw_4__WEBPACK_IMPORTED_MODULE_3__.pairsAndTopics}`);\r\nconsole.log(\"Students with marks: \", `${_hw_4__WEBPACK_IMPORTED_MODULE_3__.studentsWithMarks}`);\r\nconsole.log(\"Putting marks on projects \", `${_hw_4__WEBPACK_IMPORTED_MODULE_3__.markStudents}`);\r\n\r\nconsole.log(\"Getting random array \", `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getRandomArray)(15, 1, 100)}`);\r\nconsole.log(\r\n  \"The moda: \",\r\n  `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getModa)(\r\n    1.3,\r\n    3,\r\n    6,\r\n    3,\r\n    3,\r\n    2,\r\n    1.3,\r\n    55,\r\n    11,\r\n    78,\r\n    2,\r\n    55,\r\n    1.3,\r\n    77,\r\n    57,\r\n    87,\r\n    23,\r\n    2,\r\n    56,\r\n    3,\r\n    55\r\n  )}`\r\n);\r\nconsole.log(\r\n  \"The average number \",\r\n  `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getAverage)([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2])}`\r\n);\r\nconsole.log(\"Getting the median \", `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getMedian)([1, 2, 3, 4])}`);\r\nconsole.log(\r\n  \"Filter even numbers \",\r\n  `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.filterEvenNumbers)(1, 2, 3, 4, 5, 6, 7, 8, 9)}`\r\n);\r\nconsole.log(\"Count positive \", `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.countPositiveNumbers)(1, -2, 3, -4, -5, 6)}`);\r\nconsole.log(\r\n  \"Divide by five \",\r\n  `${(0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getDividedByFive)(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`\r\n);\r\n\r\nconsole.log(\"Return subjects for students: \", `${(0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getSubjects)(_hw_6__WEBPACK_IMPORTED_MODULE_5__.students[0])}`);\r\nconsole.log(\r\n  \"The average mark of students is: \",\r\n  `${(0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getAverageMark)(_hw_6__WEBPACK_IMPORTED_MODULE_5__.students[0])}`\r\n);\r\nconsole.log(\r\n  \"Info on one student \",\r\n  `${JSON.stringify((0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getStudentInfo)(_hw_6__WEBPACK_IMPORTED_MODULE_5__.students[0]))}`\r\n);\r\nconsole.log(\"Alphabetic order of students \", `${(0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getStudentsNames)(_hw_6__WEBPACK_IMPORTED_MODULE_5__.students)}`);\r\nconsole.log(\"Student with the best marks is1 \", `${(0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getBestStudent)(_hw_6__WEBPACK_IMPORTED_MODULE_5__.students)}`);\r\nconsole.log(\"How often letters are repeated \", `${(0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.calculateWordLetters)()}`);\r\n\r\nconsole.log(\"The amount of taxes paid is: \", `${_hw_7__WEBPACK_IMPORTED_MODULE_6__.getMyTaxes.call(_hw_7__WEBPACK_IMPORTED_MODULE_6__.litva, 3000)}`);\r\nconsole.log(\"Get average taxes: \", `${_hw_7__WEBPACK_IMPORTED_MODULE_6__.getMiddleTaxes.call(_hw_7__WEBPACK_IMPORTED_MODULE_6__.latvia)}`);\r\nconsole.log(\r\n  \"Amount of taxes paid in every country: \",\r\n  `${_hw_7__WEBPACK_IMPORTED_MODULE_6__.getTotalTaxes.call(_hw_7__WEBPACK_IMPORTED_MODULE_6__.ukraine)}`\r\n);\r\nsetInterval(() => {\r\n  console.log(\"Get data after 10 sec \", `${_hw_7__WEBPACK_IMPORTED_MODULE_6__.getMySalary.call(_hw_7__WEBPACK_IMPORTED_MODULE_6__.ukraine)}`);\r\n}, 10000);\r\n\r\nconsole.log(`Інформація про студентку: `, _hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getInfo());\r\nconsole.log(`Список оцінок Луни: ${_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getMarks}`);\r\n_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.setMarks = 4;\r\nconsole.log(`Додано нову оцінку 4: ${_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getMarks}`);\r\nconsole.log(`Середня оцінка: `, Math.round(_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getAverageMark()));\r\n_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.dismiss();\r\nconsole.log(`Оцінки після виключення студентки: ${_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getMarks}`);\r\n_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.recover();\r\nconsole.log(`Студентку відновлено, оцінки: ${_hw_8__WEBPACK_IMPORTED_MODULE_7__.studentData.getMarks}`);\r\n\n\n//# sourceURL=webpack://16-homework-node-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;