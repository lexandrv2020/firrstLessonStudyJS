'use strict';
/*
let firstYear,
    secondYear,
    questin_1 = 'Введите начальный год',
    questin_2 = 'Введите конечный год',
    arrYears;

do {
    firstYear = prompt(questin_1, '')
    if (isNotNumber(firstYear)) {
        questin_1 = 'Вы ввели не числовое значение. Год вводится числом. Повторите ввод.';
    }
}
while (isNotNumber(firstYear));

do {
    secondYear = prompt(questin_2, '')
    if (isNotNumber(secondYear)) {
        questin_2 = 'Вы ввели не числовое значение конечного года, повторите ввод.';
    } else if (firstYear === secondYear) {
        alert(`Оба года равны. (${firstYear} = ${secondYear}). Введите значение отличного от начального года`);
    }
}
while (isNotNumber(secondYear) || (firstYear === secondYear));

let result = firstYear - secondYear;

arrYears = getHighYears((result < 0) ? firstYear : secondYear, (result < 0) ? secondYear : firstYear);
console.log(arrYears);

function isNotNumber(value) {
    return (isNaN(value) || value === '' || value === null);
}

function getHighYears(valuemin, valuemax) {
    let arrYears = new Array();
    for (let f = Number(valuemin); f <= valuemax; f++) {

        if (f % 4 > 0) {
            //не делится на 4 - не высокосный
        } else if ((f % 100 === 0) && (f % 400 === 0)) {
            // (+) делится на 100 и  делится на 400 - высокосный 
            arrYears[arrYears.length] = f;
        } else if (f % 100 > 0) {
            // (+) не делится на 100 - высокосный 
            arrYears[arrYears.length] = f;
        }

    }
    return arrYears;
}*/