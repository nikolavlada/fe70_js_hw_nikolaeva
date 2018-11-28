
var pluck = function (arr,key) {
	var newArr = [];
	for (var i=0, x=arr.length;i<x; i++){
if (arr[i].hasOwnProperty(key)){
	newArr.push(arr[i][key])
	}
}
	return newArr;
}


var characters = [
{ 'name': 'barney', 'age': 36},
{ 'name': 'fred', 'age': 40}
];

// console.log(characters);

console.log(pluck(characters, 'name')); // ['barney', 'fred']
console.log(pluck(characters, 'age')); //[36, 40]










