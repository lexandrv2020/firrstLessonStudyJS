'use strict';

let itemNumber,
    sumNumber = 0,
    numberItems = 0,
    question = 'Введите число';

do {
    itemNumber = prompt(question, '')
    if (isNotNumber(itemNumber)) {
        question = 'Вы ввели не число.';
        continue;
    } else if (!(isCanseled(itemNumber))) {
        question = 'Введите следующее число.';
    } else {
        break;
    }

    sumNumber += Number(itemNumber);
    numberItems += 1;
    //console.log('sumNumber: ', sumNumber, numberItems);

}
while (!isCanseled(itemNumber));

alert(`Сумма введенных Вами чисел (${numberItems} раз) равна ${sumNumber}.`);

function isNotNumber(value) {
    return (isNaN(value) || value === '' || value === null);
}

function isCanseled(value) {
    return (value === null);
}