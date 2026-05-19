const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "London"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Mars"],
    answer: "Jupiter"
  },
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');

let CurrentQuestion = 0
let score = 0
let answered = false


function loadQuestion() {
  const current = questions[CurrentQuestion]
  questionElement.textContent = current.question
  optionsElement.innerHTML = ''
  current.options.forEach(option => {
    const btn = document.createElement('button')
    btn.textContent = option
    btn.addEventListener('click', () =>{
      if (!answered) {
        checkAnswer(option)
        answered = true
        btn.disabled = true
      }
    })
    optionsElement.appendChild(btn)
  })
  nextButton.style.display = 'none'
}


function checkAnswer(selected) {
  if (selected === questions[CurrentQuestion].answer) {
    score++
    resultElement.textContent = `correct!🤩 your score is: ${score} / ${CurrentQuestion + 1}`      
  }else{
    resultElement.textContent = `wrong! 🤐 your score is: ${score} / ${CurrentQuestion + 1}`    
  }
  nextButton.style.display = "block"
}

function nextQuestion() {
  CurrentQuestion++
  answered = false

  if (CurrentQuestion < questions.length) {
    loadQuestion()
  }else{
    showResult()
  }
}

function showResult() {
questionElement.textContent =''
optionsElement.innerHTML =''
nextButton.style.display= 'none'
restartButton.style.display = 'block'
resultElement.textContent = `you final score is ${score} of ${questions.length}`
}

function restartGame() {
CurrentQuestion = 0
score = 0
answered = false
loadQuestion()
resultElement.textContent = ''
restartButton.style.display = 'none'
}

nextButton.addEventListener('click', () => nextQuestion())
restartButton.addEventListener('click', ()=> restartGame() )

loadQuestion()