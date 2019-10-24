'use strict';

let itemNumber,
    sumNumber = 0,
    question = 'Введите число';

do {
    itemNumber = prompt(question, '')
    if (isNotNumber(itemNumber)) {
        question = 'Вы ввели не число.';
    } else if (!(isCanseled(itemNumber))) {
        question = 'Введите следующее число.';
    } else {
        break;
    }

    sumNumber += Number(itemNumber);
    console.log('sumNumber: ', sumNumber);

}
while (!isCanseled(itemNumber));

alert(`Сумма введенных Вами чисел равна ${sumNumber}.`);

function isNotNumber(value) {
    return (isNaN(value) || value === '' || value === null);
}

function isCanseled(value) {
    return (value === null);
}