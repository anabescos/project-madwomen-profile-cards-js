'use strict';

const resetButtonElement = document.querySelector('.js-reset');

function resetInfo() {
  localStorage.clear('userData');
}
resetButtonElement.addEventListener('click', resetInfo);