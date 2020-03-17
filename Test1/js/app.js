function inputArrScore() {
    length = parseInt(prompt("Enter length of sequence : "));
    let arr = [];
    for (i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 50);
    }
    document.write('The sequence is :' + arr + '<br>');
    return arr;
}

function findMaxScore(array) {
    let max = array[0];
    for (let i = 0; i <= array.length - 1 ; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function main() {
    let arrMax = inputArrScore();
    document.write("Max Array is :" + findMaxScore(arrMax))
}
main();
