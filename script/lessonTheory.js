//functions
//*Одна функция - одно действие
//1. Cинтаксис
//объявление 
/*
function outputMessage(name, age) {
    console.log('Hello ' + name);
    console.log('My age ' + age);
}
//вызываем
outputMessage('Максимум', 30);
*/
/*
//объявляем через переменную
//function expression
const consoleMessage = function() {
    console.log('Hello friends');
}
consoleMessage();
*/
/*
//объявляем через коструктор
const alertMessage = new Function('alert("Hi!")');
alertMessage();
*/
/*
let res = 0;
const sum = function(a, b) {
    res = a + b;
};

sum(3, 5);

console.log(res);
*/

/*
//функция возвращает значение
const sum = function(a, b) {
    console.log(arguments); //!!!! аргументы функции
    return a + b; //возвращает функция


    return undefined;
};
let res = sum(3, 5, 4, 2);
console.log('res: ', res);
*/

////2. АНОНИМНЫЕ/ИМЕННЫЕ ФУНКЦИИ
/*
//анонимные
const sum = function(a, b) {
    return a + b;
}
const sum2 = new Function('a', 'b', 'return a + b');

console.log(sum);
console.log(sum2);

//именованные (sum3)
function sum3(a, b) {
    return a + b;
}

console.log(sum3);
*/
/*
//еще анонимные
(function() {
    console.log('Hello');
})();
*/
/*
//CALLBACK FUNCTIONS

const doNum = function(a, b, callback) {
    if (typeof a === 'number' && typeof b === 'number') {
        callback(a, b);
    }
}

doNum(5, 10, function(a, b) {
    console.log(a + b);
});

function mult(a, b) {
    console.log(a * b);
}
doNum(5, 4, mult);
*/
/*
function one(callback) {
    setTimeout(function() { //отложенное выполнение на 1 секунду
        console.log('Я сварил суп');
        callback();
    }, 1000);

}
function two() {
    console.log('Поел суп');
}
one(two);
*/
/*
function one(callback) {
    console.log('Делаем запрос на сервер');
    setTimeout(function() { //отложенное выполнение на 1 секунду
        console.log('Получаем данные с сервера');
        callback();
    }, 1000);

}

function two() {
    console.log('Выводим полученные данные на страницу');
}
one(two);
*/

//Детерминированная функция зависит только от входных данных
//ЧИСТЫЕ ФУНКЦИИ - детерминированная - без алертов/консоль.лог и т.д. и не меняет никаких данных / переменных
//не использует никакие переменные кроме входных данных
/*
function foo(a, b) {
    const sum = a + b;
    return sum;
}

console.log(foo(2, 3));
console.log(foo(2, 3));
console.log(foo(2, 3));
console.log(foo(2, 3));
*/
/*
function foo(a) {
    const sum = a + Math.random(); //уже не чистая. (из за Math)
    return sum;
}

console.log(foo(2));
*/

//ФУНКЦИИ ОБЛАСТЬ ВИДИМОСТИ
//+++++++++++++++++++++++++
/*
let x1 = 5; //доступна во всей программе в любом месте
x2 = 5; //доступна во всей программе в любом месте

function one() {
    let y1 = 10; //видимость только внутри функции
    y2 = 10; //видимость во всей программе после вызова
}
one();
console.log(x1);
console.log(x2);
//console.log(y1); - не видна за пределмами функции
console.log(y2);
*/
//это не правильно -  переменные без let
//поэтому используем 'use strict' - не позволит без let;

//'use strict';
/*
//let y = 10;

function one(x, z) {
    //lexicalEnviroment = {x:3, z:udefined}
    //globalScope = window.y = 10;
    //let y = 4;
    //lexicalEnviroment = {x:3, z:4; z:udefined}
    // console.log(x, y, z);

    function two() {
        //lexicalEnviroment = {}
        //scope = one.lexicalEnviroment = {x:3, z:4; z:udefined}
        console.log(y);
    }
    two();
}
one(3);
*/
/*
let y = 5;

function one(x) {
    //scope = globalScope = window = {y:5}
    console.log(x + y);
}


function two() {
    let y = 15;
    one(3);
}

two();
*/

///ЗАМЫКАНИЕ ?????????????????????????????????????????????
//'use strict';
/*
let a = 50;
function one() {
    let x = 10;
    function two(y) {
        function three() {
            let y = 5;
            return x * y;
        }
        console.dir(three);
        return x + y + three();
    }
    return two(15);
}
console.log(one());
*/
/*
function funcMath() {
    const a = 10;
    return function() {
        console.log(a * a);
    };
}

const mathPow = funcMath();
mathPow();
console.dir(mathPow);

const mathPow2 = function() {
    console.log(a * a);
};
console.dir(mathPow2);

function funcMath(a) {
    return function(b) {
        console.log(a * b);
    };
}
const mathPow = funcMath(6);
mathPow(5);
console.dir(mathPow);

*/