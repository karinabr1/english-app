// Passos

// 1 - criar uma variável contendo todas as questões
// 2 - criar uma div com classe questionwrapper 
// 3 - pegar as answers da questão atual e salvar numa variavel
// 4 - criar a div com classe answer
// 5 - criar o input da questão atual
// 6 - criar a label do input da questão atual
// 7 - injetar a questão na div com a classe questionWrapper

function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET", file, true)
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
}

var levelingQuestions = []

readJSON("./levelingQuestions.json", function(text){
  var data = JSON.parse(text)
  levelingQuestions = data.questions
})

function myfunction(){
  // Criando as perguntass
  for (let i = 0; i < levelingQuestions.length; i++) {
    // Criando a div com classe questionWrapper
    var questionWrapperDiv = document.createElement("div")
    questionWrapperDiv.classList.add('questionWrapper') 

    // Pegado a questão atual
    var currentQuestion = levelingQuestions[i]
    console.log(currentQuestion)

    // Pegando as respostas da questão atual
    var currentQuestionAswers = levelingQuestions[i].alternatives
    console.log(currentQuestionAswers) 

    // criando titulo
    var questionParagraphy = document.createElement("p")
    questionParagraphy.innerText = currentQuestion.question

    // injetando titulo na question wrapper
    questionWrapperDiv.appendChild(questionParagraphy)

    // Criando as alternativas
    for (let i = 0; i < currentQuestionAswers.length; i++) {
      // Criando uma div com classe answer
      var answerDiv = document.createElement("div")
      answerDiv.classList.add('answer')

      // Criando o input da aternativa
      var radioInput = document.createElement("input")
      radioInput.type = 'radio'
      radioInput.id = 'answer'+currentQuestionAswers[i].letter
      radioInput.name = 'question'+currentQuestion.id
      radioInput.value = currentQuestionAswers[i].letter

      // Criando label da aternativa
      var answerLabel = document.createElement("label")
      answerLabel.htmlFor = 'answer'+currentQuestionAswers[i].letter
      answerLabel.innerText = currentQuestionAswers[i].answer

      // Injetando input e label na div aswer
      answerDiv.appendChild(radioInput)
      answerDiv.appendChild(answerLabel)

      // Injetando aswerDiv na div questionWrapper
      questionWrapperDiv.appendChild(answerDiv)
    }

    // Pegando a div questions
    var questionsDiv = document.getElementById("questions")

    // Injetando na questionsDiv
    questionsDiv.appendChild(questionWrapperDiv)
  }
}

setTimeout(() => myfunction(), 1000)