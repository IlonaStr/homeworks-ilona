const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const femaleStudents = [students[2], students[3], students[5]];
const maleStudents = [students[0], students[1], students[4]];

function getStudentsPairs(femaleStudents, maleStudents) {
    let studentsPairs = [];

    for(let i = 0; i < 3; i++) {
        studentsPairs[i] = [femaleStudents[i], maleStudents[i]];
    }

    return studentsPairs;
}

const pairsOfStudents = getStudentsPairs(femaleStudents, maleStudents);
console.log(pairsOfStudents);

function addTopics (pairsOfStudents, themes) {
    let studentsPairsAndTopics = [];

    for(let i = 0; i < 3; i++) {
        studentsPairsAndTopics[i] = [pairsOfStudents[i].join(" і "), themes[i]]
    }

    return studentsPairsAndTopics;
}

const pairsAndTopics = addTopics(pairsOfStudents, themes);
console.log(pairsAndTopics);

function addMarks(students, marks) {
    let studentsAndMarks = [];

    for(let i = 0; i < 6; i++) {
        studentsAndMarks[i] = [students[i], marks[i]]
    }

    return studentsAndMarks;
}

const studentsWithMarks = addMarks(students, marks);
console.log(studentsWithMarks);

function addedMark(min, max) {
    const mark = Math.floor(Math.random() * max) + min;

    return mark;
}
addedMark();

function putMarksOnProjects(pairsAndTopics) {

    const markStudentsProjects = [];
    for(let i = 0; i < pairsAndTopics.length; i++) {
        const markStudents = [...pairsAndTopics[i], addedMark(1, 5)];
        markStudentsProjects.push(markStudents);
    }

    return markStudentsProjects;
}

const markStudents = putMarksOnProjects(pairsAndTopics);
console.log(markStudents);