function inputArr() {
    length = parseInt(prompt("Enter length of sequence : "));
    let arr = [];
    for (i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 50);
    }
    document.write('The New Array is :' + arr + '<br>');
    return arr;
}

function tryRemoveArray(arr,a) {
    for (let i = 0;i <= arr.length - 1; i ++){
        if (i === a){
            arr.splice(a,1)
        }
    }
    return arr;
}

function main() {
    let arr = inputArr();
    let index = parseInt(prompt("index"));
    document.write('The Array after Remove is :'+ tryRemoveArray(arr,index))
}
main();