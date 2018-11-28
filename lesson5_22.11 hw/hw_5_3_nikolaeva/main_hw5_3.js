


var array = [3, 6, 8, 90, 56,1,3,2,1,-1];
var foo = function (x) {
    return x * 2;
}
var map = function (fn, arr) {
    var nweArray=[];
    for (i=0;i<arr.length;i++){
    	nweArray.push(fn(arr[i]));
    }
    return nweArray;
}
console.log(map(foo,array));
// console.log(map(foo, array)); // массив с результатами вызовов функции