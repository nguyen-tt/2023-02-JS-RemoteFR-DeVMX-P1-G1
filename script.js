//* DOM Variables */
const modalStartButton = document.querySelector(".modal-start-button");
const buttonNext = document.querySelector("#button-next");
const progress = document.querySelector(".progress");
const timerBar = document.querySelector(".timer-bar");
const screenQuestion = document.querySelector(".screen-score");
const answersButton = document.querySelectorAll(".answers-container button");
const scoreTitle = document.querySelector(".scoreTitle");
const scoreNumber = document.querySelector(".scoreNumber");
const smiley = document.querySelector("#smiley");
const interro = document.querySelector(".interro");
const about = document.querySelector(".about");

const questionText = document.querySelector("h2");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

const orderedQuestionsList = [
  {
    questionId: 1,
    questionText:
      "En combien d'arrondissements municipaux la ville de Paris est-elle divisée ?",
    answer1: "16",
    answer2: "18",
    answer3: "20",
    answer4: "22",
    correctAnswer: "answer3",
  },
  {
    questionId: 2,
    questionText:
      "Lequel de ces surnoms est souvent donné à la ville de Paris ?",
    answer1: "La Cité des Anges",
    answer2: "La Nouvelle Rome",
    answer3: "La Ville Lumière",
    answer4: "Le Paradis des Souris",
    correctAnswer: "answer3",
  },
  {
    questionId: 3,
    questionText:
      "Quel aéroport francilien est situé à 10 km au sud de Paris ?",
    answer1: "Mérignac",
    answer2: "Orly",
    answer3: "Aéroport Charles-de-Gaulle",
    answer4: "Beauvais",
    correctAnswer: "answer2",
  },
  {
    questionId: 4,
    questionText:
      "Dans quel quartier est situé le point culminant de la capitale française ?",
    answer1: "Montmartre",
    answer2: "Opéra",
    answer3: "Le Marais",
    answer4: "Vaugirard",
    correctAnswer: "answer1",
  },
  {
    questionId: 5,
    questionText:
      "Quelle est la plus large des avenues de la voirie parisienne ?",
    answer1: "Avenue Matignon",
    answer2: "Avenue de Neuilly",
    answer3: "Avenue des Champs Elysées",
    answer4: "Avenue Foch",
    correctAnswer: "answer4",
  },
  {
    questionId: 6,
    questionText: "Quel est le plus grand cimetière de Paris intramuros ?",
    answer1: "Montparnasse",
    answer2: "Belleville",
    answer3: "Père-Lachaise",
    answer4: "Montmartre",
    correctAnswer: "answer3",
  },
  {
    questionId: 7,
    questionText:
      "Quelles célèbres fontaines furent implantées en premier à Paris ?",
    answer1: "Wallace",
    answer2: "Morris",
    answer3: "Barnett",
    answer4: "Miller",
    correctAnswer: "answer1",
  },
  {
    questionId: 8,
    questionText:
      "Quelle étendue boisée est située dans le 16e arrondissement de Paris ?",
    answer1: "Bois de Boulogne",
    answer2: "Parc des Buttes Chaumont",
    answer3: "Bois de Vincennes",
    answer4: "Parc Monceau",
    correctAnswer: "answer4",
  },
  {
    questionId: 9,
    questionText: "Quel est le plus ancien hôpital de la capitale française ?",
    answer1: "Hôtel-Dieu",
    answer2: "Hôpital Alphonse Gardie",
    answer3: "Hôpital Raymond Sans",
    answer4: "Hôpital de la Pitié",
    correctAnswer: "answer1",
  },
  {
    questionId: 10,
    questionText: "Comment écrire le prénom de notre cher formateur",
    answer1: "Benoix",
    answer2: "Benoit",
    answer3: "Benoist",
    answer4: "Benoït",
    correctAnswer: "answer3",
  },
];

//* Shuffle All questions
const questionsList = orderedQuestionsList.sort(() => 0.5 - Math.random());

let runningQuestion = -1;
let scoreResult = 0;
let tempNumberQuestion = 1;
let questionTime = 25; // 25s
let count = 0;

// //* Loading page Modal

const modal = document.querySelector(".modal");
timerBar.style.display = "none";
scoreTitle.style.display = "none";
scoreNumber.style.display = "none";
screenQuestion.style.display = "none";

//* Close modal and show first question on the screen
modalStartButton.addEventListener("click", () => {
  modal.classList.add("modal-hidden");
  timerBar.style.display = "block";
  scoreTitle.style.display = "block";
  scoreNumber.style.display = "block";
  screenQuestion.style.display = "block";
  screenQuestion.innerHTML = `${tempNumberQuestion}/${questionsList.length}`;
  nextQuestion();
});

const validateQuestion = (answer) => {
  const questionOnScreen = questionsList[runningQuestion];
  const correctButton = document.querySelector(
    `.${questionOnScreen.correctAnswer}`
  );
  if (answer.value === questionOnScreen.correctAnswer) {
    scoreIncrementation();
  }
  answersButton.forEach((button) => {
    button.style.backgroundColor = "#c96464";

    //* Disable answers buttons
    button.disabled = true;
  });
  correctButton.style.backgroundColor = "#8cb581";
};

// Init answer click event
answersButton.forEach((answer) => {
  answer.addEventListener("click", (event) => {
    validateQuestion(event.currentTarget);
  });
});



function scoreIncrementation() {
  scoreResult += 1;
  scoreNumber.innerHTML = `${scoreResult}`;
  return scoreResult;

}


//////////////////////changement questions&reponses associees

const nextQuestion = () => {
  runningQuestion += 1;
  if (questionsList.length > runningQuestion) {
    const q = questionsList[runningQuestion];
    questionText.innerHTML = q.questionText;
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
  }
};

// Reset timer
buttonNext.addEventListener("click", function () {
  //timer reset
  progress.style.animation = "none";
  progress.offsetWidth; /* trigger reflow */
  progress.style.animation = null;

  //* Enable answers buttons and reset colors
  answersButton.forEach((button) => {
    button.disabled = false;
    button.style.backgroundColor = "#c4c4c4";
  });
  nextQuestion();
});

//incrémentation du nombre de questions restantes

buttonNext.addEventListener("click", function () {
  tempNumberQuestion += 1;


  if (tempNumberQuestion <= questionsList.length) {
    screenQuestion.innerHTML = `${tempNumberQuestion}/${questionsList.length}`;
  } else {
    smiley.style.display = "flex";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round((100 * scoreResult) / questionsList.length);

    // choose the image based on the scorePerCent
    let img =
      scorePerCent >= 80
        ? "assets/5.png"
        : scorePerCent >= 60
        ? "assets/4.png"
        : scorePerCent >= 40
        ? "assets/3.png"
        : scorePerCent >= 20
        ? "assets/2.png"
        : "assets/1.png";

    smiley.innerHTML = "<img src=" + img + ">";
    smiley.innerHTML += "<p>" + scorePerCent + "%</p>";
  }
});

//Comportement point d'interrogation
interro.addEventListener("click", function () {
  about.style.display = "block";
});

about.addEventListener("click", function () {
  about.style.display = "none";
});

