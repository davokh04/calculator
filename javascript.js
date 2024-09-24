const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const ce = document.querySelector(".ce");


let step = 1;
let firstNumber = null;
let secondNumber = null;
let operation = null;


numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (step === 1 && display.textContent != "") {
            firstNumber = Number(display.textContent);
            operation = operator.textContent;
            step = 2;
            display.textContent = "";
        };
    });
});

equal.addEventListener("click", () => {
    if (step === 2 && display.textContent != "") {
        secondNumber = Number(display.textContent);
        switch (operation) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            case "x":
                result = firstNumber * secondNumber;
                break;
        };
        display.textContent = result;
        step = 1;
        firstNumber = null;
        secondNumber = null;
        operation = null;
    }; 
});

ce.addEventListener("click", () => {
    step = 1;
    firstNumber = null;
    secondNumber = null;
    operation = null;
    display.textContent = "";
});