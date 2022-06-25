var startButton = document.getElementById("startButton");

//create function for start button

//hide quizBox and endBox

function showQuiz() {
	//clear the div startBox
    //start timer
	//loop through questions

	//hide start box and show quiz question box
	// document.getElementById("startBox").style.display="none"; //to hide
	// document.getElementById("quizBox").style.display="block"; //to show
	console.log("in the function");
}
//compare and check answer choice - display Correct! or Wrong!
//if wrong then subtract 10 seconds from timer
function compareAnswers() {
    
}

//create question array
var quizQuestions = [
	{
		question1: "Commonly used data types DO Not Include:",
		choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
		answer: "booleans",
	},
	{
		question2:
			"The condition in an if/else statement is enclosed with _________.",
		choices: [
			"1. quotes",
			"2. curly brackets",
			"3. parenthesis",
			"4. square brackets",
		],
		answer: "parenthesis",
	},
	{
		question3: "Arrays in JavaScript can be used to store _________.",
		choices: [
			"1. numbers and strings",
			"2. other arrays",
			"3. booleans",
			"4. all of the above",
		],
		answer: "all of the above",
	},
	{
		question4:
			"String values must be enclosed within _________ when being assigned to variables.",
		choices: [ 
            "1. commas", 
            "2. curly brackets", 
            "3. quotes", 
            "4. parenthesis",
        ],
		answer: "curly brackets",
	},
	{
		question5:
			"A very useful tool used during development and debugging for printing content to the debugger is _________.",
		choices: [
			"1. JavaScript",
			"2. terminal/bash",
			"3. for loops",
			"4. console.log",
		],
		answer: "for loops",
	},
];

//start button clicked - hide start info and display first question
startButton.addEventListener("click", showQuiz);
