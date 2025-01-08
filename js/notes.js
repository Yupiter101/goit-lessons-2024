// Тут я нотую різні плюшки

// глибока Деструктуризація

const { 
    date, 
    day: { avgtemp_c, condition: {icon, text} }
} = data.forecast.forecastday;


// Прибирає пробіли спочатку та в кінці
const word = " serg ";
let value = word.trim();


// Як через JS додати багато стилів
// element.style.cssText = `
//     background-color: ${BG_COLOR};
//     background-image: url("../../img-game/background_image.png");
//     background-position: center;
//     background-size: contain;
// `;
