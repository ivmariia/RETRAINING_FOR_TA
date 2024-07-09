// TASK_1
// function upperCase(str) {
//     const regex = /^[A-Z]/;
//     const result = regex.test(str);
//     if (result == true){
//         console.log("String starts with uppercase character")
//     } else{
//         console.log("String's not starts with uppercase character")
//     }
// }

// upperCase('regexp');
// upperCase('RegExp');
// END_TASK_1

// TASK2
// function checkEmail(email) {
//     const trimmedEmail = email.trim();
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     console.log(regex.test(trimmedEmail));
// }

// checkEmail ("Qmail2@gmail.com "); 
// END_TASK_2

// TASK_3
// const myRe = /d(b+)(d)/i;
// const myArray = myRe.exec("cdbBdbsbz");
// console.log(myArray);
// END_TASK_3

// TASK_4
// let text = "Java Script";
// let pattern = /(Java)\s+(Script)/;
// let replacement = '$2 $1';
// let output = text.replace(pattern, replacement);

// console.log(output);
// END_TASK_4

// TASK_5
// function validateCardNumber(cardNumber) {
//     const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     if (cardPattern.test(cardNumber)) {
//         console.log("Card number is valid!");
//     } else {
//         console.log("Card number is not valid!");
//     }
// }

// validateCardNumber("9999-9999-9999-9999");
// validateCardNumber("9999b-9999-9999-9999");
// END_TASK_5

// TASK_6
// function checkEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
//     if (!emailPattern.test(email)) {
//         console.log("Email is not correct!");
//         return;
//     }
    
//     const [localPart] = email.split('@');
//     if (/^[_.-]/.test(localPart) || /--/.test(localPart)) {
//         console.log("Email is not correct!");
//         return;
//     }

//     console.log("Email is correct!");
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');
// END_TASK_6

// TASK_7
// function checkLogin(s) {
//     let trimmedString = s.replace(/\s/g, '');
//     const pattern = /^(?=.{2,10}$)[a-zA-Z][a-zA-Z0-9.]*$/
//     return pattern.test(trimmedString);
// }

// function findNumbers(s) {
//     return s.match(/\d+\.*\d*/g);
// }

// function processLogin(s) {
//     console.log(checkLogin(s));

//     let numbers = findNumbers(s);
//     if (numbers.length > 0) {
//         console.log(numbers.join(', '));
//     }
// }

// processLogin(' ee 1.1 ret 3');
// processLogin(' ee 1*1 ret 3');
// END_TASK_7
