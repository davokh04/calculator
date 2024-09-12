function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    let result = a / b;
    if (result == NaN || result != Infinity) {
        return result;
    } else {
        return "ERROR";
    }
};

