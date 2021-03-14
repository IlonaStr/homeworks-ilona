const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//task 1

function getMyTaxes(salary) {
    return salaryTaxes = this.tax * salary;
}

console.log(`The amount of taxes paid is: `, getMyTaxes.call(litva, 3000));

//task 2

function getMiddleTaxes(country) {
    return averageTaxesPaid = this.tax * this.middleSalary;
}

console.log(`Get average taxes: `, getMiddleTaxes.call(latvia));

//task 3

function getTotalTaxes(country) {
    return totalTaxesPaid = this.tax * this.middleSalary * this.vacancies;
}

console.log(`Amount of taxes paid in every country: `, getTotalTaxes.call(ukraine));

//task 4

function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    
    const randomSalaryAmount = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
    const taxes = +(this.tax * randomSalaryAmount).toFixed(2);
        
    return {
            salary: randomSalaryAmount,
            taxes: taxes,
            profit: randomSalaryAmount - taxes,
    }
}

setInterval(() => {
    console.log(`Get data after 10 sec `, getMySalary.call(ukraine));
}, 10000)

