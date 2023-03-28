let result = document.getElementById("current-display");
let operator = "";

function addNumber(num) {
    if (result.value === "0") {
        result.value = num;
    } else {
        result.value += num;
    }
}

function addDecimal() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
    result.focus();
}

function calculate(op) {
    operator = op;
    result.value += operator;
    result.focus();
}

function equals() {
    let expression = result.value;
    let numbers = expression.split(operator);
    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[1]);
    let resultValue;
    switch (operator) {
        case "+":
            resultValue = num1 + num2;
            break;
        case "-":
            resultValue = num1 - num2;
            break;
        case "*":
            resultValue = num1 * num2;
            break;
        case "/":
            resultValue = num1 / num2;
            break;
    }
    result.value = resultValue
    //Display previous result in another input
    let previousResult = document.getElementById("previous-display");
    previousResult.value = resultValue;
}

function deleteSingleDigit() {
    result.value = result.value.slice(0, -1);
    result.focus()
}

function allClear() {
    result.value = "0";
    operator = "";
    result.disabled = true;
    document.getElementById("previous-display").value = "";
    result.focus();
}