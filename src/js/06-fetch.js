"use strict";

const cardResultElement = document.querySelector(".js-card-result");
const twitterElement = document.querySelector(".twitterLink");
const requiredElement = document.querySelector(".js-required");

function getCardData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document
      .querySelector(".js-card-linkedin")
      .href.replace("https://www.linkedin.com/in/", ""),
    github: document
      .querySelector(".js-card-github")
      .href.replace("https://github.com/", ""),
  };
}

function requiredText() {
  const dataPhoto = photo;
  const inputName = document.querySelector(".js-input-name").value;
  const inputJob = document.querySelector(".js-input-job").value;
  const inputEmail = document.querySelector(".js-input-email").value;
  const inputPhone = document.querySelector(".js-input-phone").value;
  const inputLinkedin = document.querySelector(".js-input-linkedin").value;
  const inputGithub = document.querySelector(".js-input-github").value;

  if (inputName === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el nombre.`;

    return false;
  } else if (inputJob === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
   Por favor, rellena correctamente el puesto.`;

    return false;
  } else if (inputPhone === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el teléfono.`;

    return false;
  } else if (
    dataPhoto ===
      "https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1" ||
    dataPhoto === ""
  ) {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, añade una imagen.`;
    return false;
  } else if (inputEmail === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el email.`;
    return false;
  } else if (inputLinkedin === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el usuario de Linkedin.`;
    return false;
  } else if (inputGithub === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el usuario de Github.`;
    return false;
  } else {
    requiredElement.innerHTML = "";
    return true;
  }
}

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log("DATOS API", getCardData());
  if (requiredText() === true) {
    const url = "https://awesome-profile-cards.herokuapp.com/card";
    const data = getCardData();
    fetch(url, {
      method: "POST",
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
          requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>Lo sentimos, hemos tenido algún problema con el servidor. Prueba más tarde. Error: ${data.error}`;
        }
      });
  }
}

function handleTwitterBtn() {
  const tweetText = encodeURIComponent(
    "¡Echa un vistazo a la tarjeta que me he creado con Mad Women Profile Cards!"
  );
  const tweetHashtag = encodeURIComponent("Adalab,promoL,MadWomen,frontend");
  const generatedCardURL = cardResultElement.href;
  twitterElement.href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${generatedCardURL}&hashtags=${tweetHashtag}`;
}

function resetShareSection() {
  createBtn.style.backgroundColor = "#cc1517";
  hiddenBoxElement.classList.add("js-hidden");
}

createBtn.addEventListener("click", handleCreateBtn);
twitterElement.addEventListener("click", handleTwitterBtn);
