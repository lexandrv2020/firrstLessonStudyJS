'use strict';

let anyNumber,
    userNumber,
    confirmGame,
    result,
    phrase = 'Введите число',
    question = 'Сыграем в угадайку?. Я загадываю число от 1 до 100, ты угадываешь :)';

startBot();

function startBot() {
    do {
        if (confirmGame != false) {
            confirmGame = confirm(question);
            if (confirmGame === true) {
                startGame();
            } else {
                break;
            }
        }
    }
    while (confirmGame === false);
    confirmGame = true;
}

function startGame() {
    anyNumber = Math.ceil(Math.random() * (100 - 0) + 0);
    console.log(anyNumber);
    do {
        userNumber = getUserNumber();
    }
    while (Number(userNumber) !== anyNumber);
    question = 'Хотите сыграть еще?';
    phrase = 'Введите число';
    startBot();
}

function getUserNumber() {
    do {
        userNumber = prompt(phrase, '')
        if (isNotNumber(userNumber)) {
            phrase = 'Вы ввели не числовое значение';
        } else if (Number(userNumber) > anyNumber) {
            phrase = 'Меньше!';
        } else if (Number(userNumber) < anyNumber) {
            phrase = 'Больше!';
        } else if (Number(userNumber) === anyNumber) {
            alert(`Поздравляю!! Вы угадали число ${anyNumber}.`);
            break;
        }
    }
    while (isNotNumber(userNumber));
    return userNumber;
}

function isNotNumber(value) {
    return (isNaN(value) || value === '' || value === null);
}