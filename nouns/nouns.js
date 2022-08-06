dict = [
    {
        question: "home",
        answer: "hai"
    },
    {
        question: "shop",
        answer: "mise"
    },
    {
        question: "movie",
        answer: "eiga"
    },
    {
        question: "school",
        answer: "gakkoui"
    },
    {
        question: "car",
        answer: "kuruma"
    },
    {
        question: "town",
        answer: "machi"
    },
    {
        question: "music",
        answer: "ongaku"
    },
    {
        question: "family",
        answer: "kazoku"
    },
    {
        question: "hometown",
        answer: "shusshin"
    },
    {
        question: "bathroom",
        answer: "toire"
    },
  
]

var score = 0
var countquestion = 0
questionlist = []

displayScore = document.getElementById("score")

btnContainer = document.getElementById("buttonCon")
homeContainer = document.getElementById("home")
outputContainer = document.getElementById("finalOutput")


var choices = document.querySelectorAll(".btn-answer")
question = document.getElementById("question")
finalScore = document.getElementById("finalScore")

btnEnd = document.getElementById("end")
btnEnd.addEventListener("click", ()=>{
    homeContainer.style.display = "none"
    outputContainer.style.display = "block"
    finalScore.innerText = score
})

backBtn = document.getElementById("btn-back")
backBtn.addEventListener("click", ()=>{
    window.location.href = "../index.html"
})

for(z = 0; z < choices.length; z++){
    choices[z].addEventListener("click", function(){
        userAnswer = this.textContent
        checking(userAnswer)
    })
}

function pickRandomQuestions(dictionary) {
    return [...dictionary].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 4)
}

function nextQuestion(){
    document.body.style.backgroundColor = "#64c896";
    if(countquestion != 5){
        set = pickRandomQuestions(dict)
        for(a = 0; a < choices.length; a++) {
            choices[a].innerText = set[a].answer 
            questionlist.push(set[a].question)
        }
        
        question.innerText = questionlist[Math.floor(Math.random() * questionlist.length)]
          
        displayScore.innerText = score
        
    }if(countquestion == 5){
        homeContainer.style.display = "none"
        outputContainer.style.display = "block"
        finalScore.innerText = score
    }
}

function checking(userAnswer){
    questionFinal = question.textContent
    answerCorrect = dict.find(obj => obj.question === questionFinal).answer
    countquestion +=1
    if(answerCorrect == userAnswer){
        score += 100
        questionlist.length = 0
        nextQuestion()
    }else{
        console.log("Wrong")
        document.body.style.backgroundColor = "#FF3232";
        questionlist.length = 0
        setTimeout(nextQuestion, 1000)
    }
}






window.onload = nextQuestion()

