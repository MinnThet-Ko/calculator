//functions for caculation
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "x":
            multiply(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
    }
}

//functions for UI

//function to add text to display-div
function addToDisplay(inputString) {
    displayDiv = document.getElementById("display-div");
    if (displayDiv.innerText == null) {
        displayDiv.innerText = inputString;
    } else {
        displayDiv.innerText += inputString;
    }

}

//function to create number buttons
function createNumberButtons() {
    numberButtonContainer = document.getElementById("number-button-container");
    for (let i = 0; i < 10; i++) {
        let numberButton = document.createElement("button");
        numberButton.value = i;
        numberButton.innerText = i;
        numberButton.classList.add("number-button");
        numberButton.addEventListener("click", (e) => addToDisplay(e.target.innerText));
        numberButtonContainer.appendChild(numberButton);
    }
}

//function to create operatorButtons
function createOperatorButtons() {
    let operatorSymbolArray = ["+", "-", "x", "÷"];
    operatorButtonContainer = document.getElementById("operator-button-container");
    for (let i = 0; i < 4; i++) {
        let operatorButton = document.createElement("button");
        operatorButton.value = operatorSymbolArray[i];
        operatorButton.innerText = operatorSymbolArray[i];
        operatorButton.classList.add("operator-button");
        operatorButton.addEventListener("click", (e) => addToDisplay(e.target.innerText));
        operatorButtonContainer.appendChild(operatorButton);
    }

    let operatorButton = document.createElement("button");
    operatorButton.value = "=";
    operatorButton.innerText = "=";
    operatorButton.classList.add("operator-button");
    operatorButtonContainer.appendChild(operatorButton);
}
window.addEventListener("load", createNumberButtons());
window.addEventListener("load", createOperatorButtons());