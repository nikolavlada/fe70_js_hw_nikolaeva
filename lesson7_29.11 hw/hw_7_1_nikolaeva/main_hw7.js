
// В данном решении с Топингами беда :(

var compareObjects = function (o1, o2, key) {
    if (!key) key = 'name';
    return o1[key] === o2[key] ? true : false;
}
// ***Vlada* Добавила для подсчета цен и ккаллорий
var calculate = function (arr,k) {
    var endsumm = 0; var t = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(k)){
        endsumm = (arr[i][k])+t;
        t = endsumm;
        } 
    }
    return endsumm;
}
//******

// CONSTANTS
var SIZE_SMALL = {
    name: 'small',
    price: 50,
    kk: 20
};
var SIZE_LARGE = {
    name: 'large',
    price: 100,
    kk: 40
};
var STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    kk: 20
};
var STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    kk: 10
};
var STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    kk: 5
};
var TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    kk: 0
};
var TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    kk: 5
};
// !!!!!!!!!

var Hamburger = function (size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
}

Hamburger.prototype.getSize = function () {
    return this._size.name;
}

Hamburger.prototype.getStuffing = function () {
    return this._stuffing.name;
}

Hamburger.prototype.getToppings = function () {
    return this._toppings;
}

//**Vlada* Добавила для подсчета цены и ккаллорий
Hamburger.prototype.getPrice = function () {
    var a = this._size.price; 
    var b = this._stuffing.price; 
    var c = calculate(this._toppings,'price'); 
    var price = a+b+c;
    return price;
}

Hamburger.prototype.getKk = function () {
    var a = this._size.kk; 
    var b = this._stuffing.kk; 
    var c = calculate(this._toppings,'kk'); 
    var kk = a+b+c;
    return kk;
}

Hamburger.prototype.addTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            console.log('Такой топпинг уже есть');
            return false;
        }
    }
    this._toppings.push(newTopping);
    return newTopping;
}

Hamburger.prototype.removeTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            this._toppings.splice(i, 1);
            return newTopping;
        }
    }
    console.log('Такого топпинга вообще нет');
    return false;
}

//*************************

document.getElementById('burgerValue').onclick = function getBurgerValue (){
document.getElementById('burgerPrice').innerHTML = '';
document.getElementById('burgerEnergy').innerHTML = '';
var size;
var stuffing;
var topping = [];


if(document.getElementById('small').checked == true){size = SIZE_SMALL; console.log(size);}
else{}
if(document.getElementById('large').checked == true){size = SIZE_LARGE; console.log(size);}
else{}
if(document.getElementById('cheese').checked == true) {stuffing = STUFFING_CHEESE;console.log(stuffing);}
else{}
if(document.getElementById('potato').checked == true) {stuffing = STUFFING_POTATO;console.log(stuffing);}
else{}
if(document.getElementById('salad').checked == true){stuffing = STUFFING_SALAD;console.log(stuffing);}
else{}
    var burger = new Hamburger(size,stuffing);
console.log(burger.getSize());
console.log(burger.getStuffing());

var Top = document.getElementById('topping').getElementsByTagName('input');
for (i = 0; i < Top.length; i++){
    if (Top[i].checked == true){
        var newTopping = Top[i];
        console.log(newTopping);
    burger.addTopping(newTopping);
    console.log(burger.addTopping(newTopping));
    }
}
burger.getToppings();
console.log(burger.getPrice());
console.log(burger.getKk());
document.getElementById('burgerPrice').innerHTML = burger.getPrice();
document.getElementById('burgerEnergy').innerHTML = burger.getKk();
}
