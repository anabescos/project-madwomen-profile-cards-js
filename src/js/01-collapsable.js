
'use strict';

const titleAreaElement = document.querySelector('.js-title');
const containerElement = document.querySelector('.js-container');

function handleCollapsable (event){
    containerElement.classList.toggle('collapsable__close');
}


titleAreaElement.addEventListener ('click', handleCollapsable);