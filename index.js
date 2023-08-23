// //Dark-mode button
// const bodyElement = document.querySelector('[data-js="body-element"]');
// const header = document.querySelector('[data-js="header"]');
// const footer = document.querySelector('[data-js="footer"]');
// const footerIcon = document.querySelector('[data-js="footer-icon"]');
// const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// darkModeButton.addEventListener("click", () => {
//   console.log("Yeah!");
//   bodyElement.classList.toggle("dark-mode");
//   header.classList.toggle("dark-mode-header");
//   footer.classList.toggle("dark-mode-footer");
//   if (footerIcon.classList.contains("dark-mode-footerIcon")) {
//     footerIcon.classList.remove("dark-mode-footerIcon");
//   } else {
//     footerIcon.classList.add("dark-mode-footerIcon");
//   }
// });

//Toggle-functionality
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

console.log(bookmarkIcon);

bookmarkButton.addEventListener("click", () => {
  if (bookmarkIcon.hidden === true) {
    bookmarkIcon.removeAttribute("hidden");
  } else {
    bookmarkIcon.setAttribute("hidden", "");
  }
});
