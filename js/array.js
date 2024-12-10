"use strict"; // код в суворому режимі
// js doka - 2:45 Видео Рисіча 4_2

console.log("Hello from array.js");
console.log("Тема. Перебираючі методи масиву");

// === forEach ===
console.log("Метод forEach()");

const numbers = [5, 10, 15];
numbers.forEach(function (number, index) {
    console.log(`Index: ${index} Number:  ${number}`);
})

// === map ===
console.log(" ");
console.log("Метод map()");

const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
  ];


const names = students.map( student => student.name);
console.log(names);

// === flatMap ===
console.log(" ");
console.log("Метод flatMap()");

const students_2 = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
];

const allCourses = students_2.flatMap(student => student.courses);
console.log(allCourses);

// === filter ===
console.log(" ");
console.log("Метод filter()");

const values_2 = [51, -3, 27, 21, -68];
const positivVal = values_2.filter(val => val > 0);
console.log(positivVal);
console.log(`positivVal ${positivVal}`);

// === filter унікальних елементів ===
console.log(" ");
console.log("filter унікальних елементів");
const courses = ['мат', 'фіз', 'інф', 'мат', 'фіз', 'біо'];

const uniqueCourses = courses.filter(
    (course, index, array) => array.indexOf(course) === index );
console.log(uniqueCourses);


// === filter Фільтрація масиву об'єктів ===
console.log(" ");
console.log("Фільтрація масиву об'єктів");

const students_3 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 49 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const best_studs = students_3.filter( stud => stud.score > 50);
console.log(best_studs);


// === find ===
console.log(" ");
console.log("Метод find()");

const colorPickers = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
  ];

const colorBlue = colorPickers.find(color => color.label === "blue");
console.log(colorBlue);

// === every / some ===
console.log(" ");
console.log("Метод every / some");

const fruits = [
    { name: "apples", amount: 100 },
    { name: "bananas", amount: 0 },
    { name: "grapes", amount: 50 },
];

const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
console.log(`Every = ${allAvailable}`);
console.log(`Some = ${anyAvailable}`);


// === reduce ===
console.log(" ");
console.log("Метод reduce()");

const arr_2 = [2, 7, 3, 14, 6];
console.log(arr_2);

const total_3 = arr_2.reduce((acum, number) => {
    return acum + number;
}, 0);
console.log(total_3);


// reduce Необхідно отримати середній бал
const students_4 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 60 },
    { name: "Ківі", score: 34 },
    { name: "Х'юстон", score: 64 },
  ];

const totalScore = students_4.reduce((acum, student)=> {
    return acum + student.score;
}, 0);
const averScore = totalScore / students_4.length;
console.log(totalScore);
console.log(averScore);

// reduce необхідно порахувати суму усіх лайків
console.log("порахувати суму лайків");

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
];

const allLikes = tweets.reduce((acum, tweet) => acum + tweet.likes, 0);
console.log(allLikes);

// reduce напишемо функцію
const countLikes = tweets => {
    return tweets.reduce((acum, tweet) => acum + tweet.likes, 0);
};

console.log(countLikes(tweets)); //32

//
const tags = tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);

// console.log(tags);

// === reduce напишемо функцію
const getTags = arrays => {
  return arrays.reduce((allTags, tweet)=> {
          allTags.push(...tweet.tags); 
          return allTags;  
    }, []);
}


console.log(getTags(tweets));




// === sort Сортування об'єктів sort

console.log(" ");
console.log("Метод sort()");

