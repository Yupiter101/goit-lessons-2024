"use strict"; // код в суворому режимі


console.log("Hello from array.js");
console.log("Тема. Перебираючі методи масиву");

// === forEach ===
console.log("Метод arr.forEach(callback)");

const numbers = [5, 10, 15];
numbers.forEach(function (number, index) {
    console.log(`Index: ${index} Number:  ${number}`);
})

// === map ===
console.log(" ");
console.log("Метод arr.map(callback)");

const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
  ];


const names = students.map( student => student.name);
console.log(names);

// === flatMap ===
console.log(" ");
console.log("Метод arr.flatMap(callback)");

const students_2 = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
];

const allCourses = students_2.flatMap(student => student.courses);
console.log(allCourses);

// === filter ===
console.log(" ");
console.log("Метод arr.filter(callback)");

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
console.log("Метод arr.find(callback)");

const colorPickers = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
  ];

const colorBlue = colorPickers.find(color => color.label === "blue");
console.log(colorBlue);



