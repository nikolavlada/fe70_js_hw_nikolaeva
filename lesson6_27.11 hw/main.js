// var Vehicle = {
//     engine: function () {
//         return 'ПОЕХАЛИИ! ' + this.model;
//     }
// }

// var Car = function (mark, model) {
//     this.mark = mark;
//     this.model = model;
// }

// Car.prototype.engine = function () {
//     return 'ПОЕХАЛИИ! ' + this.model;
// }

// var car1 = new Car('Audi', 'rs6');
// var car2 = new Car('BMW', 'm5');

// console.log(car1);
// console.log(car1.mark);
// console.log(car1.engine());
// console.log(car2.engine());


// var animal = {
//     breath: true
// }

// var tiger = {
//     eatOtherAnimals: true
// }

// tiger.__proto__ = animal;

// console.log(tiger);
// console.log(tiger.breath);


// var Header = (function () {
//     var x = 10;
//     var y = 20;
//     var z = function () {
//         return '!!!';
//     }
//     return {
//         toggleType: function () {
//             console.log(z());
//         }
//     }
// }())
// Header.toggleType();


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

// **Vlada* Добавила для подсчета цены и ккаллорий
Hamburger.prototype.getPrice = function () {
    var a = calculate(this._size.price,'price'); 
    var b = calculate(this._stuffing.price,'price'); 
    var c = calculate(this._toppings,'price'); 
    var price = a+b+c;
    return price;
}

Hamburger.prototype.getKk = function () {
    var a = calculate(this._size.kk,'price'); 
    var b = calculate(this._stuffing.kk,'price'); 
    var c = calculate(this._toppings,'kk'); 
    var kk = a+b+c;
    return kk;
}
//********

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

// Hamburger.prototype.calculate = function (arr,k) {
//     var endsumm = 0; var t = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].hasOwnProperty(k)){
//         endsumm = (arr[i][k])+t;
//         t = endsumm;
//         } 
//     }
//     return endsumm;
// }



var burger1 = new Hamburger(SIZE_LARGE, STUFFING_CHEESE);
console.log(burger1.getSize());
console.log(burger1.getStuffing());
console.log('______________');
console.log(burger1.addTopping(TOPPING_MAYO));
console.log(burger1.addTopping(TOPPING_MAYO));
console.log(burger1.addTopping(TOPPING_SPICE));
console.log(burger1.getToppings());
console.log(burger1.removeTopping(TOPPING_SPICE));
console.log(burger1.removeTopping(TOPPING_SPICE));
console.log(burger1.getToppings());
console.log('______________');
console.log(burger1.addTopping(TOPPING_MAYO));
console.log(burger1.addTopping(TOPPING_SPICE));
console.log(burger1.getToppings());
console.log(burger1.getPrice());
console.log(burger1.getKk());
//***Vlada: к сожалению: считает цену и ккаллорий только по TOPPING***