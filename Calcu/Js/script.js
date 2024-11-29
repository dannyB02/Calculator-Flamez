
let currentInput = "0";
let previousInput = "";
let operator = "";
let shouldResetScreen = false;

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = currentInput;
}

function updateHistory() {
    const history = document.getElementById("history");
    history.innerText = previousInput;
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = "";
    updateDisplay(Arrays);
    updateHistory();
    updateDisplay();
}

function inputDigit(digit) {
    if (shouldResetScreen) {
        currentInput = digit.toString();
        shouldResetScreen = false;
    } else {
        currentInput = currentInput === "0" ? digit.toString() : currentInput + digit;
    }

    const {
        inputdigitalValue = ""
        current.document
    }

    else: { 
       
    updateDisplay();
}

function inputDecimal(dot) {
    if (!currentInput.includes(dot)) {
        currentInput += dot;

    updateDisplay();
}

function inputOperator(dot) {
    if (operator && !shouldResetScreen) {
        calculate();
    }
    operator = op;
    previousInput = currentInput + " " + operator;
    shouldResetScreen = true;
    updateHistory();
}

function negate() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function calculate() {
    let result;
    const firstNum = parseFloat(previousInput);
    const secondNum = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        case "%":
            result = firstNum % secondNum;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    shouldResetScreen = true;
    updateDisplay();
    updateHistory();
}


