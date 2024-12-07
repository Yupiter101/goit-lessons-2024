"use strict"; // код в суворому режимі

console.log("It is import file");







// =V1=
// console.log("V1");
// export const my_A = 44;
// import my_A from '../js/admins.js'; 
// console.log(my_A);// Not work

// // =V2=
// console.log("V2");
// import asd from '../js/admins.js';
// console.log(asd);


// =V3=
// console.log("V3");
// const my_C = require("../js/admins.js");
// console.log(my_C);

// // V4
// console.log("V4");
// console.log("Дефолтний експорт: export default index");
// import myval from '../js/admins';
// console.log(myval.mult(5,4)); // 20
// console.log(myval.div(100,4)); // 25


// =V5=
// const mult = require("../js/admins");
// console.log(mult(5,4)); // 20



// V6
// const users = require("../js/admins");
// console.log(users);



// V7
// import { bookList_2 } from '../js/shopping_data';


import exp from './export.js';