// TASK_1
// let newWindow = window.open("", "", "width=300,height=300");
// setTimeout(function(){
//     newWindow.resizeTo(500, 500);
// }, 2000)
// setTimeout(function(){
//     newWindow.moveTo(200, 200)
// }, 4000)
// setTimeout(function(){
//     newWindow.close()
// }, 6000)
// END_TASK_1

// TASK_2
// function changeCSS(){
//     let paragraph = document.getElementById("text");
//     paragraph.style.fontFamily = "Comic Sans MS";
//     paragraph.style.color = "orange";
//     paragraph.style.fontSize = "20";
// }
// END_TASK_2

// TASK_3
// let firstButton = document.getElementById("button1");
// firstButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue";
// })

// let secondButton = document.getElementById("button2");
// secondButton.addEventListener("dblclick", function(){
//     document.body.style.backgroundColor = "pink";
// })

// let thirdButton = document.getElementById("button3");
// thirdButton.addEventListener("mousedown", function(){
//     document.body.style.backgroundColor = "brown";
// })
// thirdButton.addEventListener("mouseup", function(){
//     document.body.style.backgroundColor = "white";
// })

// let link = document.querySelector("a");
// link.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = "yellow";
// })
// link.addEventListener("mouseout", function(){
//     document.body.style.backgroundColor = "white";
// })
// END_TASK_3

// TASK_4
// let dropdown = document.getElementById('names');
// let deletion = document.getElementById('delete');

// deletion.addEventListener("click", function(){
//     let choice = dropdown.options[dropdown.selectedIndex];
//     if (choice) {
//         dropdown.removeChild(choice);
//     }
// });
// END_TASK_4

// TASK_5
// let button = document.getElementById("button");
// let paragraph = document.getElementById("paragraph");

// button.addEventListener("click", function(){
//     paragraph.textContent = "I was pressed!";
// });

// button.addEventListener("mouseover", function(){
//     paragraph.textContent = "Mouse on me!";
// });

// button.addEventListener("mouseout", function(){
//     paragraph.textContent = "Mouse is not on me!";
// });
// END_TASK_5

// TASK_6
// let paragraph = document.getElementById("paragraph");
// window.addEventListener("resize", function(){
//     paragraph.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// });
// END_TASK_6

// TASK_7
// function onCountrySelectionChange(event){
//     const citiesMap = new Map([
//         ["ger", ["Berlin", "Hamburg", "Bremen", "Munich"]],
//         ["usa", ["New York", "Washington", "Boston", "Chicago"]],
//         ["ukr", ["Chernivtsi", "Lviv", "Kolomiya", "Rakhiv"]]]);
    
//     for(let i = citiesDropDown.options.length - 1; i >= 0; i--) {
//         citiesDropDown.remove(i);
//     }

//     const cities = citiesMap.get(event.target.value);
//     for(let i = 0; i < cities.length; i++){
//         var option = document.createElement('option');
//         option.text = cities[i];
//         option.value = i;
//         citiesDropDown.add(option, 0);
//     }

//     citiesDropDown.dispatchEvent(new Event("change"));
// }

// function onCitySelectionChange(event){
//     let paragraph = document.querySelector("p");
//     paragraph.textContent = `${countryDropDown.options[countryDropDown.selectedIndex].text}, ${citiesDropDown.options[citiesDropDown.selectedIndex].text}`
// }

// let countryDropDown = document.getElementById("country");
// countryDropDown.onchange = onCountrySelectionChange;

// let citiesDropDown = document.getElementById("cities");
// citiesDropDown.onchange = onCitySelectionChange;

// countryDropDown.dispatchEvent(new Event("change"));
// END_TASK_7

