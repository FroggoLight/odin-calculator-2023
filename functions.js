let previousValue = "0";
let operand = "+";
let appendValue = "0";

let textItem = document.querySelector("#display");

function appendNumber(num) {
    if (appendValue == "not specified") {
        console.log("the current value is unassigned");
        appendValue = (num.toString());
    }
    else {
        appendValue = appendValue + (num.toString()); 
    }
    appendValue = parseFloat(appendValue).toString();
    console.log(appendValue);
    updateDisplay();
}

function changeOperand(operandValue) {
    compute(operand);
    operand = operandValue;
    //console.log(operand);
    appendValue = "not specified";
    updateDisplay();
}

function clearValue() {
    previousValue = "0";
    operand = "+";
    appendValue = "0";
    console.log("clear");
    updateDisplay();
}

function compute(currentOperand) {
    if (appendValue == "not specified") {
        console.log(appendValue);
        appendValue = previousValue;
        console.log(previousValue);
        console.log(appendValue);
    }
    switch(currentOperand) {
        case "+":
            previousValue = (parseFloat(previousValue) + parseFloat(appendValue)).toString();
            break;
        case "-":
            previousValue = (parseFloat(previousValue) - parseFloat(appendValue)).toString();
            break;
        case "*":
            previousValue = (parseFloat(previousValue) * parseFloat(appendValue)).toString();
            break;
        case "/":
            (parseFloat(appendValue) == 0) ? previousValue = "gg" : previousValue = (parseFloat(previousValue) / parseFloat(appendValue)).toString();
            break;
        case "=":
            compute(operand);
            operand = "";
            updateDisplay();
            break;
        default:
            console.log("previous operand was" + currentOperand + "(used for debugging and laziness idk placeholder here doesnt work)");
    }
    console.log(previousValue);
}

function updateDisplay() {
    if (operand == "" || appendValue == "not specified") {
        textItem.textContent = previousValue;
    } 
    else {
        textItem.textContent = appendValue;
    }
}
