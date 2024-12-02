// Тут я зберігаю різні корисні функції загального призначення




// Навчитися експортувати!!!!!!!!!!!!




// ======= RandomHexColor =======

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  
 }
 
 function getRandomHexColor2() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const myFunc = {
//     getRandomHexColor,
// }

// module.exports = myFunc; Не працює


// module.exports = getRandomHexColor; Не працює