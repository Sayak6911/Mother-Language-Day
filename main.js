const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language"],
        correct: 0,
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correct: 0,
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<br>", "<lb>"],
        correct: 1,
    },


     {
        question: "What happen on 16 December in Bangladesh?",
        answers: ["May Day", "Mother Language Day", "Victory Day"],
        correct: 2,
    },
    {
        question: "Which two countries ruled the area that came to be known as Bangladesh in the second half of the 20th century?",
        answers: ["Britain", "Both 1 & 3","Pakistan"],
        correct: 1,
    },
    {
        question: "Which city is called the Healthy City of Bangladesh?",
        answers: ["Chittagong", "Khulna", "Dhaka"],
        correct: 0,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const quizContainer = document.getElementById("quiz-container");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    scoreContainer.classList.add("hide");
    quizContainer.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answersElement.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    scoreElement.innerText = score;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    }
});

restartButton.addEventListener("click", startQuiz);

startQuiz();
