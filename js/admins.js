// Тут я зберігаю різні корисні функції загального призначення


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
