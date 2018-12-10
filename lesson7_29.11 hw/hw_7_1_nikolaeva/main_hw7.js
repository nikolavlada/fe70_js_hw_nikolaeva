
// В данном решении цена и Кк считаются верно во всех трех составляющих.
// Но при добавлении Топинга проверка выводит, что такой Топинг уже есть (это видно в консоле:( ) 

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
var STUFFING = [{
    name: 'cheese',
    price: 10,
    kk: 20
},
{
    name: 'potato',
    price: 15,
    kk: 10
},
{
    name: 'salad',
    price: 20,
    kk: 5
}]
var TOPPING = [{
    name: 'TOPPING_SPICE',
    price: 15,
    kk: 0
},
{
    name: 'TOPPING_MAYO',
    price: 20,
    kk: 5
}]
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

stuffing = document.querySelectorAll('input[name="stuffing"]'); 
for(var i=0;i<stuffing.length;i++){
    if(stuffing[i].checked == true){
        stuffing = STUFFING[i];
    } 
}

var burger = new Hamburger(size,stuffing);
console.log(burger.getSize());
console.log(burger.getStuffing());

var Top = document.getElementsByClassName('topping');

for (i = 0; i < Top.length; i++){
    if (Top[i].checked == true){
        for (var j =0; j<TOPPING.length;j++){
            if (Top[i].value == TOPPING[j].name){
                var newTopping = TOPPING[j];
                 console.log(newTopping);

                 burger.addTopping(newTopping);
                console.log(burger.addTopping(newTopping));
            }   
        }
    }
}

burger.getToppings();
console.log(burger.getPrice());
console.log(burger.getKk());
document.getElementById('burgerPrice').innerHTML = burger.getPrice();
document.getElementById('burgerEnergy').innerHTML = burger.getKk();
}
