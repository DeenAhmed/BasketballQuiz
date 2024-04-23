const questions = [
  {
    question: "Who has scored the most points in NBA history?",
    answers: [
      { text: "Michael Jordan", correct: false },
      { text: "Lebron James", correct: true },
      { text: "Kareem Abdul-Jabbar", correct: false },
      { text: "Wilt Chamberlain", correct: false },
    ],
  },
  {
    question: "Which NBA Team has the most Championship titles?",
    answers: [
      { text: "Chicago Bulls", correct: false },
      { text: "Los Angeles Lakers", correct: true },
      { text: "Golden State Warriors", correct: false },
      { text: "San Antiono Spurs", correct: false },
    ],
  },
  {
    question: "Who has won the most NBA Championship titles?",
    answers: [
      { text: "Michael Jordan", correct: false },
      { text: "Larry Bird", correct: false },
      { text: "Tim Duncan", correct: false },
      { text: "Robert Horry", correct: true },
    ],
  },
  {
    question: "Which player has the most MVPs?",
    answers: [
      { text: "Lebron James", correct: false },
      { text: "Kareem Abdul-Jabbar", correct: true },
      { text: "Bill Russell", correct: false },
      { text: "Michael Jordan", correct: false },
    ],
  },
  {
    question: "Which of these NBA franchises has never relocated?",
    answers: [
      { text: "Toronto Raptors", correct: true },
      { text: "Utah Jazz", correct: false },
      { text: "Sacramento Kings", correct: false },
      { text: "Los Angeles Lakers", correct: false },
    ],
  },
  {
    question: "Who has scored the most points in a single NBA game?",
    answers: [
      { text: "Kobe Bryant", correct: false },
      { text: "Wilt Chamberlain", correct: true },
      { text: "Michael Jordan", correct: false },
      { text: "LeBron James", correct: false },
    ],
  },
  {
    question: "Which NBA player holds the record for the most career assists?",
    answers: [
      { text: "Magic Johnson", correct: false },
      { text: "John Stockton", correct: true },
      { text: "Steve Nash", correct: false },
      { text: "Chris Paul", correct: false },
    ],
  },
  {
    question: "Who is known as 'The Big Fundamental' in basketball?",
    answers: [
      { text: "Shaquille O'Neal", correct: false },
      { text: "Tim Duncan", correct: true },
      { text: "Karl Malone", correct: false },
      { text: "Hakeem Olajuwon", correct: false },
    ],
  },
  {
    question: "Which player has won the most NBA championships?",
    answers: [
      { text: "A. Michael Jordan", correct: false },
      { text: "B. Bill Russell", correct: true },
      { text: "C. Magic Johnson", correct: false },
      { text: "D. Kareem Abdul-Jabbar", correct: false },
    ],
  },
  {
    question:
      "Who was the first player to be drafted straight out of high school to the NBA?",
    answers: [
      { text: "Kevin Garnett", correct: true },
      { text: "Kobe Bryant", correct: false },
      { text: "LeBron James", correct: false },
      { text: "Dwight Howard", correct: false },
    ],
  },
  {
    question: "Which NBA team has won the most championships?",
    answers: [
      { text: "Los Angeles Lakers", correct: false },
      { text: "Boston Celtics", correct: true },
      { text: "Chicago Bulls", correct: false },
      { text: "Golden State Warriors", correct: false },
    ],
  },
  {
    question: "Who is the only player to win NBA MVP with a losing record?",
    answers: [
      { text: "LeBron James", correct: false },
      { text: "Russell Westbrook", correct: true },
      { text: "Kobe Bryant", correct: false },
      { text: "Stephen Curry", correct: false },
    ],
  },
  {
    question:
      "Which player holds the record for the highest career points per game average in the NBA?",
    answers: [
      { text: "Michael Jordan", correct: false },
      { text: "Wilt Chamberlain", correct: true },
      { text: "LeBron James", correct: false },
      { text: "Kareem Abdul-Jabbar", correct: false },
    ],
  },
  {
    question: "Who is the NBA's all-time leader in three-pointers made?",
    answers: [
      { text: "Ray Allen", correct: false },
      { text: "Reggie Miller", correct: false },
      { text: "Stephen Curry", correct: true },
      { text: "Klay Thompson", correct: false },
    ],
  },
  {
    question: "Who was the shortest player ever to play in the NBA?",
    answers: [
      { text: "Spud Webb", correct: false },
      { text: "Muggsy Bogues", correct: true },
      { text: "Nate Robinson", correct: false },
      { text: "Earl Boykins", correct: false },
    ],
  },
  {
    question:
      "Who holds the record for the most rebounds in a single NBA game?",
    answers: [
      { text: "Bill Russell", correct: false },
      { text: "Wilt Chamberlain", correct: true },
      { text: "Moses Malone", correct: false },
      { text: "Dennis Rodman", correct: false },
    ],
  },
  {
    question:
      "Who was the first foreign-born player to be drafted first overall in the NBA?",
    answers: [
      { text: "Yao Ming", correct: false },
      { text: "Andrea Bargnani", correct: true },
      { text: "Dirk Nowitzki", correct: false },
      { text: "Pau Gasol", correct: false },
    ],
  },
  {
    question: "Which NBA team won the first-ever NBA Championship?",
    answers: [
      { text: "Boston Celtics", correct: true },
      { text: "Minneapolis Lakers", correct: false },
      { text: "Chicago Stags", correct: false },
      { text: "New York Knicks", correct: false },
    ],
  },
  {
    question: "Who is the youngest player to score 10,000 points in the NBA?",
    answers: [
      { text: "LeBron James", correct: false },
      { text: "Kevin Durant", correct: true },
      { text: "Kobe Bryant", correct: false },
      { text: "Carmelo Anthony", correct: false },
    ],
  },
  {
    question:
      "Who holds the record for the most blocks in a single NBA season?",
    answers: [
      { text: "Hakeem Olajuwon", correct: false },
      { text: "Mark Eaton", correct: true },
      { text: "Dikembe Mutombo", correct: false },
      { text: "Shaquille O'Neal", correct: false },
    ],
  },
];
// import questions from "./questions.js";
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
  console.log(shuffledQuestions);

  showQuestion();
}

/**
 * Shows the current question
 */
function showQuestion() {
  resetState();
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  // function to pull question to correct place

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

// creates button for each answer
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
      title: "Correct Answer!",
      showConfirmButton: false,
      timer: 2000,
    });
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "You're shit",
      showConfirmButton: false,
      timer: 2000,
    });
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
shuffledQuestions;
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
