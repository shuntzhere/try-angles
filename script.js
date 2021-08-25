const inputs = document.querySelectorAll('#input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-check');
const outputElement = document.querySelector('#output');

function calcSum(angle1 , angle2 , angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calcSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180) {
        outputElement.innerText = "It is a triangle";
    }else {
        outputElement.innerText = "The angles dont add up!!! Try again";
    }
}

isTriangleBtn.addEventListener('click', isTriangle)