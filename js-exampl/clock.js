console.log("Clock");

import {xx} from "../js/admins.js" //padStart(2, "0")

const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");

const digitalClock = document.querySelector(".digital-clock");

const arrMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопал", "Грудень" ];
const arrDay = ["нд", "пн", "вт", "ср", "чт", "пт", "сб"];


const clockId = setInterval(()=> {
    const currentTime = new Date();

    // == DATE ==
    const carrDay = arrDay[currentTime.getDay()];
    day.textContent = carrDay;

    const carrDate = currentTime.getDate();
    date.textContent = carrDate;

    const carrMonth = arrMonth[currentTime.getMonth()];
    month.textContent = carrMonth;

    const carrYear = currentTime.getFullYear();
    year.textContent = carrYear;

    // == TIME ==
    const carrHours = currentTime.getHours();
    const carrMin = currentTime.getMinutes();
    const carrSec = currentTime.getSeconds();

    const formatTime = `${carrHours} : ${xx(carrMin)} : ${xx(carrSec)}`;
    digitalClock.textContent = formatTime;
}, 1000);


