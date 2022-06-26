var startButton = document.getElementById("startButton");
var questionList = document.getElementById("quizQuestion");
var questionNumber = 0;
var answerList = document.getElementById("answerList");
var answerButton = console.log("page started");
var timerEl = document.getElementById("timer");

//create event listener for start button that activates change to quiz questions (see bottom line)

function showQuiz() {
	//clear the div startBox
	//hide start box and show quiz question box
	document.getElementById("startBox").innerHTML = "";
	document.getElementById("quizBox").style.display = "block";
	document.getElementById("endBox").innerHTML = "";
	document.getElementById("finalBox").innerHTML = "";

	console.log("In ShowQuiz function");
	timer();
	showQuestion();

	//start timer

	// document.querySelector("#quizQuestion").innerHTML =
	// 	quizQuestions[i].question;
}
//show question with buttons
function showQuestion() {
	var title = document.createElement("h1");
	title.textContent = quizQuestions[questionNumber].question;
	questionList.appendChild(title);
	console.log(title);
	for (let i = 0; i < 4; i++) {
		var button = document.createElement("button");
		// button.classList("answerButton");
		var answers = quizQuestions[questionNumber].answers[i];
		button.textContent = answers;
		answerList.appendChild(button);
		//event listener for question answer
		button.addEventListener("click", function (event) {
			var results = document.createElement("h1");
			if (
				event.target.textContent ===
				quizQuestions[questionNumber].questionAnswer
			) {
				results.textContent = "CORRECT!";
				console.log("correct");
			} else {
				results.textContent = "SORRY, THAT IS INCORRECT.";
				console.log("incorrect");
			}
			answerList.appendChild(results);
			//need to clear textContent
			document.querySelector("#quizQuestion", "AnswerList");

			questionNumber++;
			showQuestion();
		});
	}
}

function timer() {
	var timeLeft = "75";

	// sets the function for the time interval variable
	var timeInterval = setInterval(function () {
		// creates if/else statement based on the time left:
		if (timeLeft > 0) {
			timerEl.textContent = "Timer: " + timeLeft;
			timeLeft--;
		} // set timer to stop at 0
		else {
			clearInterval(timeInterval);
			timerEl.textContent = "Time is up!";
			displayMessage();
		}
	}, 1000);
}

//create question array
const quizQuestions = [
	{
		question: "Commonly used data types DO Not Include:",
		answers: ["strings", "booleans", "alerts", "numbers"],
		questionAnswer: "booleans",
	},
	{
		question:
			"The condition in an if/else statement is enclosed with _________.",
		answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
		questionAnswer: "parenthesis",
	},
	{
		question: "Arrays in JavaScript can be used to store _________.",
		answers: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		questionAnswer: "all of the above",
	},
	{
		question:
			"String values must be enclosed within _________ when being assigned to variables.",
		answers: ["commas", "curly brackets", "quotes", "parenthesis"],
		questionAnswer: "curly brackets",
	},
	{
		question:
			"A very useful tool used during development and debugging for printing content to the debugger is _________.",
		answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
		questionAnswer: "for loops",
	},
];

//start button clicked - hide start info and display first question
startButton.addEventListener("click", showQuiz);
