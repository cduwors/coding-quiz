var startButton = document.getElementById("startButton");

//create function for start button

//hide quizBox and endBox

function showQuiz() {
	//clear the div startBox
	document.getElementById("startBox").innerHTML = "";
	document.getElementById("quizBox").style.display = "block";
	document.getElementById("endBox").innerHTML = "";
	document.getElementById("finalBox").innerHTML = "";

	//start timer
	//loop through questions
	for (let i = 0; i < quizQuestions.length; i++) {
        document.getElementById("quizQuestion") = 

	}

	//hide start box and show quiz question box
	// document.getElementById("startBox").style.display="none"; //to hide
	// document.getElementById("quizBox").style.display="block"; //to show
	console.log("in the function");
}
//compare and check answer choice - display Correct! or Wrong!
//if wrong then subtract 10 seconds from timer
function compareAnswers() {}

//create question array
var quizQuestions = [
	{
		question1: "Commonly used data types DO Not Include:",
		answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers",
		questionAnswer: "booleans",
	},
	{
		question2: "The condition in an if/else statement is enclosed with _________.",
		answer1: "1. quotes",
        answer2: "2. curly brackets",
		answer3: "3. parenthesis",
		answer4: "4. square brackets",
		questionAnswer: "parenthesis",
	},
	{
		question3: "Arrays in JavaScript can be used to store _________.",
		answer1: "1. numbers and strings",
		answer2: "2. other arrays",
		answer3: "3. booleans",
		answer4: "4. all of the above",
		questionAnswer: "all of the above",
	},
	{
		question4: "String values must be enclosed within _________ when being assigned to variables.",
		answer1: "1. commas", 
        answer2: "2. curly brackets", 
        answer3: "3. quotes", 
        answer4: "4. parenthesis",
		questionAnswer: "curly brackets",
	},
	{
		question5: "A very useful tool used during development and debugging for printing content to the debugger is _________.",
		answer1: "1. JavaScript",
        answer2: "2. terminal/bash",
		answer3: "3. for loops",
		answer4: "4. console.log",
		questionAnswer: "for loops",
	},
];

//start button clicked - hide start info and display first question
startButton.addEventListener("click", showQuiz);
