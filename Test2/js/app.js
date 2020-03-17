let arr = [1,5,8,10,25,9,11];
function tryRemoveArray(arr,a) {
    for (let i = 0;i <= arr.length - 1; i ++){
        if (i === a){
            arr.splice(a,1)
        }
    }
    return arr;
}
let index = parseInt(prompt("index"));
alert(tryRemoveArray(arr,index))