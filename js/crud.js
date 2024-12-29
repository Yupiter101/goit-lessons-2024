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
    <li data-id="${data.id}">
        <p>id: ${data.id}</p>
        <p>title: ${data.title}</p>
        <p>body: ${data.body}</p>
    </li>
    `;
}




