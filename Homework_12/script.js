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

const text = " cdbBdbsbz ";
const regex = /d[bB]+(?:d|$)/g;
const matches = text.match(regex) || [];
console.log(matches);


// END_TASK_3