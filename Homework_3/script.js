// TASK_1
// const elementsAray = [2,3,4,5];
// let product = 1;
// for(let i = 0; i < elementsAray.length; i++){
//     product *= elementsAray[i];
// }
// console.log(product);

// product = 1;
// let i = 0;
// while (i < elementsAray.length){
//     product *=elementsAray[i];
//     i++;
// }
// console.log(product);
// END_TASK_1

// TASK_2
// for(let i = 0; i <= 15; i++){
//     if(i % 2 === 0){
//         alert(`${i} is even`);
//     } else{
//         alert(`${i} is odd`);
//     }
// }
// END_TASK_2

// TASK_3
// function getRandomInt (min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function randArray(k){
//     const array = [];
//     for(let i = 0; i < k; i++){
//         array.push(getRandomInt(1, 500));
//     }

//     return array;
// }

// console.log(randArray(5));
// END_TASK_3

// TASK_4
// function raiseToDegree(a, b){
//     return Math.pow(a, b);
// }

// let a = Number(prompt("Please enter a number."));
// let b = Number(prompt("Please enter a number."));

// console.log(raiseToDegree(a,b));
// END_TASK_4

// TASK_5
// function findMin(){
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//
//     return min;
// }

// console.log(findMin(4, -4, 5, 2, 3));
// END_TASK_5

// TASK_6
// function findUnique(){
//     for (let i = 0; i < arguments.length; i++) {
//         for (let j = i + 1; j < arguments.length; j++){
//             if (arguments[i] === arguments[j]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// console.log(findUnique(1, 2, 5, 5, 7, 8));
// END_TASK_6

// TASK_7
// function lastElem(array, x = 1){
//     return array.length <= x ? array : array.slice(array.length - x);
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));
// END_TASK_7

// TASK_8
// function stringToUpperCase(str){
//     let isWhiteSpaceFound = true
//     let outputStr = "";
//     for(let char of str){
//         if(char === " "){
//             isWhiteSpaceFound = true;
//         } else if (isWhiteSpaceFound){
//             char = char.toUpperCase();
//             isWhiteSpaceFound = false;
//         } 

//         outputStr += char;
//     }

//     return outputStr;
// }
// console.log(stringToUpperCase("i love java script"));
// END_TASK_8