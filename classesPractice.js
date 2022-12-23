class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }
    // want to change data through methods, rather than manually changing the data
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        //creating a separate sum variable for readabilty
        let sum = this.scores.reduce(function(a, b){return a + b});
        return sum/this.scores.length;
    }
    //static methods are more "utility methods"
    //not related to any particular instance; can't call on an individual instance
    //just part of the class in general
    static enrollStudents() {
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 4);
secondStudent.addScore(92);
