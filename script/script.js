'use strict'; //усиленный конроль синтаксиса

//let _lang = 'en';
let _lang = 'ru';
//a)  конструкция if
if (_lang === 'ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
} else {
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thirday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
}

//b)  конструкция switch-case
switch (_lang) {
    case 'ru':
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресенье');
        break;
    case 'en':

        console.log('Monday');
        console.log('Tuesday');
        console.log('Wednesday');
        console.log('Thirday');
        console.log('Friday');
        console.log('Saturday');
        console.log('Sunday');
        break;
    default:
        break;
}
console.log(_lang);

//c.через многомерный массив без ифов и switch.
let arr_ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let arr_en = ['Monday', 'Tuesday', 'Wednesday', 'Thirday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i <= 6; i++) {
    let result = (_lang === 'ru') ? arr_ru[i] : arr_en[i];
    console.log(result);
}
/*
console.log((lang = 'ru') ? 'Понедельник' : 'Monday');
console.log((lang = 'ru') ? 'Вторник' : 'Tuesday');
console.log((lang = 'ru') ? 'Среда' : 'Wednesday');
console.log((lang = 'ru') ? 'Четверг' : 'Thirday');
console.log((lang = 'ru') ? 'Пятница' : 'Friday');
console.log((lang = 'ru') ? 'Суббота' : 'Saturday');
console.log((lang = 'ru') ? 'Воскресенье' : 'Sunday');

//a (if)

//}

if (lang = 'ru') {
    for (let i = 1; i <= 7; i++) {
        name = day_ + '' + i;
        console.log(name);
    }
} */