"use strict"; // код в суворому режимі
// ORIGIN ===

// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();


// By me ===

const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener("click", openModal);
// closeModalBtn.addEventListener("click", closeModal);

function openModal () {
  modal.classList.remove("is-hidden");
  closeModalBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModalEsc);
}

function closeModal () {
  modal.classList.add("is-hidden");
  closeModalBtn.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", closeModalEsc);
}

function closeModalEsc(e) {
  if(e.code === "Escape") {
    // console.log("Escape");
      modal.classList.add("is-hidden");
      closeModalBtn.removeEventListener("click", closeModal);
      document.removeEventListener("keydown", closeModalEsc);
    }
  }
  