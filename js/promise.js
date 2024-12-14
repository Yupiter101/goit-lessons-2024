// "use-strict";
console.log("It is promise");
import { randomColor } from "../js/admins.js";



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



// ===== setInterval() ===============

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const result = document.querySelector(".interval-res");

let timerId = null;
let counterTime = 0;

const onStart = () => {
    console.log("Start");
    timerId = setInterval(()=> {
        counterTime += 1;
        result.textContent = counterTime;
    }, 100);
}
startBtn.addEventListener("click", onStart );


const onStop = () => {
    clearInterval(timerId); //
    console.log("Stop");
}
stopBtn.addEventListener("click", onStop );