// Тут я зберігаю різні корисні функції загального призначення


// Навчитися експортувати!!!!!!!!!!!!

// ======= Тут мої тести ========






// =V1=
// export const my_A = 44;


// // =V2=
// const my_B = 55;
// export default my_B;



// // =V3=
// const my_C = 66;
// module.exports = my_C;


// // V4
// function mult(a, b) {
//   return a*b;
// }

// function div(a, b) {
//   return a/b;
// }

// export default {mult, div};

// ==V5==
function mult(a, b) {
  return a*b;
}

// function div(a, b) {
//   return a/b;
// }

module.exports = mult;



// V6
// const admins = ["Andrey", "Yuri", "Sergey"];
// const clients = ["Anna", "Alina", "STamara"];

// const users = {
//     admins,
//     clients
// };

// module.exports = users;



















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