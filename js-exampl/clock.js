console.log("Clock");

import {xx} from "../js/admins.js" //padStart(2, "0")

const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");

const arrowSecond = document.querySelector(".clock-seconds-arrow");
const arrowMin = document.querySelector(".clock-minutes-arrow");
const arrowHour = document.querySelector(".clock-hours-arrow");

// console.log(arrowSecond);

const digitalClock = document.querySelector(".digital-clock");

const arrMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопал", "Грудень" ];
const arrDay = ["нд", "пн", "вт", "ср", "чт", "пт", "сб"];


const clockId = setInterval(()=> {
    const currentTime = new Date();

    // == DATE ==
    const carrDay = arrDay[currentTime.getDay()];
    const carrDate = currentTime.getDate();
    const carrMonth = arrMonth[currentTime.getMonth()];
    const carrYear = currentTime.getFullYear();
    
    

    day.textContent = carrDay;
    date.textContent = carrDate;
    month.textContent = carrMonth;
    year.textContent = carrYear;


    // == TIME ==
    const carrHours = currentTime.getHours();
    const carrMin = currentTime.getMinutes();
    const carrSec = currentTime.getSeconds();

    const formatTime = `${carrHours} : ${xx(carrMin)} : ${xx(carrSec)}`;
    digitalClock.textContent = formatTime;

    arrowSecond.style = `transform: rotate(${carrSec*6}deg)`; 
    arrowMin.style.transform = `rotate(${carrMin*6}deg)`;
    arrowHour.style.transform = `rotate(${carrHours*30 + carrMin/2}deg)`;
}, 1000);


