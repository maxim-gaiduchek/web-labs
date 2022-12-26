window.addEventListener("load", () => {
    swapXY();
    calcSquare();
});

function swapXY() {
    let temp = document.getElementById("x").innerText;
    document.getElementById("x").innerText = document.getElementById("y").innerText;
    document.getElementById("y").innerText = temp;
}

function calcSquare() {
    let x = 100, y = 20.331;

    document.getElementById("square-result").innerText = x * y;
}