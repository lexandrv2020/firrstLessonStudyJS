//setTimeout, setInterval и requestAnimationFrame
//'use strict';

//window.setTimeout(callback функция, время сек, [arg в функцию])
// =     setTimeout(callback функция, время сек, [arg в функцию])
/*
let getMessage = function(name) {
    console.log('Привет ' + name + ' !')
}
setTimeout(function() {
    console.log('Сообщение в конолью');
}, 3000);
//setInterval(callback функция, время сек, [arg в функцию])
let count = 0;

let idInterval = setInterval(getMessage, 1000, 'Георгий');
//let idInterval = setInterval(function() {
//    count++
//    console.log('Привет я setInterval ' + count + '!');
//}, 2000);

setTimeout(function() {
    clearInterval(idInterval);
}, 10000);

//clearTimeout(idInterval);
//clearInterval(idInterval);
*/

let worm = document.querySelector('.worm'),
    plane = document.querySelector('.airplane'),
    count = 0;

let warmDown = () => {
        count++;
        worm.style.top = count + 'px';
        plane.style.left = count * 2 + 'px';
        if (count < 360) {
            setTimeout(warmDown, 10);
        } else {
            clearInterval(idInterval);
        };
        console.log(count);
    }
    /*
    idInterval = setTimeout(() => {
        warmDown();
    }, 100);
    */


//requestAnimationFrame  - оптимизация анимации

let flyInterval;
let flyAnimate = () => {
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if (count < 360) {
        worm.style.top = count + 'px';
        plane.style.left = count * 2 + 'px';
    }
    if (count < 500) {
        plane.style.left = count * 2 + 'px';
    } else {
        cancelAnimationFrame(flyInterval);
    };
    console.log(count);
}

/*idInterval = setTimeout(() => {
    warmDown();
}, 100);*/

let animate = false;

document.addEventListener('click', function() {
    if (animate) {
        requestAnimationFrame(flyAnimate);
        animate = false;
    } else {
        cancelAnimationFrame(flyInterval);
        animate = true;
    }
});

//////**************************************
//********************DATE */



let date1 = new Date('1987 31 jan'),
    date2 = new Date('31 march 1987'),
    date3 = new Date(1987, 07, 23),
    date4 = new Date(2010, 07, 23),
    date5 = new Date(2010, 12 - 1, 23),
    date6 = new Date(1980, 0, 23, 30, 15, 00),
    date7 = new Date();
//console.log(date1);
//console.log(date2);
//console.log(date3);
//console.log(date4);
//console.log(date5);
console.log(date7);
//Fri Nov 08 2019 15:17:40 GMT+0300 (Москва, стандартное время)

//месяца от 0 до 11 (янв...дек)
//день недели от 0 до 6 (вск, пн.....сб)

//установить
//date6.setMonth(10);
//date6.setDate(23);
//date6.setHours(10, 30, 15, 00);
//...

//по гринвичу c UTC
//date6.getUTCFullYear()....; 
console.log('время ' + date7.getTime());

console.log(date7.toTimeString());
console.log(date7.toDateString());

console.log(date7.toLocaleTimeString('ru'));
console.log(date7.toLocaleDateString());
console.log(date7.toLocaleTimeString('en'));
console.log(date7.toISOString()); //2019-11-08T13:47:09.481Z
console.log(date7.toISOString().substr(0, 10)); //2019-11-08
console.log(Date.now()); //миллисек с 01.01.1970
console.log(Date.parse('10 march 2012')); //миллисек до 10.03.2012 с 01.01.1970

// console.log('год ' + date6.getFullYear());
// console.log('месяц ' + (date6.getMonth() + 1));
// console.log('день месяца ' + (date6.getDate()));
// console.log('день недели ' + (date6.getDay()));
// console.log('час ' + (date6.getHours()));
// console.log('мин ' + (date6.getMinutes()));
// console.log('сек ' + (date6.getSeconds()));
// console.log('миллсек ' + (date6.getMilliseconds));