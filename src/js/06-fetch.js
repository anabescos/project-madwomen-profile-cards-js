"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");

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
  console.log("Mis datos", getUserData());

  const url =
    "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";
  const data = getUserData();

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
        cardResultElement.innerHTML = "Haz click para ver tu tarjeta";
        cardResultElement.href = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
}

createBtn.addEventListener("click", handleCreateBtn);
