// function getGreetingMsg(username){
//     let dateNow = new Date();
//     let hoursNow = dateNow.getHours();
//     let greeting = "";

//     if(hoursNow >= 23 && hoursNow < 5) {
//         greeting = "Good night";
//     } else if(hoursNow >=5 && hoursNow < 11) {
//         greeting = "Good morning";
//     } else if(hoursNow >= 11 && hoursNow < 17){
//         greeting = "Good day";
//     } else if(hoursNow >= 17 && hoursNow < 23){
//         greeting = "Good evening";
//     } else{
//         greeting = "Date is incorrect";
//     }

//     return `${greeting}, ${username}!`
// }

// module.exports = {
//     getGreetingMsg
// };