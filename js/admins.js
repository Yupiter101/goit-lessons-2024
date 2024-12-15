// Тут я зберігаю різні корисні функції загального призначення

// console.dir(".container"); // Відкриє обєкт
// console.table({});
// console.time("test async");
// console.timeEnd("test async"); // test async: 0.44287109375 ms



// .padStart(2, "0")  padEnd(2, "0") - Привести до рядка
// const formatTime = `${carrHours} : ${carrMin.toString().padStart(2, "0")} : ${carrSec.toString().padStart(2, "0")}`;

export function xx (num) {
  return num.toString().padStart(2, "0");
}


// ======= Random (from - to) =======

export function randomNumber (x, y) {
  // return Math.round(Math.random() * (10 - 1) + 1);
  return Math.round(Math.random() * (y - x) + x);
}


// ======= RandomHexColor =======

export function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  
 }
 
 // ======= RandomHexColor-2 =======

export function randomColor2() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
