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
// Sample input text
// Sample input text
// Sample input text
let text = "cdbBdbsbz";

// Regular expression to match the pattern
let regex = /d[bB]+(?:d)?/gi;

// Array to store matched results
let matches = text.match(regex);

// Output the result
console.log(matches); // ["dbBd", "bB", "d"]
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

// function checkLogin(input) {
//     // Regular expression to find numbers (including floating-point numbers)
//     const numberRegex = /\b\d+(\.\d+)?\b/g;

//     // Regular expression to validate login format (starts with a letter, contains only letters and digits)
//     const loginRegex = /[a-zA-Z][a-zA-Z0-9]{1,9}/g;

//     // Find all occurrences of valid logins in the input
//     const validLogins = input.match(loginRegex);

//     if (!validLogins) {
//         return false; // No valid logins found
//     }

//     // Array to store all numbers found
//     let numbers = [];

//     // Iterate through each valid login and find numbers in it
//     validLogins.forEach(login => {
//         const foundNumbers = login.match(numberRegex);
//         if (foundNumbers) {
//             numbers = [...numbers, ...foundNumbers];
//         }
//     });

//     // Return true (valid) and the found numbers, or just true if no numbers found
//     return { isValid: true, numbers: numbers.length > 0 ? numbers : [] };
// }

// // Example usage:
// console.log(checkLogin(' ee 1.1 ret 3')); // { isValid: true, numbers: ['1.1', '3'] }
// console.log(checkLogin(' ee 1*1 ret 3')); // false

