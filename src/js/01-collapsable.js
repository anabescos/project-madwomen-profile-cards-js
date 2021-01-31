
'use strict';

// const titleAreaElement = document.querySelector('.js-title');
// const containerElement = document.querySelector('.js-container');

// function handleCollapsable (event){
//     containerElement.classList.toggle('collapsable__close');
// }


// titleAreaElement.addEventListener ('click', handleCollapsable);


const titleAreaElement = document.querySelectorAll('.js-title');
const containerElement = document.querySelectorAll('.js-container');

function handleCollapsable (){
    for (let i = 0; i < containerElement.length; i++) {
    containerElement[i].classList.toggle('collapsable__close');
    }
}


titleAreaElement[0].addEventListener ('click', handleCollapsable);
titleAreaElement[1].addEventListener ('click', handleCollapsable);
titleAreaElement[2].addEventListener ('click', handleCollapsable);