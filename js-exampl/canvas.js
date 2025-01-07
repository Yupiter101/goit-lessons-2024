console.log("Hello canvas");
import { randomColor } from "../js/admins.js";

const BG_COLOR = "#e6ffc5";
const DRAW_COLOR = "blue";

const canv = document.getElementById("canvas");
canv.style = `background-color: ${BG_COLOR}`;

const ctx = canv.getContext("2d");

// canv.width = window.innerWidth;
// canv.height = window.innerHeight;

canv.width = 500;
canv.height = 260;



// ======= Малюєм квадрат ==========

ctx.fillStyle = "magenta";
ctx.fillRect(20, 10, 30, 20); // Coord, Lat, Lon



// ======= Пустий квадрат ==========

ctx.strokeStyle = "red";
ctx.lineWidth = 4; 
ctx.strokeRect(60, 10, 30, 20); // Coord, Lat, Lon



// ======= Move квадрат ==========
let x = 0;
setInterval(()=>{
    if(x === canv.width) {
        x=0;
        ctx.fillStyle = randomColor();
    }
    ctx.fillRect(x, 40, 10, 20);
    x+=5;
}, 30)



// ======= transform ==========

// ctx.scale(1.5, 1.5);
// ctx.rotate(10 * Math.PI / 180);

// ======= scale ==========



// ======= Малюєм круг ========== 
ctx.beginPath();
// ctx.fillStyle = "green";
// ctx.fill;
ctx.arc(100, 100, 30, 0, Math.PI * 2) // 
ctx.fillStyle = "black";
ctx.fill();
// ctx.stroke();





// ======= Малюєм трикутник чи многокутник =============


ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(60, 140);
ctx.lineTo(30, 200);
ctx.lineTo(90, 200);
ctx.closePath();        // same
// ctx.lineTo(60, 140); // same
ctx.stroke();



// ======= Малюєм TEXT =============

ctx.fillStyle = "grey";
ctx.font = "32px Roboto";
ctx.fillText("Hello", 50, 240);


// ======= Тикаєм мишкою =============

canv.addEventListener("mousedown", (e)=> {
    // console.log(e);
    // console.log(e.clientY);
    ctx.beginPath();
    // ctx.arc(e.clientX, e.clientY, 20, 0, Math.PI * 2); // Для FullScreen
    ctx.arc(e.offsetX, e.offsetY, 15, 0, Math.PI * 2);
    ctx.fillStyle = randomColor();
    ctx.fill();
});



// ============== Canvas малювання ==========================//

const canvDrow = document.getElementById("canvas-draw");
canvDrow.style = `background-color: ${BG_COLOR}`;
const ctx_2 = canvDrow.getContext("2d");
let isMouseDown = false;
let drowWidth = 10;
let coordsArr = [];

let timerId = null;
let coordsIndex = 0;


canvDrow.width = 500;
canvDrow.height = 360;

ctx_2.fillStyle = DRAW_COLOR;
ctx_2.strokeStyle = DRAW_COLOR;

canvDrow.addEventListener("mousedown", ()=> isMouseDown = true);
canvDrow.addEventListener("mouseup", ()=> {
    isMouseDown = false;
    ctx_2.beginPath();
    coordsArr.push("up");
});

ctx_2.lineWidth = drowWidth;

canvDrow.addEventListener("mousemove", (e)=> {
    if(isMouseDown) {


        coordsArr.push([e.offsetX, e.offsetY]);

        ctx_2.lineTo(e.offsetX, e.offsetY);
        ctx_2.stroke();

        ctx_2.beginPath();
        ctx_2.arc(e.offsetX, e.offsetY, drowWidth/2, 0, Math.PI * 2);
        // ctx_2.fillStyle = "blue";
        ctx_2.fill();

        ctx_2.beginPath();
        ctx_2.moveTo(e.offsetX, e.offsetY);
    }
    
});


document.addEventListener("keydown", (e)=> {
   
    // S - save
    if(e.keyCode === 83) {
        console.log(coordsArr);
        localStorage.setItem("coords", JSON.stringify(coordsArr));
        console.log("Saved");

    }
    // R - replay
    if(e.keyCode === 82) {
        console.log("Replain");
        try{
            coordsArr = JSON.parse(localStorage.getItem("coords"));
            clearDraw();
            replayDraw();
        }
        catch{
            console.log("JSON.parse ERROR!!!");
        }
        

    }
    // C - clear
    if(e.keyCode === 67) {
        clearDraw();
        coordsIndex = 0;
    }
});

function clearDraw() {
    ctx_2.fillStyle = BG_COLOR;
    ctx_2.fillRect(0, 0, canvDrow.width, canvDrow.height);
    ctx_2.beginPath();
    ctx_2.fillStyle = DRAW_COLOR;
    console.log("Cleared");
}



function replayDraw() {
    timerId = setInterval( () => {
        if(!coordsArr.length || coordsIndex === coordsArr.length ) {
            clearInterval(timerId);
            ctx_2.beginPath();
            return;
        }

        const x = coordsArr[coordsIndex][0];
        const y = coordsArr[coordsIndex][1];
        coordsIndex += 1;

        ctx_2.lineTo(x, y);
        ctx_2.stroke();

        ctx_2.beginPath();
        ctx_2.arc(x, y, drowWidth/2, 0, Math.PI * 2);
        ctx_2.fill();

        ctx_2.beginPath();
        ctx_2.moveTo(x, y);

    }, 10);
}


