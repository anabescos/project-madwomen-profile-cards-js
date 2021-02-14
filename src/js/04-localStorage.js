"use strict";

// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
function saveInLocalStorage() {
  // obtengo los valores de todos los campos
  const userData = {
    photo: photo,
    palette: document.querySelector(".js-palette:checked").value,
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document.querySelector(".js-input-linkedin").value,
    github: document.querySelector(".js-input-github").value,
  };
  // lo convierto a string porque local storage solo admite strings
  const userDataInString = JSON.stringify(userData);
  // lo guardo en el local storage en el campo que me apetece
  localStorage.setItem("userData", userDataInString);
}

// al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
function getFromLocalStorage() {
  // obtengo los datos desde el local storage
  const userDataInString = localStorage.getItem("userData");
  // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    // actualizo los inputs del formulario
    document.querySelector(".js-input-name").value = userData.name;
    document.querySelector(".js-input-job").value = userData.job;
    document.querySelector(".js-input-email").value = userData.email;
    document.querySelector(".js-input-phone").value = userData.phone;
    document.querySelector(".js-input-linkedin").value = userData.linkedin;
    document.querySelector(".js-input-github").value = userData.github;
    // actualizo la variable global de la foto
    photo = userData.photo;
    // actualizo la paleta, para ello
    // - Recorro las 3 paletas
    // - Compruebo cuál tiene el valor que tengo en el local storage
    // - A la paleta que tiene el valor correcto le hago un .checked = true para activarla
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    // propago los datos desde el formulario a la tarjeta
    updateAllInputs();
    // updatePalette();
    handlePalette();
    updatePhoto();
  }
}
getFromLocalStorage();
