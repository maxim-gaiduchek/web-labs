let numbers = [];

let numbersInput = document.getElementById("numbers-input");
let numbersContainer = document.getElementById("numbers-container");
let numbersForm = document.getElementById("numbers-form");

let boldTextContainer = document.getElementById("bold-text-container");
let normalTextInput = document.getElementById("normal-text-input");
let boldTextInput = document.getElementById("bold-text-input");
let bold = false;

window.addEventListener("load", () => {
    // tasks 1, 2
    swapXY();
    calcSquare();

    // task 3
    numbersForm.style.display = "none";

    if (document.cookie !== "") {
        let data = document.cookie.split(";")[0].split("=")[1].split(" ");

        if (confirm(`Min: ${data[0]}, Max: ${data[1]}\n\nWant to save this data again? Then you will needed to reload page`)) {
            return;
        }
    }

    document.cookie = "minmax=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    numbersForm.style.display = "block";

    // task 4
    bold = localStorage.getItem("bold") === "bold";

    if (bold) {
        boldTextContainer.classList.remove("normal");
        boldTextContainer.classList.add("bold");
        boldTextInput.checked = true;
    } else {
        boldTextContainer.classList.remove("bold");
        boldTextContainer.classList.add("normal");
        normalTextInput.checked = true;
    }
});

// task 1
function swapXY() {
    let temp = document.getElementById("x").innerText;
    document.getElementById("x").innerText = document.getElementById("y").innerText;
    document.getElementById("y").innerText = temp;
}

// task 2
function calcSquare() {
    let height = 100, width = 20.331;

    document.getElementById("square-result").innerText = `${height} * ${width} = ${height * width}`;
}

// task 3
numbersForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!numbersInput.value) {
        return;
    }

    numbers.push(Number.parseInt(numbersInput.value));
    document.getElementById("numbers-input").value = "";

    numbersContainer.innerText = numbers.join(", ");

    if (numbers.length < 10) {
        numbersContainer.innerText += ` (${10 - numbers.length} left)`;
    } else {
        let min = Math.min(...numbers), max = Math.max(...numbers);

        numbersContainer.innerText += ` (min and max are found!)`;
        numbers = [];
        document.cookie = `minmax=${min} ${max}`;

        alert(`Min: ${min}, Max: ${max}`);
    }
});

// task 4
boldTextContainer.addEventListener("focus", () => {
    if (bold) {
        boldTextContainer.classList.remove("normal");
        boldTextContainer.classList.add("bold");
        localStorage.setItem("bold", "bold");
    } else {
        boldTextContainer.classList.remove("bold");
        boldTextContainer.classList.add("normal");
        localStorage.setItem("bold", "normal");
    }
});

normalTextInput.addEventListener("change", () => {
    bold = false;
});

boldTextInput.addEventListener("change", () => {
    bold = true;
});
