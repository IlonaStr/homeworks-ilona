const hw6 = () => {
    const students = [
        {
          name: "Tanya",
          course: 3,
          subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4],
          },
        },
        {
          name: "Victor",
          course: 4,
          subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5],
          },
        },
        {
          name: "Anton",
          course: 2,
          subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5],
          },
        },
      ];
      
      //task 1
      
      function getSubjects(student) {
        const subjects = Object?.keys(student.subjects);
        return subjects.map(
          (chooseSubject) =>
            chooseSubject[0].toUpperCase() +
            chooseSubject.slice(1).toLowerCase().replace("_", " ")
        );
      }
      
      console.log(`Return subjects for students:`, getSubjects(students[0]));
      
      //task 2
      
      function getAverageMark(students) {
        const studentsMarks = Object?.values(students.subjects).flat();
        listOfStudentsWithMarks = studentsMarks.reduce(
          (listOfStudentsWithMarks, mark) => {
            return listOfStudentsWithMarks + mark;
          },
          0
        );
      
        return (listOfStudentsWithMarks / studentsMarks.length).toFixed(2);
      }
      
      console.log(`The average mark of students is:`, getAverageMark(students[0]));
      
      //task 3
      
      function getStudentInfo(students) {
        return {
          course: students.course,
          name: students.name,
          averageMark: getAverageMark(students),
        };
      }
      
      console.log(`Info on one student`, JSON.stringify(getStudentInfo(students[0])));
      
      //task 4
      
      function getStudentsNames(students) {
        return students.map((student) => student.name).sort();
      }
      
      console.log(`Alphabetic order of students`, getStudentsNames(students));
      
      //task 5
      
      function getBestStudent(students) {
        let bestMark = 0;
        let bestStudent = "";
      
        for (const i in students) {
          const studentsMark = getAverageMark(students[i]);
          if (studentsMark > bestMark) {
            bestStudent = students[i].name;
          }
        }
        return bestStudent;
      }
      
      console.log(`Student with the best marks`, getBestStudent(students));
      
      //task 6
      
      function calculateWordLetters(entry = "ContInuation") {
        const smallLetters = entry.toLowerCase().split("");
        let countLetters = {};
      
        smallLetters.forEach((letter) => {
          countLetters[letter] = countLetters[letter] + 1 || 1;
        });
        return countLetters;
      }
      console.log(`How often letters are repeated`, calculateWordLetters());
      
}

export default hw6;