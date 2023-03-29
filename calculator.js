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
    if (result.value.slice(-1) === operator) {
        operator = op;
        result.value = result.value.slice(0, -1) + operator;
    } else {
        operator = op;
        result.value += operator;
    }
    result.focus();
}

function equals() {
    let expression = result.value;
    let numbers = expression.split(operator);
    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[1]);
    let resultValue;
    try {
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
                if (resultValue = num2 === 0) {
                    throw new Error("Division by Zero");
                }
                resultValue = num1 / num2;
                break;
        }
        result.value = resultValue
        //Display previous result in another input
        let previousResult = document.getElementById("previous-display");
        previousResult.value = resultValue;
    } catch (error) {
        result.value = "Error: " + error.message;
    }
    result.disabled = true;
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