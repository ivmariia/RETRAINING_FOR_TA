// TASK_1
// let x = 1;
// let y = 2;

// let res1 = String(x) + y;// Add the code, it is necessary to use the variables x and y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);// Add code is required use variables x and y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = y > x;// Add code is required use variables x and y
// console.log(res3); // true
// console.log(typeof res3); // " boolean "

// let res4 = Math.sqrt(x - y); // Add code is required use variables x and y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"  
// END_TASK_1

// TASK_2
// let m = prompt("Please enter a number");
// if ((m > 0) && ((m % 7) === 0)){
//     console.log(`The number ${m} is correct`);
// } else {
//     console.log(`The number ${m} is incorrect`);
// }
// END_TASK_2

// TASK_3
// const elementsArray = [];

// elementsArray.push(12);
// elementsArray.push("Line in the array");
// elementsArray.push(true);
// elementsArray.push(null);

// alert(elementsArray.length);

// elementsArray.push(prompt("Please enter any value:"));
// alert(elementsArray[4]);

// elementsArray.shift();
// alert(elementsArray);
// END_TASK_3

// TASK_4
// let cities = [" Rome ", " Lviv ", " Warsaw "]; 
// let citiesStr = "";
// cities.forEach(function(city, index){citiesStr += (index === 0) ? city : "*" + city;});
// console.log(citiesStr);
// END_TASK_4

// TASK_5
// const MAJORITY_AGE = 18;
// let isAdult = prompt("How old are you?") >= MAJORITY_AGE;
// if(isAdult){
//     alert("You have reached the age of majority");
// } else {
//     alert("You are still too young");
// }
// END_TASK_5

// TASK_6
// let a = parseInt(prompt("Please enter first side of the triangle"));
// let b = parseInt(prompt("Please enter second side of the triangle"));
// let c = parseInt(prompt("Please enter third side of the triangle"));

// if(isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//     alert( "The entered data is incorrect.");
// } else {
//     const s = (a + b + c) / 2;
//     let S = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
//     console.log(S.toFixed(3));

//     let isTriangleRight = false;
//     if(a > b && a > c) {
//         [c, a] = [a, c];
//     } else if(b > c && b > a) {
//         [c, b] = [b, c];
//     } 

//     if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)){
//         console.log("The triangle is right");
//     } else {
//         console.log("The triangle is not right");
//     } 
// }
// END_TASK_6

// TASK_7
// let dateNow = new Date();
// let hoursNow = dateNow.getHours();

// if(hoursNow >= 23 && hoursNow < 5) {
//     alert("Good night");
// } else if(hoursNow >=5 && hoursNow < 11) {
//     alert("Good morning");
// } else if(hoursNow >= 11 && hoursNow < 17){
//     alert("Good day");
// } else if(hoursNow >= 17 && hoursNow < 23){
//     alert("Good evening");
// } else{
//     alert("Date is incorrect");
// }

// switch(true){
//     case (hoursNow >= 23 && hoursNow < 5):
//         alert("Good night");
//         break;
//     case (hoursNow >=5 && hoursNow < 11):
//         alert("Good morning");
//         break;
//     case (hoursNow >= 11 && hoursNow < 17):
//         alert("Good day");
//         break;
//     case (hoursNow >= 17 && hoursNow < 23):
//         alert("Good evening");
//         break;
//     default:
//         alert("Date is incorrect");
// }
// END_TASK_7