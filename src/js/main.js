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


