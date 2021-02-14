"use strict";

const resetButtonElement = document.querySelector(".js-reset");
const nameCardElement = document.querySelector(".js-card-name");
const jobCardElement = document.querySelector(".js-card-job");
const emailCardElement = document.querySelector(".js-card-email");
const phoneCardElement = document.querySelector(".js-card-phone");
const linkedinCardElement = document.querySelector(".js-card-linkedin");
const githubCardElement = document.querySelector(".js-card-github");

function resetInfo() {
  resetShareSection();
  document.querySelector(".form").reset();
  nameCardElement.innerHTML = "Nombre Apellido";
  jobCardElement.innerHTML = "Profesión";
  profilePreview.style.backgroundImage = "";
  photo =
    "https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1";
  profileImage.style.backgroundImage =
    "url('https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1')";
  phoneCardElement.href = "";
  emailCardElement.href = "";
  linkedinCardElement.href = "";
  githubCardElement.href = "";
  requiredElement.innerHTML = "";
  localStorage.removeItem("userData");

  cardElement.classList.remove("palette-1", "palette-2", "palette-3");

  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = 1;
  cardElement.classList.add("palette-" + checkedPaletteValue);
  handlePalette();
}

resetButtonElement.addEventListener("click", resetInfo);