const students5 = [
  { name: "Маго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

    // === sort За зростанням score ===
const inAscendingScoreOrder = students5.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

    // === sort За спаданням score ===
// const inDescendingScoreOrder = students5.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

  // === sort За імям ===
// const inAlphabeticalOrder = students5.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);








// ====================================================

// Додати іконку: win+:
console.log("КОлбеки та Методи обєктів");
// const user100 = {
//     name100: "Serg",
//     say1() {
//         console.log(`Hello ${this.name100}`);
//     },
//     say2: ()=>{
//         console.log(`Hello ${this.name100}`);
//     }
// }

// user100.say1();
// user100.say2();



// Задача 1
// Передать обект в фу та колбек. Додати ід та законсолити.

const prod1 = {
    name: "apple",
    prise: 5,
    quantity: 3,
}

function createProd (obj, callback) {
    const prod = {
        id: Date.now(),
        ...obj,
    }
    callback(prod);
}


function logProd (pro) {
    console.log(pro);
}

function totalProd ({ prise, quantity }) {
    const tota = prise * quantity;
    console.log(tota);
}

createProd(prod1, logProd);
createProd(prod1, totalProd);

console.log("Задача deposit withdrow");
// Задача 2 
/*
    Додати в оєкт account методи withdrow (amount, onSuccess, onError) 
    Першй парам це сума друг та трет це колбеки

    Метод withdrow викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance 
    і onSuccess в іншому випадку

    Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше дорівнює 0
    і onSuccess в іншому випадку
*/

const TRANSACTION_LIMIT = 1000;


const account = {
    ussername: "Jaco",
    ballance: 1100,
    withdrow(sum, callback1, callback2) {
        if(sum > this.ballance || sum > TRANSACTION_LIMIT) {
            callback2("Not inaf");
            return;
        }
        this.ballance -= sum;
        callback1("Good 👌");   // Додати іконку: win+:
    }
}




function handleSuccess (message) {
    console.log(`Success ${message}`);
}

function handleError (message) {
    console.log(`Error ${message}`);
}



// account.withdrow(900, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);


console.log("Задача3 map");
// Задача 3 .map. 
// Така само довжина!
//  непарні числа

// const arr = [1,2,3,4,5,6,7];
// const resmap = arr.map((val)=> val%2);
// console.log(resmap);

// // V1
// const arr = [1,2,3,4,5,6,7];
// const resmap = arr.map((val)=> {
//     if(!(val%2)) {
//         return val * 10;
//     }
//     return val;
// });
// console.log(resmap);

// V2
const arr = [1,2,3,4,5,6,7];
const resmap = arr.map((val)=> val%2 ? val * 10 : val );
console.log(resmap);


console.log("Задача4 indexOf findIndex ");
// Задача 4 indexOf()-для простих or .findIndex()-для обєктів
const arr2 = [1,2,3,4,5,6,7];
const resInd = arr2.indexOf(5); // 4
console.log(resInd);

const arr3 = [{
        name: "Use1",
        skills: ["css", "html"],
    },
    {
        name: "Use1",
        skills: ["node", "html"],
    },
    {
        name: "Use2",
        skills: ["node", "ddd"],
    }
]
const resFaInd = arr3.findIndex(item => item.skills.includes("node"));
console.log(resFaInd); // index 1 or -1


console.log("Задача5 filter");
// Задача 5 filter()
const arr4 = [1,2,3,4,5,6,7];
const resFilt = arr4.filter(item => !(item%2));
console.log(resFilt);


// ===================================================

// Приклади:
// .map Нехай ф getModels повертає масив моделей

const cars = [
  { make: "honda", model: "C-RV", amount: 14, price: 24050, type: "sub" },
  { make: "mazda", model: "CX-9", amount: 10, price: 20050, type: "sed" },
  { make: "ford", model: "F-150", amount: 5, price: 14050, type: "sed" },
  { make: "honda", model: "C-RV", amount: 8, price: 4050, type: "sub" },
  { make: "mazda", model: "CX-7", amount: 2, price: 34050, type: "sed" },
]

// V1 .map - масив моделей
console.log("map - масив моделей");
const getModels = (arr) => {
  return arr.map( item => item.model );
}
console.log(getModels(cars));


// V2 .map - масив обєктів
console.log("map - масив обєктів discaunt");
const makeDiscount = (arr, discaunt) => {
    return arr.map( item => ({
      ...item,
      price: item.price * (1-discaunt),
    }))
}

console.table(makeDiscount(cars, 0.2));


// V3 .filter - масив обєктів
console.log("filter - масив обєктів");
const filtPrice = (arr, lim) => {
    return arr.filter(({price})=> price < lim);
}

console.table(filtPrice(cars, 20100));

// V4 .filter2 - масив обєктів
console.log("filter2 - масив обєктів");
const filtType = (arr, type) => arr.filter(({ type: carType }) => carType === type);

console.table(filtType(cars, "sub"));


// V5 .sort - масив обєктів
console.log("Сортування з розпиленням");
const sortByPriceq = arr => [...arr].sort((a,b) => a.price - b.price);
console.table(sortByPriceq(cars));

console.table(cars);


// // V6 .reduce - масив обєктів
// const amountCars = arr => arr.reduce((acc, car)=>{
//   return acc += car.amount;
// }, 0);
// console.log(amountCars(cars));

// V6.1 .reduce - масив обєктів same
const amountCars = arr => arr.reduce((acc, car)=> acc += car.amount, 0);
console.log(amountCars(cars));



const strr = "qwewerqweweeer";
// Task:
// {
//   e: 3,
//   g: 5,
//   ...
// }
console.log(`Start ${strr}`);
const result = strr.split('').reduce((acc, item)=> {
  // V1
  // acc.hasOwnProperty(item) ? acc[item]+=1 : acc[item] = 1;
  // V2
  // item in acc ? acc[item]+=1 : acc[item] = 1;
  // V3
  const keys = Object.keys(acc);
  keys.includes(item) ? acc[item]+=1 : acc[item] = 1;
  return acc;
}, {});
console.log("Result"); console.log(result);


