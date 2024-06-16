// TASK_1
// const div1 = document.getElementById("test");
// const div2 = document.querySelector("div");

// div1.textContent = "Last";  
// div2.innerHTML = "Last";  
// END_TASK_1

// TASK_2
// function changeImage(){
//     let imageTag = document.querySelector("img.image");
//     imageTag.src ="cat.jpg";
//     alert(imageTag.src);
// }

// changeImage();
// END_TASK_2

// TASK_3
// const text = document.querySelectorAll("#text p");
// text.forEach(function(p, index) {
//     console.log("Selector text " + index + ": " + p.textContent);
// });
// END_TASK_3

// TASK_4
// let list = document.getElementById("list");
// alert(`${list.firstElementChild.textContent},${list.lastElementChild.textContent},${list.firstElementChild.nextElementSibling.textContent},${list.lastElementChild.previousElementSibling.textContent},${list.firstElementChild.nextElementSibling.nextElementSibling.textContent}`);
// alert(`${list.children[0].textContent},${list.children[4].textContent},${list.children[1].textContent},${list.children[3].textContent},${list.children[2].textContent}`);
// END_TASK_4

// TASK_5
// let header = document.querySelector("h1");
// header.style.backgroundColor = "lightgreen";

// let paragraph = document.getElementById("myDiv");
// paragraph.firstElementChild.style.fontWeight = "bold";
// paragraph.children[1].style.color = "red";
// paragraph.children[2].style.textDecoration = "underline";
// paragraph.lastElementChild.style.fontStyle = "italic";

// let list = document.getElementById("myList");
// let resultString = "";
// while (list.firstChild) {
//     resultString += list.firstChild.textContent;
//     list.removeChild(list.firstChild);
// }
// list.textContent = resultString.replace(/\s/g, "");;

// let span = document.querySelector("span");
// span.style.visibility = "hidden";
// END_TASK_5


// TASK_6
// let inputOne = document.getElementById("input1");
// inputOne.value = prompt("Please Enter some text:");

// let inputTwo = document.getElementById("input2");
// inputTwo.value = prompt("Please Enter some text:");

// [inputOne.value,inputTwo.value] = [inputTwo.value,inputOne.value];

// END_TASK_6

// TASK_7
let main = document.createElement("main")
main.className = " mainClass check item ";
document.body.prepend(main);

let myDiv = document.createElement("div")
myDiv.id = "myDiv";
main.prepend(myDiv);

let paragraph = document.createElement("p");
paragraph.innerHTML = "First paragraph"
myDiv.prepend(paragraph);
// END_TASK_7
