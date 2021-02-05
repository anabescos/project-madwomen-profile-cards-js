"use strict";

const titlesAreaElement = document.querySelectorAll(".js-title");

for (const titleAreaElement of titlesAreaElement) {
  titleAreaElement.addEventListener("click", changeCollapsable);
}

function changeCollapsable(ev) {
  const clickedTitleArea = ev.currentTarget;
  const clickedCollapsable = clickedTitleArea.parentNode;

  const allCollapsables = document.querySelectorAll(".js-container");
  for (const collapsable of allCollapsables) {
    if (clickedCollapsable === collapsable) {
      collapsable.classList.toggle("collapsable__close");
    } else {
      collapsable.classList.add("collapsable__close");
    }
  }
}
