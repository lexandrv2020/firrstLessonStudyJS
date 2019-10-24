'use strict';

let firstNumber,
    secondNumber,
    questin_1 = 'Введите первое число',
    questin_2 = 'Введите второе число',
    result;

do {
    firstNumber = prompt(questin_1, '')
    if (isNotNumber(firstNumber)) {
        questin_1 = 'Вы ввели не числовое значение, повторите ввод.';
    }
}
while (isNotNumber(firstNumber));

do {
    secondNumber = prompt(questin_2, '')
    if (isNotNumber(secondNumber)) {
        questin_2 = 'Вы ввели не числовое значение второго числа, повторите ввод.';
    }
}
while (isNotNumber(secondNumber));

result = firstNumber - secondNumber;

if (result === 0) {
    alert(`Оба числа равны. (${firstNumber} = ${secondNumber})`);
} else if (result > 0) {
    alert(`Первое число больше второго. (${firstNumber} > ${secondNumber})`);
} else if (result < 0) {
    alert(`Второе число больше первого. (${firstNumber} < ${secondNumber})`);
}

function isNotNumber(value) {
    return (isNaN(value) || value === '' || value === null);
}