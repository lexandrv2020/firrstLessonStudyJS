'use strict'; //усиленный конроль синтаксиса


//ЗАДАНИЕ 1
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

//ЗАДАНИЕ 2
let namePerson = 'Александр';
let _result = (namePerson === 'Артем') ? 'директор' : ((namePerson === 'Максим') ? 'преподаватель' : 'студент');
console.log(_result);