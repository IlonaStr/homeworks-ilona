const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const femaleStudents = [students[2], students[3], students[5]];
const maleStudents = [students[0], students[1], students[4]];

function getStudentsPairs(femaleStudents, maleStudents) {
    let studentsPairs = [];

    for(let i = 0; i < 3; i++) {
        studentsPairs[i] = [femaleStudents[i] + ', ' + maleStudents[i]];
    }

    return studentsPairs;
}

const pairsOfStudents = getStudentsPairs(femaleStudents, maleStudents);
console.log(pairsOfStudents);

function addTopics (pairsOfStudents, themes) {
    let studentsPairsAndTopics = [];

    for(let i = 0; i < 3; i++) {
        studentsPairsAndTopics[i] = [pairsOfStudents[i] + ', ' + themes[i]]
    }

    return studentsPairsAndTopics;
}

const pairsAndTopics = addTopics(pairsOfStudents, themes);
console.log(pairsAndTopics);

function addMarks(pairsOfStudents, marks) {
    let studentsPairsAndMarks = [];
    for(let i = 0; i < 6; i++) {
        studentsPairsAndMarks[i] = [pairsOfStudents[i] + ', ' + marks[i]]
    }

    return studentsPairsAndMarks;
}

const pairsAndMarks = addMarks(pairsOfStudents, marks);
console.log(pairsAndMarks);

function putMarksOnProjects(pairsAndTopics) {
    const markStudentsProjects = [];
    for(let i = 0; i < pairsAndTopics.length; i++) {
        const addedMark = Math.floor(Math.random() * 5) + 1;
        const markStudents = [pairsAndTopics[i] + ', ' + addedMark];
        markStudentsProjects.push(markStudents);
    }

    return markStudentsProjects;
}

const markStudents = putMarksOnProjects(pairsAndTopics);
console.log(markStudents);