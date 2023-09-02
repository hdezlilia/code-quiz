function byId (id) {
    return document.getElementById(id);
}

// count down timer from 75 seconds 
var timeLeft = 75;

var startScreen = byId('startScreen');
var gameScreen = byId('gameScreen');
var startBtn = byId('startQuiz');
var quizQuestion = byId('quizQuestion');

var ans1 = byId('ans1');
var ans2 = byId('ans2');
var ans3 = byId('ans3');
var ans4 = byId('ans4');
var ans5 = byId('ans5');

var feedBack = byId('feedBack');
var endScreen = byId('endScreen');
var initialSubmit = byId('initialSubmit');
var initial = byId('initial');
var highScoreScreen = byId ('highScoreScreen');
var highScore= byId(highScore);

// quiz question
var questionIndex = 0;
var questions = [
    {
        question: 'Commonly used data types do not include:' ,
        ans1:'strings',
        ans2:'booleans',
        ans3:'alerts',
        ans4:'numbers',
        correct:'alerts',

    }, 
    {
        question: 'The condition in an if/else statement is enclosed withing ________:' ,
        ans1:'quotes',
        ans2:'curly brackets',
        ans3:'parenthesis',
        ans4:'square brackets',
        correct:'parenthesis',

    }, 
    {
        question: 'Arrays in JavaScript can be ised to store:' ,
        ans1:'numbers and string',
        ans2:'other arrays',
        ans3:'booleans',
        ans4:'all of the above',
        correct:'all of the above ',

    }, 
    {
        question: 'String values must be enclosed within _______ when being assigned to variables:' ,
        ans1:'commas',
        ans2:'curly brackets',
        ans3:'quotes',
        ans4:'parentheses',
        correct:'curly brackets',

    }, 
    {
        question: 'A very useful tool used sduring development and debugging for printing content to the deb ugger is:' ,
        ans1:'javascript',
        ans2:'terminal/bash',
        ans3:'for logos',
        ans4:'console.log',
        correct:'console.log',

    },

];

// displays first quiz question
function startQuiz() {
    var mainScreen = document.getElementById('mainScreen');
     mainScreen.classList.add('hidden');
     gameScreen.classList.remove('hidden');
     btn1.classList.remove('hidden');
     btn2.classList.remove('hidden');
     btn3.classList.remove('hidden');
     btn4.classList.remove('hidden');
    displayNextQuestion();
}

// display the following test question 
function displayNextQuestion() {
    var currentQuestion= questions[questionIndex];
    question.textContent = currentQuestion.question
    ans1.textContent = currentQuestion.ans1;
    ans2.textContent = currentQuestion.ans2;
    ans3.textContent = currentQuestion.ans3;
    ans4.textContent = currentQuestion.ans4;
    if (questionIndex === 3) {
        endQuiz()
    }
}

// starting timer
function timer() {
    timeInterval = setInterval (function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        } else {
            endQuiz();
        }
    }, 1000)
}

// start quiz timer 
startBtnEl.addEventListener('click', function() {
    timer();
    startQuiz();
});


// stop timer and display grade 
function endQuiz () {
    clearInterval(timeInterval);
    gameScreen.classList.add('hidden');
    btn1.classList.add('hidden');
    btn2.classList.add('hidden');
    btn3.classList.add('hidden');
    btn4.classList.add('hidden');

    endTitle.classList.remove('hidden');
    initial.classList.remove('hidden');
    initialSubmit.classList.remove('hidden');
    endScreen.classList.remove('hidden');
}
// store users score fand initial + remainig time left 
function saveScore () {
    var savedScore = JSON.parse(localStorage.getItem('score')) || []
    var scoreObj = {
        initial: initial.ariaValueMax, 
        score: timeLeft
    };

    savedScores.push(scoreObj)

    localStorage.setitem
}