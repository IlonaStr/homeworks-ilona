class Student {
    constructor (university, course, fullName, marks = [5, 4, 4, 5]) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismiss = false;
    }
    getInfo() {
        return `Студентка ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get getMarks() {
        return (this.isDismiss === false) ? this.marks : null;
    }

    set setMarks(mark) {
        return (this.isDismiss === false) ? this.marks.push(mark) : null
    }

    getAverageMark() {
        return this.marks.reduce((allMarks, mark) => 
        allMarks + mark, 
        0) / this.marks.length;
    }

    dismiss() {
        this.isDismiss = true;
    }

    recover() {
        this.isDismiss = false;
    }
    
}

const studentData = new Student('Школи Магії та чародійства', 1, 'Луна Лавґуд');
console.log(`Інформація про студентку: `, studentData.getInfo());
console.log(`Список оцінок Луни: ${studentData.getMarks}`);
studentData.setMarks = 4;
console.log(`Додано нову оцінку 4: ${studentData.getMarks}`);
console.log(`Середня оцінка: `, studentData.getAverageMark());
studentData.dismiss();
console.log(`Оцінки після виключення студентки: ${studentData.getMarks}`);
studentData.recover();
console.log(`Студентку відновлено, оцінки: ${studentData.getMarks}`)
