const inputs = document.querySelectorAll(".input-angle");
const submitButton = document.querySelector("#check-btn");
const outputMessage = document.querySelector("#output");

function calculateArea(angle1, angle2) {
    const areaOfTriangle = 1 / 2 *(angle1 + angle2);
    return areaOfTriangle;
}

submitButton.addEventListener("click", () => {
    const areaOfTriangle = calculateArea(Number(inputs[0].value), Number(inputs[1].value));
   
        outputMessage.innerText = `Area of Triangle is :  ${areaOfTriangle}`;
   
})