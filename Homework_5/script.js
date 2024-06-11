// TASK_1
// function propsCount(currentObject){
//     return Object.getOwnPropertyNames(currentObject).length;
// }

// let mentor = {
//               course: "JS Fundamental",
//               duration: 3,
//               direction: "Wed development",
//               id: 7
// };

// console.log(propsCount(mentor));
// END_TASK_1

// TASK_2
// const user = {
//     loginName: 'cbe',
//     firstName: 'Charlotte',
//     LastName: 'Bell',
//     id: 2348,
//     isPermitted: false
// }

// function showProps(obj){
//     const keyArray = [];
//     const valueArray = [];

//     for(let key in obj){
//         keyArray.push(key);
//         valueArray.push(obj[key]);
//     }

//     console.log(keyArray);
//     console.log(valueArray);
// }

// showProps(user);
// END_TASK_2

// TASK_3
// class Person{
//     constructor(name, surname){
//         this.firstName = name;
//         this.lastName = surname;
//     }

//     showFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Student extends Person{
//     constructor(name, surname, admissionYear) {
//         super(name, surname);
//         this.admissionYear = admissionYear;
        
//     }

//     showFullName(middleName) {
//         return `${this.lastName} ${this.firstName} ${middleName}`;
//     }

//     showCourse(){
//         let currentYear = new Date().getFullYear();
//         let course = currentYear - this.admissionYear;
//         if(course > 6){
//             return `Student already graduated`;
//         }

//         return course;
//       }
// }

// const stud1 = new Student("Petro", "Petrenko", 2020);
// console.log(stud1.showFullName("Petrovych")); 
// console.log("Current course: " + stud1.showCourse()); 
// END_TASK_3

// TASK_4
class Worker{
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get getExp(){
        return this.#experience;
    }
     set setExp(value){
         this.#experience = value;
    }

    showSalary(){
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
    }

    showSalaryWithExperience(){
        let salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} salary: ${salaryWithExperience}`);
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("Experience: " + worker1.getExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.getExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("Experience: " + worker2.getExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.getExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("Experience: " + worker3.getExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.getExp);
worker3.showSalaryWithExperience();

let worker4 = new Worker("Charlotte Bell", 48, 24);
console.log(worker4.fullName);
worker4.showSalary();
console.log("Experience: " + worker4.getExp);
worker4.showSalaryWithExperience();
worker4.setExp = 1.5;
console.log("New experience: " + worker4.getExp);
worker4.showSalaryWithExperience();


let worker5 = new Worker("Peter Bauer", 39, 25);
console.log(worker5.fullName);
worker5.showSalary();
console.log("Experience: " + worker5.getExp);
worker5.showSalaryWithExperience();
worker5.setExp = 1.5;
console.log("New experience: " + worker5.getExp);
worker5.showSalaryWithExperience();
