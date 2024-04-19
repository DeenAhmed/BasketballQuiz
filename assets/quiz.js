const questions = [
  {
    question: "Who has scored the most points in NBA history?",
    answers: [
      { text: "A. Michael Jordan", correct: false },
      { text: "B. Lebron James", correct: true },
      { text: "C. Kareem Abdul-Jabbar", correct: false },
      { text: "D. Wilt Chamberlain", correct: false },
    ],
  },
  {
    question: "Which NBA Team has the most Championship titles?",
    answers: [
      { text: "A. Chicago Bulls", correct: false },
      { text: "B. Los Angeles Lakers", correct: true },
      { text: "C. Golden State Warriors", correct: false },
      { text: "D. San Antiono Spurs", correct: false },
    ],
  },
  {
    question: "Who has won the most NBA Championship titles?",
    answers: [
      { text: "A. Michael Jordan", correct: false },
      { text: "B. Larry Bird", correct: false },
      { text: "C. Tim Duncan", correct: false },
      { text: "D. Robert Horry", correct: true },
    ],
  },
  {
    question: "Which player has the most MVPs?",
    answers: [
      { text: "A. Lebron James", correct: false },
      { text: "B. Kareem Abdul-Jabbar", correct: false },
      { text: "C. Bill Russell", correct: true },
      { text: "D. Michael Jordan", correct: false },
    ],
  },
  {
    question: "Which of these NBA franchises has never relocated?",
    answers: [
      { text: "A. Toronto Raptors", correct: true },
      { text: "B. Utah Jazz", correct: false },
      { text: "C. Sacramento Kings", correct: false },
      { text: "D. Los Angeles Lakers", correct: false },
    ],
  },
];
// questions

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// const to pull Id from html

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  // function to pull question to correct place

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

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
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // shows if correct or incorrect
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
// once answer is clicked will display next button

startQuiz();
