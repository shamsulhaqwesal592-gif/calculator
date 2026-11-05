const ButtonElements = document.querySelectorAll("button");
const inputButton = document.getElementById("input");
for (let i = 0; i < ButtonElements.length; i++) {
    ButtonElements[i].addEventListener("click", () => {
        const ButtonValue = ButtonElements[i].textContent;

        if (ButtonValue === "C") {
            clearResult();

        }
        else if (ButtonValue === "%") {
            reminder();
        }
        else if (ButtonValue === "=") {
            calculateResult()

        } else {
            append(ButtonValue);
        }
    });
}
function clearResult() {
    inputButton.value = "";
}

function calculateResult() {
    inputButton.value = eval(inputButton.value);
}
function append(ButtonValue) {
    inputButton.value += ButtonValue;
}
function reminder() {
    inputButton.value += inputButton % inputButton


}

