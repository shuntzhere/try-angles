const sides = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');


function calculateAreaOfSquare(b,h) {
    const area = (b * h);
    return area;
}

function calculateAreaOfTriangle() {
    const area = calculateAreaOfSquare(Number(sides[0].value),
        Number(sides[1].value));
        const finalArea = area/2;
        outputEl.addEventListener = "The area of triangle is :" + finalArea;
}

areaBtn.addEventListener("click",calculateAreaOfTriangle);