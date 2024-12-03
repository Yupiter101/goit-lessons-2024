"use strict"; // код в суворому режимі

console.log("Button to top");



const refs = {
    btnTop: document.querySelector(".toTop"),
}

refs.btnTop.addEventListener('click', topFunction);


window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    refs.btnTop.style.display = "block";
  } else {
    refs.btnTop.style.display = "none";
  }
};


// function scrollFunction() {
//     window.scrollY > 700 ? refs.btnTop.style.display = "block" : refs.btnTop.style.display = "none";
// };
    

function topFunction() {
   window.scrollTo({
     top: 0,
     behavior:'smooth'
  })
};

// // === V1 Це працює
// window.onscroll = () => window.scrollY > 1000 ? refs.btnTop.style.opacity = 1 : refs.btnTop.style.opacity = 0;

// // === V2 Це працює
// window.onscroll = () => window.scrollY > 700 ? refs.btnTop.style.display = "block" : refs.btnTop.style.display = "none";

// // === V3 Це працює
// window.onscroll = scrollFunction;



// const viewportHeight = window.innerHeight;      // Высота экрана
// let pageHeight = document.documentElement.scrollHeight;
// let currentScroll = window.scrollY; 

// window.addEventListener('scroll', _.throttle(onScroll, 500));

// function onScroll() {
//     console.log(5);
// }








//===== Чужа робота ==============
// topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
// On scroll, Show/Hide the btn with animation
// window.onscroll = () => window.scrollY > 1000 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0




// ============================================================

// const refs = {
//     searchFormEl: document.querySelector('.search-form'),
//     galleryEl: document.querySelector('.gallery'),
//     loadMoreBtnEl: document.querySelector('.load-more'),
//     totalItemsEl: document.querySelector('.totalItemsInfo'),
//     moreEl: document.querySelector('.more'),
//     buttonToTopEl: document.querySelector('.toTop'),
//     welcomeEl: document.querySelector('.list-welcome')
// }

// export class ButtonToTop {
//     constructor(buttonToTopEl) {
//         this.buttonToTop = buttonToTopEl;
//     };

// scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    this.buttonToTop.style.display = "block";
//   } else {
//   this.buttonToTop.style.display = "none";
//   }
// };
    
//  topFunction() {
//    window.scrollTo({
//      top: 0,
//      behavior:'smooth'
//   })
    
//     // or another option 
//   // document.body.scrollTop = 0; // For Safari
//   // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//     };
// }