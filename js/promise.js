// "use-strict";
console.log("It is promise");
import { randomColor } from "../js/admins.js";


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