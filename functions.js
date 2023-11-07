let firstValue = "0";
let operand = "+";
let appendValue = "";

function appendNumber(num) {
    appendValue = appendValue + (num.toString()); //remember to change to double then str
    console.log(appendValue);
}

function changeOperand(operandValue) {
    operand = operandValue;
}


//appendNumber("1");

//if second value does not exist when pressing operand, do nothing, else evaluate 
//function addValues add firstValue while operand is empty, and add secondValue if operand exists
//if 