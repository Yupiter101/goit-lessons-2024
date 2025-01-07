console.log("Hello canvas");

const canv = document.getElementById("canvas");
// console.log(myCanvas);

const ctx = canv.getContext("2d");
// canv.width = window.innerWidth;
// canv.height = window.innerHeight;
canv.width = 500;
canv.height = 300;

// ======= Малюєм квадрат ==========

ctx.fillStyle = "magenta";
ctx.fillRect(20, 10, 30, 20); // Coord, Lat, Lon

// ======= Move квадрат ==========
let x = 20;
setInterval(()=>{
    // ctx.fillStyle = "#e6ffc5";
    
    if(x === 20) {
        ctx.fillStyle = "magenta";
    }
    ctx.fillRect(x+=5, 40, 30, 20);

    
    if(x === 500) {
        ctx.fillStyle = "#e6ffc5";
        x=20;
    }
}, 30)