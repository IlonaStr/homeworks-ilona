import { discount, clientsDiscount, costWithDiscount } from "./hw-1";
import { initialNumber, finalNumber, numbersSum } from "./hw-2";
import {
  getMaxDigit,
  nameChange,
  salaryMinusTax,
  getRandomNumber,
  countLetter,
  isPalindrome,
} from "./hw-3";
import {
  pairsOfStudents,
  pairsAndTopics,
  studentsWithMarks,
  markStudents,
} from "./hw-4";
import {
  getRandomArray,
  getModa,
  getAverage,
  getMedian,
  filterEvenNumbers,
  countPositiveNumbers,
  getDividedByFive,
} from "./hw-5";
import {
  students,
  getSubjects,
  getAverageMark,
  getStudentInfo,
  getStudentsNames,
  getBestStudent,
  calculateWordLetters,
} from "./hw-6";
import {
  ukraine,
  latvia,
  litva,
  getMyTaxes,
  getMiddleTaxes,
  getTotalTaxes,
  getMySalary,
} from "./hw-7";
import { studentData } from "./hw-8";

console.log("Amount of discount: ", `${discount}`);
console.log("Price with discount: ", `${clientsDiscount}`);
console.log("Final cost with discount: ", `${costWithDiscount}`);

console.log("Initial number ", `${initialNumber}`);
console.log("Final number: ", `${finalNumber}`);
console.log("Sum of numbers: ", `${numbersSum}`);

console.log("Max digit: ", `${getMaxDigit(5497)}`);
console.log("Name mutation: ", `${nameChange("draKe")}`);
console.log("Salary without taxes: ", `${salaryMinusTax(1000, 18 + 1.5)}`);
console.log("Random number: ", `${getRandomNumber(1, 10)}`);
console.log("Count letters a: ", `${countLetter("a", "Alabama")}`);
console.log("Is it a palindrome? ", `${isPalindrome("ufotofu")}`);

console.log("Pairs of students: ", `${pairsOfStudents}`);
console.log("Pairs of students with topics: ", `${pairsAndTopics}`);
console.log("Students with marks: ", `${studentsWithMarks}`);
console.log("Putting marks on projects ", `${markStudents}`);

console.log("Getting random array ", `${getRandomArray(15, 1, 100)}`);
console.log(
  "The moda: ",
  `${getModa(
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
  )}`
);
console.log(
  "The average number ",
  `${getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2])}`
);
console.log("Getting the median ", `${getMedian([1, 2, 3, 4])}`);
console.log(
  "Filter even numbers ",
  `${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)}`
);
console.log("Count positive ", `${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);
console.log(
  "Divide by five ",
  `${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`
);

console.log("Return subjects for students: ", `${getSubjects(students[0])}`);
console.log(
  "The average mark of students is: ",
  `${getAverageMark(students[0])}`
);
console.log(
  "Info on one student ",
  `${JSON.stringify(getStudentInfo(students[0]))}`
);
console.log("Alphabetic order of students ", `${getStudentsNames(students)}`);
console.log("Student with the best marks is1 ", `${getBestStudent(students)}`);
console.log("How often letters are repeated ", `${calculateWordLetters()}`);

console.log("The amount of taxes paid is: ", `${getMyTaxes.call(litva, 3000)}`);
console.log("Get average taxes: ", `${getMiddleTaxes.call(latvia)}`);
console.log(
  "Amount of taxes paid in every country: ",
  `${getTotalTaxes.call(ukraine)}`
);
setInterval(() => {
  console.log("Get data after 10 sec ", `${getMySalary.call(ukraine)}`);
}, 10000);

console.log(`Інформація про студентку: `, studentData.getInfo());
console.log(`Список оцінок Луни: ${studentData.getMarks}`);
studentData.setMarks = 4;
console.log(`Додано нову оцінку 4: ${studentData.getMarks}`);
console.log(`Середня оцінка: `, Math.round(studentData.getAverageMark()));
studentData.dismiss();
console.log(`Оцінки після виключення студентки: ${studentData.getMarks}`);
studentData.recover();
console.log(`Студентку відновлено, оцінки: ${studentData.getMarks}`);
