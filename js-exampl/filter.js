console.log("Filter");

const dataForSearch = [
    { name: "toster", descr: "Lorem"},
    { name: "vicrow", descr: "Lorem"},
    { name: "vesdge", descr: "Lorem"},
    { name: "vacuum", descr: "Lorem"},
    { name: "vacder", descr: "Lorem"},
    { name: "vatuuder", descr: "Lorem"},
];



const searchInput = document.getElementById("search-input");
const btnRender = document.querySelector('[data-ection="rend"]');
const list = document.querySelector(".render-list");
const filterList = document.querySelector(".filter-list");
// console.log(list);


btnRender.addEventListener("click", renderingList);

searchInput.addEventListener("input", _.debounce((event) => {
    const value1 = event.target.value;
    const filterItems = dataForSearch.filter(item => {
        const {name} = item;
        return name.includes(value1);
    });
    
    const markup = filterItems.map(buildItem).join("");
    filterList.innerHTML = markup;
  }, 300) 
);

// // V1
// function renderingList () {
//     const markup = dataForSearch.map(({ name, descr }) => `<li>name: ${name} descr: ${descr}</li>`).join("");
//     list.insertAdjacentHTML("beforeend", markup);
//     console.log(markup);
// }

// V2
function renderingList () {
    const markup = dataForSearch.map(buildItem).join("");
    list.insertAdjacentHTML("beforeend", markup);
}


function buildItem ({ name, descr }) {
    return `
        <li>${name}</li>
    `;
};