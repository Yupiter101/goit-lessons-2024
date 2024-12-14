// "use-strict";
console.log("It is promise");
import { randomColor } from "../js/admins.js";

// console.time("test async");

// ===== setTimeout() ===============

const btnTimout = document.querySelector(".btn-timout");
const field = document.querySelector(".field");


const onClick = () => {
    const timerId = setTimeout(()=> {
        // console.log("set color in 500ms");
        const newColor = randomColor();
        console.log(`New color: ${newColor}`);
        field.style.backgroundColor = newColor;   
    }, 500)
}


btnTimout.addEventListener("click", onClick);

// console.timeEnd("test async"); // test async: 0.44287109375 ms

// ===== setInterval() ===============

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const result = document.querySelector(".interval-res");

let timerId2 = null;
let counterTime = 0;

const onStart = () => {
    console.log("Start");
    timerId2 = setInterval(()=> {
        counterTime += 1;
        result.textContent = counterTime;
    }, 100);
}
startBtn.addEventListener("click", onStart );


const onStop = () => {
    clearInterval(timerId2); //
    console.log("Stop");
}
stopBtn.addEventListener("click", onStop );


// ========= Рисіч ==============


// console.time("test async");
// console.timeEnd("test async"); // test async: 0.44287109375 ms

// console.log("Start");
// console.time("test async"); 

// setTimeout(()=>{
//     console.log("Hello");
//     console.timeEnd("test async");
// }, 1000);

// console.log("Finish");



// ========= Рисіч Date() ==============
console.log("Дата та час");
const nameOfMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопал", "Грудень" ];

const myDate = new Date();
console.log(`new Date(): ${myDate}`);
const currentDate = Date.now();
console.log(`Date.now(): ${currentDate}`);

console.log(`Month: ${nameOfMonth[myDate.getMonth()]}`);


// ==== Реклама 10 с ====

const adverTimer = document.querySelector(".js-timer");
const advertisen = document.querySelector(".advertisen");


let advenCounter = 10; //s
let timerId4 = null;

setTimeout(()=>{
    timerId4 = setInterval(adverRend, 1000);
    advertisen.style = "display: block";
}, 3000);

function adverRend () {
    if(!advenCounter) {
        clearInterval(timerId4);
        advertisen.style = "display: none";
    }
    console.log(advenCounter);
    adverTimer.textContent = advenCounter;
    advenCounter -= 1;
}