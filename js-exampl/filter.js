console.log("Filter");

const dataForSearch = [
    { name: "toster", descr: "Lorem1"},
    { name: "vicrow", descr: "Lorem2"},
    { name: "vesdge", descr: "Lorem3"},
    { name: "vacuum", descr: "Lorem4"},
    { name: "vacder", descr: "Lorem5"},
    { name: "vatuuer", descr: "Lorem6"},
    { name: "sacuum", descr: "Lorem7"},
    { name: "sacder", descr: "Lorem8"},
    { name: "satuuer", descr: "Lorem9"},
    { name: "sicrow", descr: "Lorem10"},
    { name: "dacuum", descr: "Lorem7"},
    { name: "dacder", descr: "Lorem8"},
    { name: "datuuer", descr: "Lorem9"},
    { name: "dicrow", descr: "Lorem10"},
    
];





// ====== .map render =======
const btnRender = document.querySelector('[data-ection="rend"]');
const list = document.querySelector(".render-list");

// ====== .Filter search =======
const searchInput = document.getElementById("search-input");
const filterList = document.querySelector(".filter-list");

// ====== .reduce render =======
const btnReduce = document.querySelector('[data-ection="rend-reduce"]');
const reduceList = document.querySelector(".reduce-list");

// ====== .forEach render =======
const btnForEach = document.querySelector('[data-ection="rend-forEach"]');
const forEachList = document.querySelector(".forEach-list");
// console.log(btnForEach);
// console.log(forEachList);


// V2
searchInput.addEventListener("input", _.debounce((event) => {
    const value1 = event.target.value;
    const filterItems = dataForSearch.filter(item => {
        const {name} = item;
        return name.includes(value1);
    });
    
    const markup = filterItems.map(({ name, descr })=> `<li>name: ${name} descr: ${descr}</li>`).join("");
    filterList.innerHTML = markup;
  }, 300) 
);


// // V1
// searchInput.addEventListener("input", _.debounce((event) => {
//     const value1 = event.target.value;
//     const filterItems = dataForSearch.filter(item => {
//         const {name} = item;
//         return name.includes(value1);
//     });
    
//     const markup = filterItems.map(buildItem).join("");
//     filterList.innerHTML = markup;
//   }, 300) 
// );





// ====== .map render =======

btnRender.addEventListener("click", renderingList);

// // V1
// function renderingList () {
//     const markup = dataForSearch.map(({ name, descr }) => `<li>name: ${name} descr: ${descr}</li>`).join("");
//     list.innerHTML = markup;;
// }

// V2
function renderingList () {
    const markup = dataForSearch.map(({ name, descr }) => {
        return `<li>name: ${name} descr: ${descr}</li>`
    }).join("");
    list.innerHTML = markup;;
}


// // V3
// function renderingList () {
//     const markup = dataForSearch.map(buildItem).join("");
//     // list.insertAdjacentHTML("beforeend", markup);
//     list.innerHTML = markup;
// }

// function buildItem ({ name, descr }) {
//     return `
//         <li>${name}descr: ${descr}</li>
//     `;
// };





// ====== .reduce render =======

// V2
btnReduce.addEventListener("click", ()=> {
    const markup = reduceMarkup ();
    // reduceList.insertAdjacentHTML("beforeend", markup);
    reduceList.innerHTML = markup;
});

function reduceMarkup () {
    return dataForSearch.reduce((acc, { name, descr }) => {
        return acc += `
            <li>${name}descr: ${descr}</li>
        `
    }, "");
}

// // V1
// btnReduce.addEventListener("click", RenderReduce);

// function RenderReduce () {
//     const markup = reduceMarkup ();
//     reduceList.insertAdjacentHTML("beforeend", markup);
// }

// function reduceMarkup () {
//     return dataForSearch.reduce((acc, { name, descr }) => {
//         return acc += `
//             <li>${name}descr: ${descr}</li>
//         `
//     }, "");
// }


// ====== .forEach render =======
// const btnForEach = document.querySelector('[data-ection="rend-forEach"]');
// const forEachList = document.querySelector(".forEach-list");

// btnForEach.addEventListener("click", renderForEach);

// // V1
// function renderForEach () {
//     // const markup = dataForSearch.forEach(({ name, descr }) => `<li>name: ${name} descr: ${descr}</li>`).join("");
//     // const markup =[];
//     dataForSearch.forEach(({ name, descr }) => markup.push(`<li>name: ${name} descr: ${descr}</li>`));
//     // forEachList.innerHTML = markup;
//     console.log(markup);
// }