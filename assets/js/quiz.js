const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreboard = document.getElementById("scoreboard");

// const to retrieve elements from html file Id

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

/**
 * Sets up the initial state of the quiz
 */
function startQuiz() {
  shuffledQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  updateScoreboard();
  nextButton.innerHTML = "Next";
  shuffledQuestions = shuffle(questions).slice(0, 10);

  showQuestion();
}

/**
 * Shows the current question and answer choices
 */
function showQuestion() {
  resetState();
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers = shuffle(currentQuestion.answers);

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

/**
 * Resets the state of the quiz interface and hides next button
 */
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/**
 * Handles selected answer
 * @param {MouseEvent} e - Select answer event
 */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Correct!",
      showConfirmButton: false,
      timer: 1500,
    });
    score++;
    updateScoreboard();
  } else {
    selectedBtn.classList.add("incorrect");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unlucky!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const transitionDuration = 200;
  const transitionTimingFunction = "ease";

  nextButton.style.transition = `transform ${transitionDuration}ms ${transitionTimingFunction}`;

  nextButton.addEventListener("mouseover", function () {
    nextButton.style.transform = "scale(1.1)";
  });

  nextButton.addEventListener("mouseout", function () {
    nextButton.style.transform = "scale(1)";
  });

  /**
   * Disabling the answer buttons and styling the correct answer button after a user selects an answer
   */
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

/**
 * Scoreboard updates to reflect the current score
 */
function updateScoreboard() {
  scoreboard.textContent = `Score: ${score}`;
}

/**
 * Displays final score and option to play again
 */
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

/**
 * Determines whether to display the next question or final score
 */
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

/**
 * Shuffles the elements of the input array randomly
 * @param {*} array
 * @returns
 */
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
