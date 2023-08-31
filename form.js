const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("event: ", event);
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  //Create and style card section
  const card = document.createElement("section");
  card.classList.add("question-card");

  //Create, style, and bookmark-button
  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.type = "submit";
  card.append(bookmarkButton);

  //Create, style, and append bookmark-icon
  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.classList.add("bookmark-picture-within-card");
  bookmarkIcon.src = "./assets/bookmark-white.svg";
  bookmarkButton.append(bookmarkIcon);

  //Create, style, and append question-answer-div
  const questionAnswerDiv = document.createElement("div");
  questionAnswerDiv.classList.add("flex-container");
  card.append(questionAnswerDiv);

  //Create, style, and append question
  const question = document.createElement("h2");
  question.textContent = data.question;
  questionAnswerDiv.append(question);

  form.append(card);
});
