'use strict';
//Наследование, прототипы, конструкторы и классы


/*let arr = [0, 1, 2, 3, 4, 5, 6];
console.log('arr: ', arr.__proto__);
console.log('Array: ', Array.prototype);*/
/*
let car = {
    doors: 4,
    turbocharging: false,
    ride: function() {
        console.log('Машина едет')
    },
};

let newCar = Object.create(car);
newCar.model = 'mazda 3';
console.log('newCar: ', newCar.doors);

//методы
console.log(newCar.hasOwnProperty('model')); //личные свойства true/false
console.log(newCar.__proto__.hasOwnProperty('model')); //личные свойства true/false
console.log(car.isPrototypeOf(newCar)); //является прототипом для newCar? true/false
*/


//КОНСТРУКТОРЫ
/*
function Car(model, color) {
    this.model = model;
    this.color = color;
}
Car.prototype.ride = function() {
    console.log('Ехать');
}

let car1 = new Car('Mazda', 'red');
let car2 = new Car('VAZ', 'black')
console.log(car1.ride === car2.ride);

car1.ride();
console.log('car1: ', car1);
console.dir(Car);

let carTest = {
    model: 'Mazda',
};

//console.log('carTest: ', carTest);
*/

//КЛАСС
// единицы описывающая объект
//объект д.б. создан на основании класса

function Car(countryBuild, options) { //конструктор класса
    this.countryBuild = countryBuild;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}


/*
Car.prototype.ride = function() {
    console.log(this.brand + ' ' + this.model + ' поехала!!');
}

let car1 = new Car('Mazda', '3', { color: 'blue' });
let car2 = new Car('BMW', 'X3', { ABS: true });

console.log('car1: ', car1);
console.log('car2: ', car2);

//car1.ride();
//car2.ride();

console.log(Car.prototype.isPrototypeOf(car1)); //Car является прототипом car1?
console.log(car2 instanceof Car); //car2 является потомком Car?*/

Car.prototype.ride = function() {
    console.log(this.brand + ' ' + this.model + ' поехала!!');
}

//привязываем скласс Car k Audi
function Audi(countryBuild, options, model, type) {
    this.brand = 'Audi';
    Car.apply(this, arguments);
    this.model = model;
    this.type = type;
}


Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

let car_q7 = new Audi('germany', { color: 'red' }, 'Q7', 'S');
console.log('car_q7: ', car_q7);

console.log(car_q7 instanceof Audi);
console.log(car_q7 instanceof Car);

car_q7.ride();

console.log(new Object);
console.log(car_q7 instanceof Object);