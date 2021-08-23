const inputs = document.querySelectorAll(".input-angle");
const submitButton = document.querySelector("#check-btn");
const outputMessage = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

submitButton.addEventListener("click", () => {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
    if (sumOfAngles === 180) {
        outputMessage.innerText = "Yeahh!, these angles makes a Triangle 😀";
    } else {
        outputMessage.innerText = "Oops! these angles cannot make a Triangle 😕";
    }
})