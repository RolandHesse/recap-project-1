const bodyElement = document.querySelector('[data-js="body-element"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventListener("click", () => {
  console.log("Yeah!");
  bodyElement.classList.toggle("dark-mode");
});
