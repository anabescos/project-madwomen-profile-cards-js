'use strict';


const fullNameElement = document.querySelector('.js-fullName');
const fullNameGenerator = document.querySelector ('.js-generatorName');

function handleFullName (event) {
    
    const name = event.target.value;
    
    if (name === ""){
        
        fullNameGenerator.innerHTML = "Nombre Apellido";
    }
    else {
    fullNameGenerator.innerHTML = name;
    }
}

fullNameElement.addEventListener ('keyup', handleFullName);

const emailElement = document.querySelector ('.js-email');
const emailGenerator = document.querySelector('.js-generatorEmail');

function handleEmail (event){
    const email = event.target.value;
    if (email === ""){
        emailGenerator.innerHTML = "";
    }
    else {
    emailGenerator.href = `mailto:${email}`;
    }
}
emailElement.addEventListener('keyup', handleEmail);