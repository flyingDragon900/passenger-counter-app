// document.getElementById("count-el").innerText = 8;

let count = 0;
console.log(count);

let myAge = 18;
console.log(myAge);

let dogYear = 7;

dogYear = myAge * dogYear;
console.log(dogYear);

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 100;
console.log(bonusPoints);

bonusPoints = bonusPoints - 25;
console.log(bonusPoints);

bonusPoints = bonusPoints + 70;
console.log(bonusPoints);

// TESTING BUTTON
// function increment() {
//     console.log('The button was clicked');
// }

// COUNTDOWN
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()
// Go
// Players are running the race
// race is finished
// start again!!
countdown()
// PRACTICE 01
// Create a function (o have to decide the name of function) that logs out the name 42 to the console
// call/invoke the function
function num() {
    console.log(42);
}
num()

// PRACTICE 02
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLap() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}
// console.log(totalTime);
totalLap();

// PRACTICE 03
let lapsCompleted = 0;

// create a function that increments the lapsCopmleted variables with one
// Run it three times
function increments(){
    lapsCompleted = lapsCompleted + 1;
}
increments()
increments()
increments()

console.log(lapsCompleted);

// PRACTICE 04
let countEl = document.getElementById("count-el");
let btnCount = 0;

function add(){
    // btnCount = btnCount + 1;
    // console.log(btnCount);
    countEl.innerText = btnCount++
}
add()

// LESSION 15 - DOM
// 1. Creare a function, save() which logs out the count when it is called
// let numCount = countEl.innerText;
function save(){
    console.log(countEl.innerText);
    alert("Your count has been successfully saved!! " + countEl.innerText)
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += countEl.innerText + " - ";
    countEl.textContent=0;
    btnCount = 0;

}

// LESSION 16 - strings
var message = "You have three new notification";

// PRACTICE 04
let messageToUser = "We have logged";
console.log(messageToUser);  

// PRACTICE 05
// let name = "Rahul";
// let greeting = "Hi my name is";
// let myGreeting = greeting + ", " + name;

// console.log(myGreeting);

// prompt("What is your name?")
// console.log(prompt.innerText);
// let name = prompt.innerText;
// PRACTICE 06
let welcomeEl = document.getElementById("welcome-el");

let name = "Rahul";
let greeting = "hello! welcome back";
let myGreeting = greeting + ", " + name;

welcomeEl.innerText = myGreeting;

// HOW TO ADD EXTRA TEXTc
// Add an emoji to the end
// HINT: count = count + 1

// welcomeEl.innerText = welcomeEl.innerText + " emoji"
welcomeEl.innerText += " emoji"

// let numCount = countEl.innerText;
// function countSave(){
//     let saveEl = document.getElementById("save-el");
//     saveEl.innerText = numCount + "-";

// }