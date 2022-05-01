// declare time in a variable
let Time = 60;

// targeting start button element
const quizStartBnt = document.getElementById("quizStartBtn");

// declaring question title, answers and correct answer as objects in an array
const questions = [
  //question 1
  {
    questionTitle: "What does HTML stand for in coding?",
    answers: [
      "Healthcare Technology management Layout",
      "Hey That’s My Lunch",
      "Hypertext Markup language",
      "How To Marinate Lemons",
    ],
    correctAnswer: "Hypertext Markup language",
  },
  //question 2
  {
    questionTitle: "What is the correct CSS syntax",
    answers: [
      "Header background: {black;}",
      "Header {background: black;}",
      "{header background: black};",
      "Header (background: black;)",
    ],
    correctAnswer: "Header {background: black;}",
  },
  //question 3
  {
    questionTitle: "How do you insert a comment in CSS?",
    answers: [
      "//  This way //",
      "“ This way”",
      "// This way ",
      "*/ This way */ ",
    ],
    correctAnswer: "*/ This way */ ",
  },
  //question 4
  {
    questionTitle:
      "In an HTML file where is the correct place to insert JavaScript tag?",
    answers: [
      "In the header section",
      "At the start of the body section",
      "At the bottom of the body section",
      "In the footer section",
    ],
    correctAnswer: "At the bottom of the body section",
  },
  //question 5
  {
    questionTitle:
      "Which of the following is a type of way to target HTML elements in CSS?",
    answers: [
      "Using a class selector",
      "Using a variable name",
      "Using a method",
      "Using a list",
    ],
    correctAnswer: "Using a class selector",
  },
  //question 6
  {
    questionTitle: "How do write variable names in JavaScript",
    answers: [
      "All letters in capitals without spacing between words",
      "All letters in lowercase with spacing between words",
      "First letter in uppercase, with spaces and first letter of subsequent words uppercase",
      "First letter in lowercase, no spaces and first letter of subsequent words uppercase",
    ],
    correctAnswer:
      "First letter in lowercase, no spaces and first letter of subsequent words uppercase",
  },
  //question 7
  {
    questionTitle: "Which operator is used to assign a value to an operator?",
    answers: ["+", "=", "*", "$"],
    correctAnswer: "=",
  },
];

const onLoad = () => {
  // initialise local storage
  // check if high scores exists in LS
  // if false then set high scores to empty array in LS
  //create to initiate function to start quiz with the click of a button
};

const appendForm = () => {};

let whatQuestionAreWeOn = 0;

const renderQuestionSection = () => {
  let getQuestions = "";
  // make a loop and that keep adding the the HTML onto the getQuestions and then add to the html (with a template literal)
  console.log(`we are on ${whatQuestionAreWeOn}`);
  questions[whatQuestionAreWeOn].answers.forEach((answer) => {
    getQuestions += `<li class="answer-list">${answer}</li>`;
  });

  // targeting the main section
  const mainSection = document.getElementById("main-tag");
  //create question section in the main section
  const questionSection = document.createElement("section");
  // append section to main section
  questionSection.innerHTML = `<section id="question-section">
  <h1 class="question-title">${questions[whatQuestionAreWeOn].questionTitle}</h1>
  <ul class="answers">${getQuestions}</ul>
  <div id="render-alert" class="render-alert">
    Alert message here: Correct or incorrect Answer
  </div>
</section> `;
  //append question section on to main section
  mainSection.appendChild(questionSection);
  // add click event listener on #question-section
  let answers = document.querySelectorAll(".answer-list");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      mainSection.innerHTML = "";
      whatQuestionAreWeOn++;
      renderQuestionSection(whatQuestionAreWeOn);
    });
  });
  //if get questions is equals to 7 append form
  if (getQuestions === 7) {
    return;
    //if get questions is equals to 7 append form
  }
};

const startTimer = () => {
  //target the main section
  const mainSection = document.getElementById("main-tag");
  // creating a div for timer section
  const timerSection = document.createElement("section");
  //using HTML to build the timer
  timerSection.innerHTML = `<section>
    <div id="timerStartBtn" class="timer-div">
      Timer Countdown : <span id="timer-span">${60} seconds</span>
    </div>
  </section>`;
  // append timer section to main section
  mainSection.appendChild(timerSection);

  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  renderQuestionSection();

  // setInterval of 1000ms (1s)
};

const startQuiz = () => {
  //remove the start section
  const removeStartSection = () => {
    //targets the main tag element
    const startSection = document.getElementById("start-quiz-section");
    //removes the start section
    startSection.remove();
  };
  // call the remove start section function
  removeStartSection();
  //call the start timer function
  startTimer();
};

// add start button click event listener
quizStartBnt.addEventListener("click", startQuiz);
