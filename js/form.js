// console.log("Hello form");

// ============= Подія submit ==============
const mentorsForm = document.querySelector(".contact-form");

mentorsForm.addEventListener("submit", handleSubmit);

function handleSubmit (e) {
    e.preventDefault();
    const userLogin = e.target.elements.login.value;
    const userEmail = e.target.elements.email.value;
    const userPassword = e.target.elements.password.value;
    const userPhone_1 = e.target.elements.phone1.value;
    const userPhone_2 = e.target.elements.phone2.value;
    const userMsg = e.target.elements.message.value;

    const userElements = {
        userLogin,
        userEmail,
        userPassword,
        userPhone_1,
        userPhone_2,
        userMsg,
    }

    console.log(userElements);
}

// ============= Подія change (select)==============

const select = document.querySelector(".pizza-select");
select.addEventListener("change", setOutput);

function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    console.log(selectedOptionValue);
  }



// ============= Подія input (input, textarea)==============

const textArea = document.querySelector(".contact-form-message");

textArea.addEventListener("input", (event) => {
    const textValue = event.currentTarget.value;
    console.log(textValue);
  });


// ============= Подія focus і blur (input) не доробив ==============

// textInput.addEventListener("focus", () => {
//     textInput.value = "This input has focus";
//   });
  
//   textInput.addEventListener("blur", () => {
//     textInput.value = "";
//   });