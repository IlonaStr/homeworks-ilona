const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function randomSalary(maxSalary, minSalary) {
    const randomSalaryAmount = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
    return randomSalaryAmount
}
//task 1

function getMyTaxes(salary) {
    const salaryTaxes = this.tax * salary;
    return salaryTaxes
}

// console.log(`The amount of taxes paid is: `, getMyTaxes.call(litva, 3000));

//task 2

function getMiddleTaxes(country) {
    const averageTaxesPaid = this.tax * this.middleSalary;
    return averageTaxesPaid
}

// console.log(`Get average taxes: `, getMiddleTaxes.call(latvia));

//task 3

function getTotalTaxes(country) {
    const totalTaxesPaid = this.tax * this.middleSalary * this.vacancies;
    return totalTaxesPaid
}

// console.log(`Amount of taxes paid in every country: `, getTotalTaxes.call(ukraine));

//task 4

function getMySalary(country) {
    const salary = randomSalary(1500, 2000);
    
    const taxes = +(this.tax * salary).toFixed(2);
        
    return {
    salary,
    taxes,
    profit: salary - taxes,
    }
}

// setInterval(() => {
//     console.log(`Get data after 10 sec `, getMySalary.call(ukraine));
// }, 10000)


export {ukraine, latvia, litva, getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary};