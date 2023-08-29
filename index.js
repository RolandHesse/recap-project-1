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

//Toggle-functionality for bookmark button
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIconBlack = document.querySelector(
  '[data-js="bookmark-icon__black"]'
);

bookmarkButton.addEventListener("click", () => {
  if (bookmarkIconBlack.hidden === true) {
    bookmarkIconBlack.removeAttribute("hidden");
  } else {
    bookmarkIconBlack.setAttribute("hidden", "");
  }
});

//Toggle-functionality for answer button
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  if (answer.hidden === true) {
    answerButton.textContent = "Hide Answer";
    answer.removeAttribute("hidden");
  } else {
    answer.setAttribute("hidden", "");
    answerButton.textContent = "Show Answer";
  }
});
