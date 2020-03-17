function fibo(number) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1
    if (number < 0) {
        return -1;
    } else if ((number === 0) || (number === 1)) {
        return number;
    } else {
        for (let i = 2; i < number ; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn
}

function inputNumberChecked() {
    inputNumber = +prompt("Nhập vào số cần kiểm tra");
    return inputNumber;
}

function isFibo() {
    let fiboArray = [];
    let index = 0;
    let numberChecked = inputNumberChecked();
    while (index < 100) {
        index++;
        fiboArray.push(fibo(index));
        for (let i = 0; i <= fiboArray.length - 1 ; i++) {
            if (fiboArray[i] === numberChecked) {
                return true;
            }
        }
    }
    return false;
}

function displayResult() {
    if (isFibo()) {
        alert("Số nhập vào thuộc dãy số Fibonaci")
    } else {
        alert("Số nhập vào không thuộc dãy số Fibonaci")
    }
}
displayResult();