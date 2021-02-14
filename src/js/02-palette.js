"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function handlePalette(ev) {
  cardElement.classList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );

  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette-" + checkedPaletteValue);

  console.log(checkedPaletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
handlePalette();
