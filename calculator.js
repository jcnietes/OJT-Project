// let result = document.getElementById("current-display");
// let operator = "";

// function addNumber(num) {
//     if (result.value === "0") {
//         result.value = num;
//     } else {
//         result.value = result.value + num;
//     }
// }

// function addDecimal() {
//     if (!result.value.includes('.')) {
//         result.value += '.';
//     }
// }

// function calculate(op) {
//     if (result.value.slice(-1) === operator) {
//         operator = op;
//         result.value = result.value.slice(0, -1);
//     } else {
//         operator = op;
//         result.value = result.value + operator;
//     }
// }

// function equals() {
//     // let inputUser = result.value;
//     // // let numbers = expression.split(operator);
//     // // let num1 = parseFloat(numbers[0]);
//     // // let num2 = parseFloat(numbers[1]);
//     // let resultValue;
//     // try {
//     //     switch (operator) {
//     //         case "+":
//     //             resultValue = num1 + num2;
//     //             break;
//     //         case "-":
//     //             resultValue = num1 - num2;
//     //             break;
//     //         case "*":
//     //             resultValue = num1 * num2;
//     //             break;
//     //         case "/":
//     //             if (resultValue = num2 === 0) {
//     //                 throw new Error("Division by Zero");
//     //             }
//     //             resultValue = num1 / num2;
//     //             break;
//     //     }
//     //     result.value = resultValue
//     //     //Display previous result in another input
//     //     let previousResult = document.getElementById("previous-display");
//     //     previousResult.value = resultValue;
//     // } catch (error) {
//     //     result.value = "Error: " + error.message;
//     // }
//     // result.disabled = true;
//     let inputUser = result.value;
// }


// function deleteSingleDigit() {
//     result.value = result.value.slice(0, -1);
// }

// function allClear() {
//     result.value = "0";
//     operator = "";
//     result.disabled = true;
//     document.getElementById("previous-display").value = "";
// }


// function deleteSingleDigit() {
//     result.value = result.value.slice(0, -1);
// }

// function allClear() {
//     result.value = "0";
//     operator = "";
//     result.disabled = true;
//     document.getElementById("previous-display").value = "";
// }

const prevDisplay = document.getElementById("previous-display");
const operatorDisplay = document.getElementById("operator-display");
const currDisplay = document.getElementById("current-display");
const expressionDisplay = document.getElementById("expression-display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equals = document.getElementById("equals");

const allClear = document.getElementById("allClear");
const deleter = document.getElementById("delete");

let prevNum = "";
let operator = "";
let currNum = "0";

let expression = "";
let result = "";


numbers.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        if (currNum === "0") {
            currNum = numberBtn.value;
        } else {
            currNum = currNum + numberBtn.value;
        }
        currDisplay.value = currNum;
        expression = expression + numberBtn.value;
        // expressionDisplay.value = expression;

    });
});

operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (operator === "") {
            prevNum = currNum;
        } else {
            prevNum = calculate(prevNum, currNum, operator);
            // currDisplay.value = prevNum;
        }
        currNum = "0";
        prevDisplay.value = prevNum;
        operator = operatorBtn.value;
        operatorDisplay.value = operator;
        expression = expression + " " + operator + " ";
        expressionDisplay.value = expression;
    });
});

equals.addEventListener("click", () => {
    if (operator !== "" && currNum !== "") {
        result = calculate(prevNum, currNum, operator);
        currDisplay.value = result;
        prevNum = "";
        currNum = result;
        operator = "";
        operatorDisplay.value = operator;
        prevDisplay.value = prevNum;
        // expression = expression + " = " + result; 
        expression = expression + " = ";
        expressionDisplay.value = expression;
        // clean()
    }
});

// HELPER FUNCTION
function clean() {
    expression = "";
    expressionDisplay.value = "";
    currNum = "";

}

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

allClear.addEventListener("click", () => {
    prevNum = "";
    prevDisplay.value = prevNum;
    currNum = "0";
    currDisplay.value = currNum;
    operator = "";
    operatorDisplay.value = operator;
    expression = "";
    expressionDisplay.value = expression;
});

deleter.addEventListener("click", () => {
    currNum = currDisplay.value;
    currNum = currNum.slice(0, -1);
    currDisplay.value = currNum;
    // expression = expression.slice(0, -2); 
    // expressionDisplay.value = expression; 
});
