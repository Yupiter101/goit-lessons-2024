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


const search = document.querySelector(".js-search");
const weatherList = document.querySelector(".js-list");

search.addEventListener("submit", onSearch);

function onSearch (event) {
  event.preventDefault();

  const {query, days} = event.currentTarget.elements;
  // console.log(query.value);

  // getWeather (query.value, days.value)
  //   .then(data => weatherList.innerHTML = createMarkup(data.forecast.forecastday))
  //   .catch(error => console.error(error))
  //   .finally(()=> {});

  getWeather (query.value, days.value)
    .then(data => {
      // console.log(data.forecast.forecastday);
      // console.log(data);
      weatherList.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch(error => console.error(error))
    .finally(()=> {});
}



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


function getWeather (city, days) {
  const URL = `${BASE_URL}/${param}?${key}&q=${city}&days=${days}&lang=uk`;
  return fetch(URL)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
}



// li
function createMarkup (array) {
  return array.map(({ date, day: {avgtemp_c, condition: {icon, text}} }) => `
      <li class="weather-item">
          <img src="${icon}" alt="${text}">
          <h4>${text}</h4>
          <h4>${date}</h4>
          <h4>Темп ${avgtemp_c} &#8451;</h4>
      </li>
    ` ).join("");
}

// // <table>
// function createMarkup (array) {
//   return array.map(({ date, day: {avgtemp_c, condition: {icon, text}} }) => `
//       <tr>
//           <td>${icon}</td>
//           <td>${date}</td>
//           <td>${avgtemp_c}</td>
//           <td>${text}</td>
//       </tr>
//     ` ).join("");
// }






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




// =========== Пагінація ===================

const move_list = document.querySelector(".move-list");
const load_more = document.querySelector(".js-load-more");
let cur_page = 1;

const BASE_URL_MOVE = "https://api.themoviedb.org/3/";
const ENDPOINT = "trending/";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTIzMTFmNGYwZWMyZTNmYjgxMTliYWUxOTFlZGNkYSIsIm5iZiI6MTY4Nzc3MDcxNi40MzEsInN1YiI6IjY0OTk1NjVjYjM0NDA5MDBmZmVkMmI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v5lvfPhGa7H2Bfpk4UReNHyoSEJ4fzlARwz5Rp-lGAM'
  }
};

// fetch('https://api.themoviedb.org/3/authentication', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));



// ========= LOAD MORE ===========

load_more.addEventListener("click", ()=> {
    // cur_page +=1;
    load_more.hidden = true;

    getTrending(cur_page)
    .then(data => {
      console.log(data);
      move_list.insertAdjacentHTML("beforeend", createMarkupMove(data.results));

      // observer.observe(guardTarget); // observer

      if(data.page === data.total_pages) {
        load_more.hidden = false;
        load_more.disabled = true;
        console.log("Last pages!!!");
      }
      else {
        load_more.hidden = false;
      }
    })
    .catch(err => console.error(err));
    cur_page +=1;
});



function getTrending (page=1) {
  return fetch(`${BASE_URL_MOVE}${ENDPOINT}all/week?page=${page}`, options)
  .then(res => {
    if(!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
}


function createMarkupMove (arr) {
  return arr.map(({ poster_path, title }) => {
    return `
      <li style="height: 500px">
          <h3>${title || "Без назви"}</h3>
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
      </li>
    `
  }).join("");
}

// getTrending()
//   .then(data => {
//       console.log(data);
//       move_list.insertAdjacentHTML("beforeend", createMarkupMove(data.results));
//       if(data.page !== data.total_pages) {
//         load_more.hidden = false;
//       }
//   })
//   .catch(err => console.error(err));





// ========== Observer API ============

const move_list_2 = document.querySelector(".move-list2");
const load_more_2 = document.querySelector(".js-load-more2");
let cur_page_2 = 1;


const guardTarget = document.querySelector(".js-guard");


const options_ = {
  root: null,
  rootMargin: "10px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(onLoad, options_);

function onLoad (entries, observer) {
  // console.log(entries);
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // cur_page_2 +=1;
      getTrending(cur_page_2)
        .then(data => {
          console.log(data);
          move_list_2.insertAdjacentHTML("beforeend", createMarkupMove(data.results));

          if(data.page === data.total_pages) {
            load_more_2.hidden = false;
            load_more_2.disabled = true;

            observer.unobserve(guardTarget); // observer

            console.log("Last pages unobserve!!!");
          }
          else {
            load_more_2.hidden = false;
          }
        })
        .catch(err => console.error(err));

        cur_page_2 +=1;
    }
  });
}



load_more_2.addEventListener("click", ()=> {
  // cur_page_2 +=1;
  load_more_2.hidden = true;

  getTrending(cur_page_2)
  .then(data => {
    console.log(data);
    move_list_2.insertAdjacentHTML("beforeend", createMarkupMove(data.results));

    observer.observe(guardTarget); // observer

    if(data.page === data.total_pages) {
      load_more_2.hidden = false;
      load_more_2.disabled = true;
      console.log("Last pages!!!");
    }
    else {
      load_more_2.hidden = false;
    }
  })
  .catch(err => console.error(err));
  cur_page_2 +=1;
});




// ======== Практика Репета. Покемони ==================

fetch("https://pokeapi.co/api/v2/pokemon/2")
  .then(resp => {
    if(!resp.ok) {
      throw new Error("Mistake");
    }
    return resp.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))



