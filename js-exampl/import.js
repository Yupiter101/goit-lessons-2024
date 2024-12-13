// "use strict"; // код в суворому режимі

console.log("It is import file");


// =V1= It works (<script src="./#" type="module"></script>)
console.log("V1 - export const | from  - працює");
import {my_A, my_A1} from './export.js'; 
console.log(my_A);// 44
console.log(my_A1);// 45


// =V2= It works (<script src="./#" type="module"></script>)
console.log("V2 - export default - працює");
// import asd from './export.js';
// console.log(asd);


// =V3= не працює
console.log("V3 - module.exports - Не працює");
// const my_C = require("./export.js");
// console.log(my_C);


