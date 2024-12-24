// Тут я нотую різні плюшки

// глибока Деструктуризація

const { 
    date, 
    day: { avgtemp_c, condition: {icon, text} }
} = data.forecast.forecastday;


// Прибирає пробіли спочатку та в кінці
const word = " serg ";
let value = word.trim();

