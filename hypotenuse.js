const a= document.querySelector("#side-a");
const b = document.querySelector("#side-b");
const submitButton = document.querySelector("#submit-btn");
const outputMessage = document.querySelector("#output");

submitButton.addEventListener('click', () => {
    const c =Math.sqrt(Number(Math.pow(a.value,2)) + Number(Math.pow(b.value,2)));
    outputMessage.innerText = "C = "     +c;
})


