//functions for caculation
//declare operator queue
let operatorQueue = [];

function addToOperatorQueue(inputOperator){
    operatorQueue.push(inputOperator);
}

//operator fuctions
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

//fuction to decide waht operator will call what function
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);   
        case "-":
            return substract(num1, num2);  
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

//function to begin calculation
function beginCalculation(){

    //the following logic is only applicable for two numbers with only one operator
    //get the text from the display-div

    let diplayString = document.getElementById("display-div").innerHTML;
    let inputNumbers = diplayString.replace(/[^.0-9]/g," ").split(" ").map((numberString) => parseFloat(numberString));
    document.getElementById("display-div").innerHTML = operate(operatorQueue[0], inputNumbers[0], inputNumbers[1]);
    operatorQueue = [];

}

//functions for UI

//variable to check whether the decimal point has be added
let isDecimal =  false;
let lastAddedString = ''
//function to add text to display-div
function addToDisplay(inputString) {
    let operatorSymbolArray = ["+", "-", "x", "÷", "="];
    displayDiv = document.getElementById("display-div");

    //if the input is decimal, declare that the current number is a float
    if(inputString === '.' && isDecimal == false){
        isDecimal = true;
    }else if(inputString === '.' && isDecimal == true){
        return;
    }

    //If the user tries to put in an another decimal point
    if(inputString === '.' && lastAddedString === '.'){
        return;
    }

    if(lastAddedString == '.' && operatorSymbolArray.includes(inputString)|| 
        operatorSymbolArray.includes(lastAddedString) && operatorSymbolArray.includes(inputString)||
        lastAddedString == '' && operatorSymbolArray.includes(inputString)){
        return;
    }if(operatorSymbolArray.includes(inputString)){
        isDecimal = false;
    }

    if (displayDiv.innerText == null) {
        displayDiv.innerText = inputString;
    } else {
        displayDiv.innerText += inputString;
    }
    lastAddedString = inputString;
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

//function to create decimal point button
function createDecimalPointButton(){
    numberButtonContainer = document.getElementById("number-button-container");
    let decimalPointButton = document.createElement("button");
    decimalPointButton.value = ".";
    decimalPointButton.innerText = ".";
    decimalPointButton.classList.add("number-button");
    decimalPointButton.addEventListener("click", (e) => addToDisplay(e.target.innerText));
    numberButtonContainer.appendChild(decimalPointButton);
}

//function to create operator buttons
function createOperatorButtons() {
    let operatorSymbolArray = ["+", "-", "x", "÷", "="];
    operatorButtonContainer = document.getElementById("operator-button-container");
    for (let i = 0; i <= 4; i++) {
        let operatorButton = document.createElement("button");
        operatorButton.value = operatorSymbolArray[i];
        operatorButton.innerText = operatorSymbolArray[i];
        operatorButton.classList.add("operator-button");
        if(i != 4){
            operatorButton.addEventListener("click", (e) => addToDisplay(e.target.innerText));      
            operatorButton.addEventListener("click", (e) => addToOperatorQueue(e.target.innerText));
        }else{
            operatorButton.addEventListener("click", (e) => beginCalculation());
            operatorButton.style.height = "200px";
        }
        operatorButtonContainer.appendChild(operatorButton);
    }
}

//function to create clear button
function createClearButton(){
    operatorButtonContainer = document.getElementById("operator-button-container");
    let clearButton = document.createElement("button");
    clearButton.value = "c";
    clearButton.innerText = "c"
    clearButton.classList.add("operator-button");
    clearButton.addEventListener("click", (e) => clear());
    clearButton.style.height = "200px";
    operatorButtonContainer.appendChild(clearButton);
}

//fuction for clear
function clear(){
    //clear the display-div and operatorQueue 
    operatorQueue = [];
    document.getElementById("display-div").innerHTML = '';
    isDecimal = false;
}

//create equation button
window.addEventListener("load", createNumberButtons());
window.addEventListener("load", createOperatorButtons());
window.addEventListener("load", createClearButton());
window.addEventListener("load", createDecimalPointButton());