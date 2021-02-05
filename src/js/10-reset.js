'use strict';

const resetButtonElement = document.querySelector('.js-reset');

function resetInfo() {
  localStorage.clear();
}
resetButtonElement.addEventListener('click', resetInfo);