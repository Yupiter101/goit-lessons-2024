"use strict"; // код в суворому режимі


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


// === Фільтрація масиву об'єктів ===
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


// Необхідно отримати середній бал
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

// необхідно порахувати суму усіх лайків
console.log("порахувати суму лайків");

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
];

const allLikes = tweets.reduce((acum, tweet) => acum + tweet.likes, 0);
console.log(allLikes);

// напишемо функцію
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

// === напишемо функцію
const getTags = arrays => {
  return arrays.reduce((allTags, tweet)=> {
          allTags.push(...tweet.tags); 
          return allTags;  
    }, []);
}


console.log(getTags(tweets));

// === Сортування об'єктів sort
console.log(" ");
console.log("Метод sort()");

const students5 = [
  { name: "Маго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

    // === За зростанням score ===
const inAscendingScoreOrder = students5.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

    // === За спаданням score ===
// const inDescendingScoreOrder = students5.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

  // === За імям ===
// const inAlphabeticalOrder = students5.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);


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