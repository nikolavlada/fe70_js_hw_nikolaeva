var color = [{
	 clr:'black', im:'<img src="img/black.png">', k:5,
    },
    {clr:'gold', im:'<img src="img/gold1.png">', k:2,
    },
    {clr:'silver', im:'<img src="img/silver.png">', k:7,
    }];

var memo = [{
	memory:2, price:100,
	},
	{memory:4, price:100,
	},
	{memory:8, price:100,
	},
	{memory:16, price:300,
	},
	{memory:32, price:500,
	},
	{memory:64, price:1200,
	},
	{memory:128, price:2500,
	},
	{memory:256, price:3000,
	},
	{memory:512, price:4000,
}];

// for (var i = 0; i < memo.length; i++) {
//      document.write("Память в "+memo[i].memory+"ГБ стоит " + memo[i].price + "грн." + "<br />");
// }


var clr = prompt ("Какой цвет телефона Вас интересует?")
for (var l = 0; l < color.length; l++) {	
if(clr===color[l].clr){
     document.write(color[l].im);
     break;
	} else if ((++l)==color.length){
		document.write('<img src="img/default.png">');
        break;
	}else{
		--l;
	}
}


var mp = +prompt("Какой размер памяти в телефоне Вас интересует?");
for (var i = 0; i < memo.length; i++) {	
if(mp===memo[i].memory){
     document.write("Память в "+memo[i].memory+"ГБ стоит " + memo[i].price + " грн." + "<br />");
     break;
	} else if ((++i)===memo.length){
		document.write("Неверно указан размер памяти:(");
        break;
	} else{
		--i;
	}
}


document.write("Телефон с памятью в "+memo[i].memory+"ГБ и цвета " + color[l].clr + " стоит: " + memo[i].price + color[l].k + " грн." + "<br />");



// https://drive.google.com/open?id=1tbGYv6CmxoDdHfxKAxBsLkUsUslRkizi
