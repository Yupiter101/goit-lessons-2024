console.log("My CRUD");


const BASE_URL = "https://jsonplaceholder.typicode.com";
const id = "/posts/2";


// ========= GET ==============

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then(res => res.json())
//     .then(data => console.log(data) )
    // .catch(error => console.log(error));

const btnGetId = document.querySelector(".js-btn-getid");
btnGetId.addEventListener("click", handleGetId);

function handleGetId() {
    return getFetchId()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getFetchId () {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
}




// ================ PUT/PATCH===============

const btnPutId = document.querySelector(".js-btn-putid");

const putObj = {
    id: 2,
    title: "Yupiter PUT",
}

const optiionsPut = {
    method: "PATCH", // "PUT" "PATCH"
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(putObj),
}


// fetch(`https://jsonplaceholder.typicode.com/posts/${putObj.id}`, optiionsPut)
//     .then((res)=> console.log(res))

btnPutId.addEventListener("click", handlePutId);

function handlePutId() {
    return putFetchId()
            .then(data => console.log(data))
            .catch(err => console.log(err))
}

function putFetchId () {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${putObj.id}`, optiionsPut)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
}






// ================ DELETE ===============

const btnDelete = document.querySelector(".js-btn-del");

const optiionsDel = {
    method: "DELETE", 
}


btnDelete.addEventListener("click", handleDel);

function handleDel() {
    return delFetchId()
            .then(data => console.log(data))
            .catch(err => console.log(err))
}

function delFetchId () {
    return fetch(`https://jsonplaceholder.typicode.com/posts/3`, optiionsDel)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
}








// ========= POST =============




// const myPost = {
//     title: "Heloo Serg VS",
//     body: "Yupiter Goog",
//     userId: 6,
// }


// const options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//     },
//     body: JSON.stringify(myPost), 
// }


// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json();
//     })
//     .then(data => console.log(data) )
//     .catch(error => console.error(error));




// Створення постів. Практика

const addPost = document.querySelector(".js-add-post");
const postList = document.querySelector(".post-list");
const formWrap = document.querySelector(".js-form");
const erroeMessage = document.querySelector(".js-error");

addPost.addEventListener("click", handlerAddPost);

function handlerAddPost () {
    formWrap.innerHTML = `
    <form class="js-form-add" action="submit">
        <label>Title
            <input type="text" name="title">
        </label>
        <label>Body
            <input type="text" name="body">
        </label>
        <button type="submit">Submit</button>
    </form>
    `;

    
    const formAdd = document.querySelector(".js-form-add");
    console.log(formAdd);
    formAdd.addEventListener("submit", handlerFormSubmit);
}

function handlerFormSubmit(event) {
    event.preventDefault();

    const { title, body } = event.currentTarget.elements; 
    console.log("submit");
    const data = {
        title: title.value,
        body: body.value,
    }
    
    addPostService(data)
        .then(obj => {
            postList.insertAdjacentHTML("beforeend", createPostMarkup(obj));
        } )
        .catch(err => {
            erroeMessage.innerHTML = "Не можливо додати пост";
            console.log(err);
        })
        .finally(()=> {
            // formAdd.removeEventListener("submit", handlerFormSubmit);
            formWrap.innerHTML = '';
            setTimeout(()=>{
                erroeMessage.innerHTML = "";
            }, 3000);
            
        });
}



function addPostService(dataInput) {
    
    const myPost = {
        title: "Heloo Serg VS",
        body: "Yupiter Goog",
        userId: 6,
    }

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
            body: JSON.stringify(dataInput), 
    }

    return fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })

} 

function createPostMarkup(data) {
    return `
    <li data-id="${data.id}" style="border: 2px solid black;">
        <p>id: ${data.id}</p>
        <p>title: ${data.title}</p>
        <p>body: ${data.body}</p>
    </li>
    `;
}






// ============= Відео Рисіч. Практика async/await =======================


// Приклад коду №1 (без return)

const btnGetCapital = document.querySelector(".js-get-capital");
btnGetCapital.addEventListener("click", getCapital);

async function getCapital() {
    try {
        const base_CapitalURL = "https://restcountries.com/v3.1/name/Ukraine";
        const resp = await fetch(base_CapitalURL);
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }
        const data = await resp.json();
        console.log(data);
        // return data;
    }
    catch(err) {
        console.log(err);
    }
    console.log("end");
}

// getCapital();




// Приклад коду №2 (з return)

const btnGetCapital2 = document.querySelector(".js-get-capital2");

btnGetCapital2.addEventListener("click", ()=> getCapital2()
    .then(data => console.log(data))
    .catch(err => console.log(err))
);

