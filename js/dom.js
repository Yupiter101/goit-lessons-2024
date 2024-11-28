console.log("Hello");

// === Example 1 "TITLE H2" ===
const result = document.querySelector(".my-result");
const myList = document.querySelector(".my-list");
const btnFirst = document.querySelector('button[data-action="first-child"]');
const btnLast = document.querySelector('button[data-action="last-child"]');

btnFirst.addEventListener("click", ()=> {
    result.textContent=`Created by ${myList.firstElementChild.textContent}`;
    result.style.color="blue";
});

btnLast.addEventListener("click", ()=> {
    // result.style.fontSize = '24px';
    // result.style.backgroundColor="red";
    result.style.color="green";
    result.textContent=`Made by ${myList.lastElementChild.textContent}`;
    
});



// === Example 2 "TITLE H2" ===

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

// === Example 3 "Text P" ===

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


// === Example 4 "Change img size" ===

let step = 4;
const btnImgSize = document.querySelector('button[data-action="img"]');
const myImg = document.querySelector('img[alt="dc-dc"]');


const changingSize = function () {
    
    // myImg.width="100"; // Ok
    myImg.width=100*step;
    step +=1;
    if(step > 4) {
        step = 1;
    }
}

btnImgSize.addEventListener("click", changingSize);




// === Example 5 "Render list" ===