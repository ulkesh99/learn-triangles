const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputMsg = document.querySelector("#output");

const correctAnswers = ["yes", "yes", "30", "5", "isoceles"]

submitButton.addEventListener("click", () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputMsg.innerText = `🎊🎊 You scored :  ${score} 🎊🎊`;
})