console.log("HTTP API");

// ===== Fetch users =====

const fetchUsersBtn = document.querySelector(".fetch-btn");
const userList = document.querySelector(".user-fetch-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});



function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li style="border: 1px solid black">
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    }).join("");
  userList.insertAdjacentHTML("beforeend", markup);
}



// ===== Fetch users sort =====


const fetchBtn2 = document.querySelector(".fetch-btn2");
const userList2 = document.querySelector(".user-fetch-list2");


fetchBtn2.addEventListener("click", () => {
    fetchUsers_2()
      .then((users) => renderUsers2(users))
      .catch((error) => console.log(error));
  });
  
  function fetchUsers_2() {
    return fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=4&_sort=name"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  function renderUsers2(users) {
    const markup = users
      .map((user) => {
        return `
            <li>
              <p><b>Name</b>: ${user.name}</p>
              <p><b>Email</b>: ${user.email}</p>
              <p><b>Company</b>: ${user.company.name}</p>
            </li>
        `;
      })
      .join("");
      userList2.insertAdjacentHTML("beforeend", markup);
  }




//    ===== Fetch posts Пагінація (Ex) ======

const fetchBtn3 = document.querySelector(".btn3");
const postList3 = document.querySelector(".user-fetch-list3");



// // Це я переробив

// fetchBtn3.addEventListener("click", () => {
//       fetchPosts3()
//         .then((posts) => renderUsers3(posts))
//         .catch((error) => console.log(error));
//   });

//   async function fetchPosts3() {
//     return fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=5"
//     )
//     .then((response) => {
//        if (!response.ok) {
//          throw new Error(response.status);
//        }
//        console.log(response.json());
//        return response.json();
//     });
//   }

// Це оригінал

fetchBtn3.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts3();
    renderPosts3(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts3() {
  // Change the number of items in the group here
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return response.data;
}

function renderPosts3(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join("");
    postList3.innerHTML = markup;
}


// ====== Мій проект Weather API ========

console.log("Weather API - my project");

// const urlxx = "http://api.weatherapi.com/v1/forecast.json?key=368bfc610f25464d87c121720241912&q=Paris&days=4";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "368bfc610f25464d87c121720241912";

const QUERY_PARAM = {
  param: "forecast.json",
  key: `key=${API_KEY}`,
  city: "q=Paris",
  days: "days=4"
}

const { param, key } = QUERY_PARAM;


console.log(URL);

function getWeather (city, days) {
  const URL = `${BASE_URL}/${param}?${key}&${city}&${days}`;
  fetch(URL)
}














// Або те саме:

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
//       .then((users) => renderUsers(users))
//       .catch((error) => console.log(error));
//   });
  
  
  
//   function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users");
//   }
  


//   function renderUsers(users) {
//     const markup = users
//       .map((user) => {
//         return `<li style="border: 1px solid black">
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>`;
//       }).join("");
//     userList.insertAdjacentHTML("beforeend", markup);
//   }