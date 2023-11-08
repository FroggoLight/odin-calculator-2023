let previousValue = "0";
let operand = "+";
let appendValue = "0";

function appendNumber(num) {
    appendValue = appendValue + (num.toString()); //remember to change to double then str
    appendValue = parseFloat(appendValue).toString();
    console.log(appendValue);
}

function changeOperand(operandValue) {
    compute(operand);
    operand = operandValue;
    //console.log(operand);
    appendValue = "0";

    //create temp variable in case of = ?
}

function clearValue() {
    previousValue = "0";
    operand = "+";
    appendValue = "0";
    console.log("clear");
}

function compute(currentOperand) {
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
            break;
        default:
            console.log("previous operand was" + currentOperand);
    }
    console.log(previousValue);
    operand = "";
}


//appendNumber("1");

//if second value does not exist when pressing operand, do nothing, else evaluate 
//function addValues add firstValue while operand is empty, and add secondValue if operand exists
//if 

//update screen num based on if operand exists