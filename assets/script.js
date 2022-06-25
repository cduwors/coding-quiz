


//create function for start button


//hide quizBox and endBox

function takeQuiz(){
    //hide start box and show quiz question box
    document.getElementById("start-box").style.display="none"; //to hide
    document.getElementById("quiz-box").style.display="block"; //to show
    console.log("in the function");




}

function takeQuiz ()

//create question array
// var quizQuestions = {
// 	"question 1": {
// 		question: "Commonly used data types DO Not Include",
// 		answers: {
// 			1: "strings",
// 			2: "booleans",
// 			3: "alerts",
// 			4: "numbers",
// 		},
// 		correct: "booleans",
// 	},

// 	"question 2": {
// 		question:
// 			"The condition in an if/else statement is enclosed with _________.",
// 		answers: {
// 			1: "quotes",
// 			2: "curly brackets",
// 			3: "parenthesis",
// 			4: "square brackets",
// 		},
// 		correct: "parenthesis",
// 	},

// 	"question 3": {
// 		question: "Arrays in JavaScript can be used to store _________.",
// 		answers: {
// 			1: "numbers and strings",
// 			2: "other arrays",
// 			3: "booleans",
// 			4: "all of the above",
// 		},
// 		correct: "all of the above",
// 	},

// 	"question 4": {
// 		question:
// 			"String values must be enclosed within _________ when being assigned to variables.",
// 		answers: {
// 			1: "commas",
// 			2: "curly brackets",
// 			3: "quotes",
// 			4: "parenthesis",
// 		},
// 		correct: "curly brackets",
// 	},

// 	"question 5": {
// 		question:
// 			"A very useful tool used during development and debugging for printing content to the debugger is _________.",

// 		answers: {
// 			1: "JavaScript",
// 			2: "terminal/bash",
// 			3: "for loops",
// 			4: "console.log",
// 		},
// 		correct: "for loops",
// 	},
// };

//start button clicked - hide start info and display first question
document.getElementById("start_button").addEventListener("click", takeQuiz);