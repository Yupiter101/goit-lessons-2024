"use strict"; // код в суворому режимі
console.log("colorPalette");

// const _ = require('lodash'); // Це не треба і так працює

// const getRandomHexColor = requier("./admins.js");

const numOfBtn = 60; // 10-100

// ===== colorPalette ======
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output-events");

colorPalette.addEventListener("click", selectColor);


// This is where delegation «magic» happens
function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
  
    const selectedColor = event.target.dataset.color; // dataset.color = data-color
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}


// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < numOfBtn; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color; // (item.dataset.color = color)  === (data-color="#7E0D44")
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// ===== Scroll Throttle і Debounce =====

// ===== Просто Scroll  =====

const outputDisp = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  outputDisp.textContent = scrollEventCounter;
});

// ===== Throttle Scroll  =====

const outputDisp2 = document.querySelector(".output-throttle");
let scrollThrottleCounter = 0;

document.addEventListener("scroll",
  _.throttle(() => {
    scrollThrottleCounter += 1;
    outputDisp2.textContent = scrollThrottleCounter;
  }, 500)
);


// ===== Debounce Scroll  =====

const outputDisp3 = document.querySelector(".output-debounce");
let scrollDebounceCounter = 0;

document.addEventListener(
  "scroll",
  _.debounce(() => {
    scrollDebounceCounter += 1;
    outputDisp3.textContent = scrollDebounceCounter;
  }, 300)
);




// const result = _.add(2, 3);
// console.log(result); // 5

