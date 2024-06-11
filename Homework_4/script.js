// TASK_1
function calcRectangleArea(width, height){
    if(typeof height !== "number" || typeof width !== "number"){
        throw new Error("Incorrect function parameter(s).");    
    }

    return height * width;
}

try{
    let area = calcRectangleArea(7, 6);
    console.log(area);
} catch(error){
    console.log(error.message);
}
// END_TASK_1

// TASK_2
// function checkAge(){
//     let userAge = parseInt(prompt("Please enter your age:"));
//     if(userAge === null){
//         throw new Error("The field is empty. Please enter your age.");
//     } else if(isNaN(userAge)){
//         throw new Error("The entered value is not a number");
//     } else if(userAge < 14){
//         throw new Error("You are too young");
//     }

//     alert("You are allowed to watch the movie");
// }

// try{
//     checkAge();
// } catch(error){
//     alert(error.name + ": " + error.message)
// }
// END_TASK_2

// TASK_3
// class MonthExeption extends Error{
//     constructor(message){
//         super(message);
//         this.name = "MonthExeption";
//     }
// }

// function showMonthName(month){
//     const monthArray = ["January", 
//                       "February", 
//                        "March", 
//                       "April", 
//                       "May", 
//                       "June", 
//                       "July", 
//                       "August", 
//                       "September", 
//                       "October", 
//                       "November", 
//                       "December"];

//     if(month < 1 ||  month > 12){
//         throw new MonthExeption("Incorrect month number");
//     }

//     return monthArray[month - 1];
// }

// try{
//     console.log(showMonthName(month = +prompt("Please enter a month number")));
// }catch(error){
//     console.log(error.name + " " + error.message);
// }
// END_TASK_3

// TASK_4
// function showUser(id){
//     if(id < 0){
//         throw new Error (`Id must not be negativ ${id}`);
//     }

//     return {id: id}
// }

// function showUsers(ids){
//     const userIdsArray = [];
//     for(let i = 0; i < ids.length; i++){
//         try{
//             userIdsArray.push(showUser(ids[i]));
//         }catch(error){
//             console.log(error.message);
//         }
//     }

//     return userIdsArray;
// }

// console.log(showUsers([12, 25, -5, 14]));
// END_TASK_4