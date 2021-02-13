"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const hiddenBoxElement = document.querySelector(".js-display");
const twitterElement = document.querySelector(".twitterLink");

// const inputPhoto = photo;
// const inputName = document.querySelector(".js-input-name").value;
// const inputJob = document.querySelector(".js-input-job").value;
// const inputEmail = document.querySelector(".js-input-email").value;
// const inputPhone = document.querySelector(".js-input-phone").value;
// const inputLinkedin = document.querySelector(".js-input-linkedin").value;
// const inputGithub = document.querySelector(".js-input-github").value;

function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document.querySelector(".js-input-linkedin").value,
    github: document.querySelector(".js-input-github").value,
  };
}

function handleCreateBtn(ev) {
  ev.preventDefault();

  // debugger;
  // console.log("NAME VALOR", inputName);
  // console.log("EMAIL VALOR", inputEmail);
  // if (inputName === " ") {
  //   console.log("NAME VALOR", inputName);
  //   alert(`Por favor, rellena correctamente el nombre`);
  //   console.log("ESTOY VACIO", inputName);
  // } else if (inputJob === " ") {
  //   alert(`Por favor, rellena correctamente el puesto`);
  // } else if (inputEmail === " ") {
  //   alert(`Por favor, rellena correctamente el email`);
  // } else if (inputPhone === " ") {
  //   alert(`Por favor, rellena correctamente el teléfono`);
  // } else if (inputLinkedin === " ") {
  //   alert(`Por favor, rellena correctamente el usuario de linkedin`);
  // } else if (inputGithub === " ") {
  //   alert(`Por favor, rellena correctamente el usuario de github`);
  // } else {
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  const data = getUserData();
  fetch(url, {
    method: "POST",
    // mode: "no-cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      if (data.success === true) {
        createBtn.style.backgroundColor = "#d5d5d5";
        hiddenBoxElement.classList.remove("js-hidden");
        cardResultElement.innerHTML = "Haz click aquí para ver tu tarjeta";
        cardResultElement.href = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
  //}
}

function handleTwitterBtn() {
  const tweetText = encodeURIComponent(
    "¡Echa un vistazo a la tarjeta que me he creado con Mad Women Profile Cards!"
  );
  const tweetHashtag = encodeURIComponent("Adalab,promoL,MadWomen, frontend");
  const generatedCardURL = cardResultElement.href;
  twitterElement.href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${generatedCardURL}&hashtags=${tweetHashtag}`;
}

createBtn.addEventListener("click", handleCreateBtn);
twitterElement.addEventListener("click", handleTwitterBtn);

// for (const inputTextConfig of inputsTextConfig) {
//   const inputElement = document.querySelector(inputTextConfig.inputClass);
//   if (
//     inputElement.value === inputTextConfig.defaultValue ||
//     inputElement.value === " "
//   ) {
//     alert(`Por favor, rellana correctamente ${inputsTextConfig.inputName}`);
//   }
// }
