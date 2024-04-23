import questions from "./questions.js";
// import questions

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// const to retrieve elements from html file Id

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function startQuiz() {
  shuffledQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  shuffledQuestions = shuffle(questions).slice(0, 10);
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  // function to pull question to correct place

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  }
}

// creates button for each answer

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
// adds answers into correct place

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // shows if correct or incorrect and adds to score

  const answerButtonsChildren = answerButtons.children;
  for (let i = 0; i < answerButtonsChildren.length; i++) {
    const button = answerButtonsChildren[i];
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  }
  nextButton.style.display = "block";
}
// disabling the answer buttons and styling the correct answer button after a user selects an answer

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

startQuiz();
