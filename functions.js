let previousValue = "0";
let operand = "+";
let appendValue = "0";

function appendNumber(num) {
    appendValue = appendValue + (num.toString()); //remember to change to double then str
    appendValue = parseFloat(appendValue).toString();
    console.log(appendValue);
}

function changeOperand(operandValue) {
    compute();
    operand = operandValue;
    console.log(operand);
}

function clearValue() {
    previousValue = "0";
    operand = "+";
    appendValue = "0";
    console.log("clear");
}

function compute() {
    switch(operand) {
        case "+":
            previousValue = (parseFloat(previousValue) + parseFloat(appendValue)).toString();
            console.log(previousValue);
            break;
        case "-":
            console.log((parseFloat(previousValue) - parseFloat(appendValue)).toString());
            break;
        case "*":
            console.log((parseFloat(previousValue) * parseFloat(appendValue)).toString());
            break;
        case "/":
            console.log((parseFloat(previousValue) / parseFloat(appendValue)).toString());
            break;
        default:
            console.log("what");
    }

    appendValue = "0";
}


//appendNumber("1");

//if second value does not exist when pressing operand, do nothing, else evaluate 
//function addValues add firstValue while operand is empty, and add secondValue if operand exists
//if 

//update screen num based on if operand exists