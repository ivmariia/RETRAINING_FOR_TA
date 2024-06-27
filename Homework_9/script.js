// TASK_1
// function getPromise(message, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// }

// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);
// });

// END_TASK_1

// TASK_2
// function calcArrProduct(arr){
//     return new Promise ((resolve, reject) => {
//         let product = 1;
//         for(let i = 0; i < arr.length; i++){
//             if(typeof arr[i] !== "number"){
//                 const error = new Error("Error! Incorrect array!");
//                 reject(error);
//             }

//             product *= arr[i] 
//         }

//         resolve(product);
//     })
// }

// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct( [5, "user2", 7, 12]).then(result => console.log(result));
// END_TASK_2

// TASK_3
// const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));

// function showNumbers () {
//     let promise = Promise.resolve();
//     for (let i = 0; i <= 10; i++) {
//         const randomDelay = Math.floor(Math.random() * 1000);
//         promise = promise.then(() => delay(i, randomDelay))
//                          .then(number => {
//                              console.log(number);
//                          });
//     }
// }

// showNumbers();
// END_TASK_3

// TASK_4
// const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));

// async function showNumbers ( ) {
// 	for (let i = 0; i <= 10; i++) {
//         const randomDelay = Math.floor(Math.random() * 1000);
//         await delay(i, randomDelay).then(result => {
//           console.log(result);
//         });
//       }
// }

// showNumbers();
// END_TASK_4