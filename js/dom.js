console.log("Hello");

// === Example 1 "firstElementChild" ===
const result = document.querySelector(".my-result");
const myList = document.querySelector(".my-list");
const btnFirst = document.querySelector('button[data-action="first-child"]');
const btnLast = document.querySelector('button[data-action="last-child"]');

btnFirst.addEventListener("click", ()=> {
    myList.firstElementChild.style.fontWeight="700";
    myList.lastElementChild.style.fontWeight="400";
    result.textContent="firstElementChild";
    result.style.color="blue";
});

btnLast.addEventListener("click", ()=> {
    myList.firstElementChild.style.fontWeight="400";
    myList.lastElementChild.style.fontWeight="700";
    // result.style.fontSize = '24px';
    // result.style.backgroundColor="red";
    result.style.color="green";
    result.textContent="lastElementChild";
    
});



// === Example 2 "TITLE H2 textContent" ===

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

// === Example 3 "Text P textContent classList" ===

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


// === Example 4 "Change img size"  atribute ===

let step = 4; // Size
const btnCreateImg = document.querySelector('button[data-action="make-img"]');
const btnImgSize = document.querySelector('button[data-action="img"]');
const btnDelImg = document.querySelector('button[data-action="del-img"]');

const tumbImg = document.querySelector(".tumb-img-dom");
// const myImg = document.querySelector('img[alt="dc-dc"]');


function createImg () {
    const newImg = document.createElement("img");
    newImg.classList.add(".dc-img");
    newImg.alt="dc-dc";
    newImg.src="../img/dc_dc.jpg";
    btnCreateImg.disabled=true;
    btnImgSize.disabled=false;
    btnDelImg.disabled=false;

    tumbImg.append(newImg);
}

const changingSize = function () {
    const myImg = document.querySelector('img[alt="dc-dc"]');
    myImg.width=100*step;
    step +=1;
    if(step > 4) {
        step = 1;
    }
}

const removingImg = () => {
    const myImg = document.querySelector('img[alt="dc-dc"]');
    myImg.remove();
    btnImgSize.disabled=true;
    btnDelImg.disabled=true;

    btnImgSize.removeEventListener("click", changingSize);
    console.log("removeEventListener btnImgSize");
    btnDelImg.removeEventListener("click", removingImg);
    console.log("removeEventListener btnDelImg");
    btnCreateImg.removeEventListener("click", createImg);
    console.log("removeEventListener btnCreateImg");
}

btnCreateImg.addEventListener("click", createImg);
btnImgSize.addEventListener("click", changingSize);
btnDelImg.addEventListener("click", removingImg);





// === Example 5 "Render list" innerHTML ===

const technologies = [
    "querySelector", 
    "addEventListener", 
    "disabled=true", 
    "renderList.innerHTML", 
    "insertAdjacentHTML"
];

const renderList = document.querySelector(".list-dom");
const btnRender = document.querySelector('button[data-action="render-list"]');


btnRender.addEventListener("click", rendering);

function rendering () {
    const markup = technologies.map(technologi => `<li>${technologi}</li>`).join("");
    renderList.innerHTML = markup;
    btnRender.disabled=true;
}


// === Example 6 "Render list insertAdjacentHTML " ===

const methods = [ 
    "renderList.innerHTML", 
    "insertAdjacentHTML"
];

const renderListAdj = document.querySelector(".list-adj");
const btnAdj = document.querySelector('button[data-action="render-adj"]');


btnAdj.addEventListener("click", renderingAdj);

function renderingAdj () {
    const markup = methods.map(method => `<li>${method}</li>`).join("");
    renderListAdj.insertAdjacentHTML("beforeend", markup);
    // btnAdj.disabled=true;
}



// === Example 7 "Події клавіатури" ===

// Ex1
const printing = e => {
    // console.log("Keydown: ", e);
    console.log("code: ", e.code);
    console.log("key: ", e.key);
    console.log("type: ", e.type);
}

document.addEventListener("keydown", printing);
document.addEventListener("keyup", printing);

// Ex2

// document.addEventListener("keydown", event => {
//     event.preventDefault();
//     // if (event.ctrlKey ) {
//     //   console.log("«Ctrl»");
//     // }
//     if (event.ctrlKey && event.code === "KeyA") {
//         console.log("«Ctrl + a»");
//       }
//     // if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     //     console.log("«Ctrl + s» or «Command + s» combo");
//     //   }
//   });



// === Example 8 "Події елементів форм" ===
