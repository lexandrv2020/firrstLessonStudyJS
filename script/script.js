'use strict';

let anyValue = prompt('Введите произвольное содержимое', '   Вчера понедельник,  сегодня вторник, а завтра среда.... Пятница не за горами... ');


const newString = function(longString) {
    return longString.slice(0, 30) + '...'; //сокращаем строку
}

function getTypeOfValue(anyValue) {

    if (typeof anyValue === 'object') {
        //пользователь ввел отмена
        alert('Обязательно условие: ввести строку и подтвердить, а не нажать отмена.');
        return false;

    } else {
        let newType = Math.abs(anyValue);
        if (String(newType) === 'NaN') {
            return true;
        }
    }
    alert('Обязательно условие: ввести строку и подтвердить.');
    return false;
}


let postAnyValue = function(anyValue) {

    let typeOfValueIsString = getTypeOfValue(anyValue);

    if (typeOfValueIsString) {
        let formattedString = anyValue.replace(/^\s+/g, '');
        if (formattedString.length > 30) {
            formattedString = newString(formattedString);
        }
        console.log(formattedString);
        console.log(formattedString.length);
    }

}

postAnyValue(anyValue);