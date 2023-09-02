const form = document.querySelector('[data-js="form"]');

//Create new card on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //Create and style card section
  const card = document.createElement("section");
  card.classList.add("question-card");

  //Create, style, and bookmark-button
  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.type = "button";
  bookmarkButton.addEventListener("click", () => {
    if (bookmarkIconBlack.hidden === true) {
      bookmarkIconBlack.removeAttribute("hidden");
    } else {
      bookmarkIconBlack.setAttribute("hidden", "");
    }
  });
  card.append(bookmarkButton);

  //Create, style, and append bookmark-icons
  const bookmarkIconWhite = document.createElement("img");
  bookmarkIconWhite.classList.add("bookmark-picture-within-card");
  bookmarkIconWhite.src = "./assets/bookmark-white.svg";
  bookmarkButton.append(bookmarkIconWhite);

  const bookmarkIconBlack = document.createElement("img");
  bookmarkIconBlack.classList.add("bookmark-picture-within-card");
  bookmarkIconBlack.src = "./assets/bookmark-black.svg";
  bookmarkIconBlack.setAttribute("hidden", "");
  bookmarkButton.append(bookmarkIconBlack);

  //Create, style, and append question-answer-div
  const questionAnswerDiv = document.createElement("div");
  questionAnswerDiv.classList.add("flex-container");
  card.append(questionAnswerDiv);

  //Create, style, and append question
  const question = document.createElement("h2");
  question.textContent = data.question;
  questionAnswerDiv.append(question);

  //Create, style, and append answer-button
  const answerButton = document.createElement("button");
  answerButton.type = "button";
  answerButton.classList.add("answer-button");
  answerButton.textContent = "Show Answer";
  questionAnswerDiv.append(answerButton);
  answerButton.addEventListener("click", () => {
    if (answer.hidden === true) {
      answerButton.textContent = "Hide Answer";
      answer.removeAttribute("hidden");
    } else {
      answer.setAttribute("hidden", "");
      answerButton.textContent = "Show Answer";
    }
  });

  //Create, style, and append answer
  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.textContent = data.answer;
  answer.setAttribute("hidden", "");
  questionAnswerDiv.append(answer);

  //Create, style, and append tag-list
  const tagList = document.createElement("ul");
  tagList.classList.add("hashtag-list");
  card.append(tagList);

  //Create, style, and append tag-list-entry
  const tagListEntry = document.createElement("li");
  tagListEntry.textContent = `#${data.tag}`;
  tagList.append(tagListEntry);

  form.append(card);

  event.target.elements.question.focus();
  event.target.reset();
  characterCountQuestion.textContent = "150 characters left";
  characterCountAnswer.textContent = "150 characters left";
});

//Add form field text counters
const formFieldQuestion = document.querySelector(
  '[data-js="question-textarea"]'
);
const characterCountQuestion = document.querySelector(
  '[data-js="question-character-count"]'
);
const formFieldAnswer = document.querySelector('[data-js="answer-textarea"]');
const characterCountAnswer = document.querySelector(
  '[data-js="answer-character-count"]'
);

formFieldQuestion.addEventListener("input", (event) => {
  characterCountQuestion.textContent = `${
    150 - event.target.value.length
  } characters left`;
});

formFieldAnswer.addEventListener("input", (event) => {
  characterCountAnswer.textContent = `${
    150 - event.target.value.length
  } characters left`;
});
