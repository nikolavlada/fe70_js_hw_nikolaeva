var memory;
var color;


var color = prompt ("Какой цвет телефона Вас интересует?")

if (color === 'black') {
	document.write('<img src="img/black.png">');
}else if (color === 'gold') {
	document.write('<img src="img/gold.png">');
}else if (color === 'silver') {
	document.write('<img src="img/silver.png">');
}else{
	document.write('<img src="img/default.png">');
}

var memory = +prompt("Какой размер памяти в телефоне Вас интересует?");

if (memory===4 || memory===2 || memory===8) {
	document.write("Цена смартфона = 1000 грн.");
} else if (memory===16) {
	document.write("Цена смартфона = 3000 грн.");
} else if (memory===32) {
	document.write("Цена смартфона = 5000 грн.");
} else if (memory===64) {
	document.write("Цена смартфона = 12000 грн.");
} else if (memory===128) {
	document.write("'Цена смартфона = 25000 грн.");
} else if (memory===256) {
	document.write("Цена смартфона = 30000 грн.");
} else if (memory===512) {
	document.write("Цена смартфона = 40000 грн.");
} else {
		document.write("Неверно указан размер памяти:(");
}

// third edit