async function getCapital2() {
    const base_CapitalURL2 = "https://restcountries.com/v3.1/name/Ukraine";
    const resp = await fetch(base_CapitalURL2);
    if(!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp.json();
}

// getCapital2()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));




// ==Приклад коду №3 (паралельні проміси)==

const btnGetCapital3 = document.querySelector(".js-get-capital3");

btnGetCapital3.addEventListener("click", ()=> getCapital3()
    .then(data => {
        const res = data.filter(({status})=> status === "fulfilled").map(({value}) => value )
        console.log(res);
    })
    .catch(err => console.log(err))
    );

async function getCapital3() {
    const base_CapitalURL3 = "https://restcountries.com/v3.1/name/";
    const contryArr = ["Ukraine", "France", "Germany"];

    const responses = contryArr.map( async (contr) => {
        const resp = await fetch(`${base_CapitalURL3}${contr}`);
        if(!resp.ok) {
            throw new Error("Not found");
            // Promise.reject("Not found"); 
        }
        return resp.json();
    }) 
    const prom = await Promise.allSettled(responses);
    // console.log(prom);
    return prom;
}

// getCapital3()
//     .then(data => {
//         const res = data.filter(({status})=> status === "fulfilled")
//         console.log(res);
//     })
//     .catch(err => console.log(err));





// ===== практичне завдання з розміткою Столиці Погода =========

const searchForm = document.querySelector(".js-search");
const addCountry = document.querySelector(".js-btn-add");
const countryList = document.querySelector(".js-contry-list");
const inputWrap = document.querySelector(".js-input-wrap");

addCountry.addEventListener("click", handlerAddInput)

function handlerAddInput() {
    const markupInp = '<input type="text" name="country" value="France">'
    inputWrap.insertAdjacentHTML("beforeend", markupInp);
}


searchForm.addEventListener("submit", handleForm)

function handleForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // захист від пустих і від пробілів по краям
    const arr = data.getAll("country").filter(item => item).map(item => item.trim());

    getCountries(arr)
        .then(async data => {
            // const res = data.filter(({status})=> status === "fulfilled")
            const capitals = data.map(({capital}) => capital[0] );
            console.log(capitals);
            const weatherServ = await getWeather(capitals);
            console.log("getWeather");
            console.log(weatherServ);
            countryList.innerHTML = createMarkUpCapital(weatherServ);
            // event.currentTarget.reset(); // не працює тому searchForm.reset();
            // searchForm.reset();
            
        })
        .catch(err => console.log(err))
        .finally(() => {
            inputWrap.innerHTML = '<input type="text" name="country" value="Greece">';
            searchForm.reset();
        });
}


async function getCountries(arr) {
    const responsesC = arr.map( async item => {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
        if(!resp.ok) {
            throw new Error("Not found"); 
        }
        return resp.json();
    }) 
    const dataCountry = await Promise.allSettled(responsesC);
    const countryObj = dataCountry.filter(({status})=> status === "fulfilled").map(({value})=> value[0]);
    console.log("getCountries");
    console.log(countryObj);
    return countryObj;
}




async function getWeather (arrr) {

    const BASE_URL = "http://api.weatherapi.com/v1";
    const API_KEY = "368bfc610f25464d87c121720241912";

    const resps = arrr.map(async citi => {
        const QUERY_PARAM = {
            param: "forecast.json",
            key: `key=${API_KEY}`,
            city: `q=${citi}`,
            days: "days=1"
        }
        const { param, city, days } = QUERY_PARAM;

        const URL_ = `${BASE_URL}/${param}?key=${API_KEY}&${city}&${days}&lang=uk`;
        // console.log(URL_);
        const resp = await fetch(URL_)
            if(!resp.ok) {
                throw new Error(res.statusText);
            }
            return resp.json();
    }) 

    const dataCoun = await Promise.allSettled(resps);
    // console.log(dataCoun);
    const countryObjs = dataCoun.filter(({status})=> status === "fulfilled").map(({value})=> value); // value.current
    // console.log(countryObjs);
    return countryObjs;
}

// getWeather(["Paris"]).then(data => console.log(data));

function createMarkUpCapital(arr) {
    return arr.map(({ current: {temp_c, condition: { icon, text }}, location: {country, name}}) => `
        <li style="border: 2px solid black;">
            <p>${country}</p>
            <p>${name}</p>
            <img src="${icon}" alt="${text}">
            <p>${temp_c} &#8451</p>
            <p>${text}</p>
        </li>
    `).join(""); 
}






// ====== Мій проект Weather API Повторно ========


// const search = document.querySelector(".js-search");
// const weatherList = document.querySelector(".js-list");

// search.addEventListener("submit", onSearch);

// function onSearch (event) {
//   event.preventDefault();

//   const {query, days} = event.currentTarget.elements;
//   // console.log(query.value);

//   // getWeather (query.value, days.value)
//   //   .then(data => weatherList.innerHTML = createMarkup(data.forecast.forecastday))
//   //   .catch(error => console.error(error))
//   //   .finally(()=> {});

//   getWeather (query.value, days.value)
//     .then(data => {
//       // console.log(data.forecast.forecastday);
//       // console.log(data);
//       weatherList.innerHTML = createMarkup(data.forecast.forecastday);
//     })
//     .catch(error => console.error(error))
//     .finally(()=> {});
// }



// const urlxx = "http://api.weatherapi.com/v1/forecast.json?key=368bfc610f25464d87c121720241912&q=Paris&days=4";

// const BASE_URL = "http://api.weatherapi.com/v1";
// const API_KEY = "368bfc610f25464d87c121720241912";

// const QUERY_PARAM = {
//   param: "forecast.json",
//   key: `key=${API_KEY}`,
//   city: "q=Paris",
//   days: "days=4"
// }

// const { param, key } = QUERY_PARAM;


// function getWeather (city, days) {
//   const URL = `${BASE_URL}/${param}?${key}&q=${city}&days=${days}&lang=uk`;
//   return fetch(URL)
//     .then(res => {
//       if(!res.ok) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     });
// }



// // li
// function createMarkup (array) {
//   return array.map(({ date, day: {avgtemp_c, condition: {icon, text}} }) => `
//       <li class="weather-item">
//           <img src="${icon}" alt="${text}">
//           <h4>${text}</h4>
//           <h4>${date}</h4>
//           <h4>Темп ${avgtemp_c} &#8451;</h4>
//       </li>
//     ` ).join("");
// }