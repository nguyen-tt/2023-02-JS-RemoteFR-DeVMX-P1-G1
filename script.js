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


const questionText = document.querySelector("h2");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

const questionsList = [
    {
        questionId: 1,
        questionText: "Question 1?",
        answer1: "10",
        answer2: "20",
        answer3: "30",
        answer4: "40",
        correctAnswer: "answer1"
    },
    {
        questionId: 2,
        questionText: "Question 2?",
        answer1: "20",
        answer2: "30",
        answer3: "40",
        answer4: "10",
        correctAnswer: "answer2"
    },
    {
        questionId: 3,
        questionText: "Question 3?",
        answer1: "30",
        answer2: "40",
        answer3: "50",
        answer4: "60",
        correctAnswer: "answer3"
    },
    {
        questionId: 4,
        questionText: "Question 4?",
        answer1: "40",
        answer2: "50",
        answer3: "60",
        answer4: "70",
        correctAnswer: "answer4"
    },
];

let runningQuestion = 0;
let scoreResult = 0;
let tempNumberQuestion = 1;
let questionTime = 25; // 25s
let count = 0;

// //* Loading page Modal
// window.addEventListener("load", () => {
const modal = document.querySelector(".modal");
timerBar.style.display = "none";
scoreTitle.style.display = "none";
scoreNumber.style.display = "none";


//* Close modal and show first question on the screen
modalStartButton.addEventListener("click", () => {
    modal.classList.add("modal-hidden");
    timerBar.style.display = "block";
    scoreTitle.style.display = "block";
    scoreNumber.style.display = "block";
    screenQuestion.innerHTML = `${tempNumberQuestion}/${questionsList.length}`;
    nextQuestion();

});

const validateQuestion = () => {
    let questionOnScreen = questionsList[2];

    answersButton.forEach((button) => {
        button.addEventListener("click", (element) => {
            // console.log(runningQuestion)
            // const tempButton = document.querySelectorAll(`".${element.target.value}"`);
            button.dataset.clicked = "true";

            if (element.target.value === questionOnScreen.correctAnswer && button.dataset.clicked === "true") {
                button.style.backgroundColor = "#8cb581";

                // tempButton.forEach((element) => {

                //     element.style.backgroundColor = "#c96464"}
                //     );
                scoreIncrementation();
                // console.log(element);

            } else {
                button.style.backgroundColor = "#c96464";

            }
        })
    })
}

validateQuestion();
// const validateQuestion = () => {
//     let questionOnScreen = questionsList[runningQuestion];
// tempAnswersButton.addEventListener("clic")
// }


//incrementation du score
//questionsList[runningQuestion].correctAnswer

function scoreIncrementation() {
    //if (answersButton === questionsList[runningQuestion].correctAnswer) {
    scoreResult += 1;
    scoreNumber.innerHTML = `${scoreResult}`;
    return scoreResult;
    //} else {
    //scoreResult -= 0;
    //scoreResult.innerHTML = `${scoreResult}`;

    //}
}
//.addEventListener("click", function () {




//////////////////////changement questions&reponses associees

const nextQuestion = () => {
    const q = questionsList[runningQuestion];

    questionText.innerHTML = q.questionText;
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
    runningQuestion += 1;
}

// Reset timer
buttonNext.addEventListener("click", function () {
    //timer reset
    progress.style.animation = 'none';
    progress.offsetWidth; /* trigger reflow */
    progress.style.animation = null;
    nextQuestion();


},)

//incrémentation du nombre de questions restantes

buttonNext.addEventListener("click", function () {
    tempNumberQuestion += 1;
    //runningQuestion += 1;

    if (tempNumberQuestion <= questionsList.length) {
        screenQuestion.innerHTML = `${tempNumberQuestion}/${questionsList.length}`

    }
    else {
        smiley.style.display = ("flex")

        // calculate the amount of question percent answered by the user
        const scorePerCent = Math.round(100 * scoreResult / questionsList.length);

        // choose the image based on the scorePerCent
        let img = (scorePerCent >= 80) ? "assets/5.png" :
                  (scorePerCent >= 60) ? "assets/4.png" :
                  (scorePerCent >= 40) ? "assets/3.png" :
                  (scorePerCent >= 20) ? "assets/2.png" :
                  "assets/1.png";

        smiley.innerHTML = "<img src=" + img + ">";
        smiley.innerHTML += "<p>" + scorePerCent + "%</p>";
    }
})
 

    //Comportement point d'interrogation





//function when time over = wrong answer

const timerWrong = () => {
    if(count <= questionTime){
        
    }
}

