var introEL = document.querySelector('#intro')
var viewEL = document.querySelector('#viewscreen')
var scoreEL = document.querySelector('#score')
var strtButEL = document.querySelector('#start')
var timerEL = document.querySelector('#timer')
var titleEL = document.querySelector('#title')
var a1El = document.querySelector('#answer1')
var a2El = document.querySelector('#answer2')
var a3El = document.querySelector('#answer3')
var a4El = document.querySelector('#answer4')
var initEL = document.querySelector("#initial")
var saveEL = document.querySelector("#save")
var inputData = document.querySelector("#enter-init")
var dashboardEL = document.querySelector("#hs-dashboard")


var players=[]
var score = 0
var clockid
var timeRemaining = 75
var index = 0
var questions = [{
    title: "Who initially played the Joker in Batman: The Dark Knight",
    answers: ["Jared Leto", "Howard Stark", "Heath Ledger", "Christian Bale"],
    solution: "Heath Ledger",

}, {
    title: "Famous family with three super star sisters",
    answers: ["The Brady Bunch", "The Kardashians", "The Wayans", "The Cosbys"],
    solution: "The Kardashians",
}, {
    title: "Who committed the infamous Oscars Slap",
    answers: ["Floyd Mayweather", "Mike Tyson", "Will Smith", "Mr.T"],
    solution: "Will Smith",
}, {
    title: "One of the greatest Comedians of all time, who decided to leave show biz for a decade before doing several specials on Netflix",
    answers: ["Dave Chappelle", "Richard Pryor", "Bill Burr", "Jerry Seinfield"],
    solution: "Dave Chappelle",
}, {
    title: "This rapper grew up in Ohio and became a hiphop star after blending rap and rock music to create a new sound",
    answers: ["Shakira", "John Legend", "Kendrick Lamar", "Trippie Redd"],
    solution: "Trippie Redd",
}, {  //duplicate object to make nextquestion loop work
    title: "This rapper grew up in Ohio and became a hiphop star after blending rap and rock music to create a new sound",
    answers: ["Shakira", "John Legend", "Kendrick Lamar", "Trippie Redd"],
    solution: "Trippie Redd",
}]
console.log(questions[index].solution)
console.log(a1El.textContent)
function countdown() {
    timerEL.textContent = timeRemaining
    timeRemaining--
    if(timeRemaining===0){
        timeRemaining = ""
        viewEL.classList.add("hide")
        initEL.classList.remove("hide")
    }


}

function startGame() {
    viewEL.classList.remove("hide")
    introEL.classList.add("hide")
    clockid = setInterval(countdown, 1000)
    displayQuestion()
    console.log(a1El.textContent)


}
function displayQuestion() {
    titleEL.textContent = questions[index].title
    a1El.textContent = questions[index].answers[0]
    a2El.textContent = questions[index].answers[1]
    a3El.textContent = questions[index].answers[2]
    a4El.textContent = questions[index].answers[3]
    

}
function nextQuestion(event){
    
    
    var answer = questions[index].solution
    var choiceID = event.target.id
    var choice = document.getElementById(choiceID).textContent
    console.log(choice)
    console.log(answer)

    if( choice == answer){
        alert("Correct");
        score = timeRemaining + score
        scoreEL.textContent=score
        index ++
        displayQuestion()
        
    }else{
        score=score-15
        scoreEL.textContent=score
    }
    
    

    

    if (index === 5) {
        viewEL.classList.add("hide")
        initEL.classList.remove("hide")
        

        
    }
    
    
}

function displayHighscore() {
    localStorage.setItem(inputData.value,score)
    var player = localStorage.getItem(inputData.value,score)
    players.push(player)
    for(i=0;i<players.length;i++){
        dashboardEL.textContent = inputData.value + "" + player


    }
    
    initEL.classList.add("hide")
    dashboardEL.classList.remove('hide')
    timeRemaining=""
    
}


saveEL.addEventListener('click', displayHighscore)
a1El.addEventListener('click', nextQuestion)
a2El.addEventListener('click', nextQuestion)
a3El.addEventListener('click', nextQuestion)
a4El.addEventListener('click', nextQuestion)
strtButEL.addEventListener('click', startGame)