var startButton = document.getElementById("startButton");
// var questionList = document.getElementById("quizQuestion");
var questionNumber = 0;
var answerList = document.getElementById("answerList");
var answerButton = console.log("page started");
var timerEl = document.getElementById("timer");
var timeLeft = 100;
var savedTime = document.getElementById("#timer");
var nextQuestion = document.getElementById("nextButton");
var resultCon = document.getElementById("results");
var finishButton = document.getElementById("finishButton");
var runTime = true;
const highScoreString = localStorage.getItem("playerScore");
const highScores = JSON.parse(highScoreString) || [];

//create event listener for start button that activates change to quiz questions (see bottom line)

function showQuiz() {
	//clear the div startBox
	//hide start box and show quiz question box
	document.getElementById("header-items").style.display = "block";
	document.getElementById("startBox").style.display = "none";
	document.getElementById("quizBox").style.display = "block";
	document.getElementById("endBox").style.display = "none";
	document.getElementById("finalBox").style.display = "none";

	console.log("In ShowQuiz function");
	timer();
	showQuestion();

	//start timer

	// document.querySelector("#quizQuestion").innerHTML =
	// 	quizQuestions[i].question;
}
//show question with buttons
function showQuestion() {
	var title = document.getElementById("quizQuestion");
	title.textContent = quizQuestions[questionNumber].question;
	console.log(title);
	answerList.textContent = "";

	for (let i = 0; i < 4; i++) {
		var button = document.createElement("button");
		// button.classList("answerButton");
		var answers = quizQuestions[questionNumber].answers[i];
		button.textContent = answers;
		answerList.appendChild(button);
		//event listener for question answer
		button.addEventListener("click", function (event) {
			if (
				event.target.textContent ===
				quizQuestions[questionNumber].questionAnswer
			) {
				resultCon.textContent = "CORRECT!";
				console.log("correct");
			} else {
				resultCon.textContent = "SORRY, THAT IS INCORRECT.";
				//subtract 10 seconds from timer
				timeLeft -= 10;
				console.log("incorrect");
			}
			//need to clear textContent
			// document.querySelector("#quizQuestion", "AnswerList");
			questionNumber++;
			if (questionNumber === quizQuestions.length) {
				finishButton.style.display = "block";
				//move on to next page showing results
				console.log(saveTime);
			} else {
				nextButton.style.display = "block";
			}
		});
	}
}

function timer() {
	// sets the function for the time interval variable
	var timeInterval = setInterval(function () {
		// creates if/else statement based on the time left:
		if (timeLeft > 0 && runTime) {
			timerEl.textContent = "Timer: " + timeLeft;
			timeLeft--;
		} // set timer to stop at 0
		else if (runTime) {
			clearInterval(timeInterval);
			timerEl.textContent = "Time is up!";
			showResults();
		}
	}, 1000);
}
function saveTime(timeLeft) {
	localStorage.setItem("timer", JSON.stringify(timer));
	console.log(timeLeft);
	console.log("made it to saveTime function");
}

function showResults() {
	//hide start box, quiz, show endBox, hide finalBox
	document.getElementById("startBox").style.display = "none";
	document.getElementById("quizBox").style.display = "none";
	document.getElementById("endBox").style.display = "block";
	document.getElementById("finalBox").style.display = "none";
	document.getElementById("timer").innerHTML = "";

	// clearInterval(timer);
	runTime = false;
	//save time to localStorage
	saveTime(timeLeft);

	document.getElementById("quizResult").innerHTML =
		"Your final score is " + timeLeft;
	document.getElementById("scoreSave").innerHTML =
		'Enter initials: <input type="text" id="initials">';
	//add data to local storage

	console.log("in results function");
}

function finalBox() {
	var playerId = document.getElementById("initials").value;
	var newScore = {
		initials: playerId,
		score: timeLeft,
	};

	document.getElementById("startBox").style.display = "none";
	document.getElementById("quizBox").style.display = "none";
	document.getElementById("endBox").style.display = "none";
	document.getElementById("finalBox").style.display = "block";

	document.getElementById("header-items").style.display = "none";

	highScores.push(newScore);

	localStorage.setItem("playerScore", JSON.stringify(highScores));
	showHighScores();
}

function showHighScores() {
	var highScoreList = document.getElementById("highScoreList");
	localStorage.getItem("playerScore");
	for (let i = 0; i < highScores.length; i++) {
		// Create a new element h2 in Js
		//give the textcontent of that element the highscore values
		//append that element to the highscorelist
		var HighScoreListItem = document.createElement("h2");
		HighScoreListItem.textContent = `${highScores[i].initials} : ${highScores[i].score} `;
		highScoreList.appendChild(HighScoreListItem);
	}
}

function reset() {
	runTime = true;
	timeLeft = 100;
	questionNumber = 0;
	window.location.reload();
}

function clearHighScores() {
	localStorage.clear();
	window.location.reload();
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

//button listener to go to next question
nextButton.addEventListener("click", function () {
	nextButton.style.display = "none";
	resultCon.textContent = "";
	showQuestion();
});

finishButton.addEventListener("click", function () {
	finishButton.style.display = "none";
	resultCon.textContent = "";
	showResults();
});

var submitScore = document.getElementById("submitScore");
submitScore.addEventListener("click", finalBox);

var resetButton = document.getElementById("restartButton");
resetButton.addEventListener("click", reset);

var clearScoresButton = document.getElementById("clearScoresButton");
clearScoresButton.addEventListener("click", clearHighScores);
