
var sum = function (a, b) {
    return a + b;
}

var sub = function (a,b){
	return a-b;
}

var mult = function (a,b) {
	return a*b;
}

var div = function (a,b){
	if (b!==0){
		return a/b;
	}else{
		document.write ("На ноль делить нельзя" +"<br />");
	}	
}

var firstnumber = +prompt ("Введите первое число:");
var secondnumber = +prompt ("Введите второе число:");
var sign = prompt ("Введите арифметический знак: ");

document.write ("Первое число: " +firstnumber+ "<br />");
document.write ("Второе число: " +secondnumber+ "<br />");
document.write ("Знак выполнимой операции: "+sign+ "<br />");

if (firstnumber===null){
	document.write ("Значение числа null: " + firstnumber + " - некоректное" +"<br />");
	}else if (firstnumber===undefined){
	document.write ("Значение числа undefined: " + firstnumber + " - некоректное" +"<br />");
	}else if (firstnumber!==firstnumber){
	document.write ("Значение числа NaN: " + firstnumber + " - некоректное" +"<br />");
	}else if (secondnumber===null||secondnumber===undefined||secondnumber!==secondnumber){
	document.write ("Значение числа: " + secondnumber + " - некоректное" +"<br />");
	}else if (sign==='+') {
		document.write ("Результат равен: "+sum (firstnumber,secondnumber)+"<br />");
	}else if (sign==='-'){
		document.write ("Результат равен: "+sub (firstnumber,secondnumber)+"<br />");
	}else if (sign==='*'){
		document.write ("Результат равен: "+mult (firstnumber,secondnumber)+"<br />");
	}else if (sign==='/'){
		document.write ("Результат равен: "+div (firstnumber,secondnumber)+"<br />");
	}else{
		document.write ("Арифметический знак: " + sign + " - некоректный" +"<br />");
	}


console.log( (true + false) >2+false);

(function(f) {
	console.log(typeof f());
}) (function() {return 1;})