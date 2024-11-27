console.log("Hello");

// === Example 1 "TITLE H2" ===

const titleText = "Made new title by button. Push dell button";
const titleDom = document.querySelector(".title-dom");

const addTitleBtn = document.querySelector('button[data-action="add-title"]');
const dellTitleBtn = document.querySelector('button[data-action="dell-title"]');

// dellTitleBtn.addEventListener("click", ()=> titleDom.textContent = "");
dellTitleBtn.addEventListener("click", dellTitle);
addTitleBtn.addEventListener("click", rendingTitle);

function rendingTitle () {
    titleDom.textContent = titleText;
    addTitleBtn.disabled=true;
    dellTitleBtn.disabled=false;
}

function dellTitle () {
    titleDom.textContent = "";
    addTitleBtn.disabled=false;
    dellTitleBtn.disabled=true;
}

// === Example 2 "Text P" ===
const textText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolores natus laudantium officiis aliquid tenetur facilis inventore vero reiciendis corporis?"; 
const textDom = document.querySelector(".text-dom");


const textBtn = document.querySelector('button[data-action="text"]');
textBtn.textContent = "Add text";

let dellText = false;
const togglingText = () => {
    if(dellText) {
        dellText = false;
        textDom.textContent = "";
        textBtn.textContent = "Add text";
        textBtn.classList.remove("bg-red");

    }
    else {
        dellText = true;
        textDom.textContent = textText;
        textBtn.textContent = "Dell text";
        textBtn.classList.add("bg-red");
    }

    
}

textBtn.addEventListener("click", togglingText );