'use strict';

let anyValue = prompt('Введите произвольное содержимое', '   Вчера понедельник,  сегодня вторник, а завтра среда.... Пятница не за горами... ');

const newString = function(longString) {
    return longString.slice(0, 30) + '...'; //сокращаем строку
}

let postAnyValue = function(anyValue) {
    if (typeof(anyValue) !== 'string') {
        console.log('Тип веденного значения не равен строке. Условие обязательное.');
    } else {
        let formattedString = anyValue.replace(/^\s+/g, '');
        if (formattedString.length > 30) {
            formattedString = newString(formattedString);
        }
        console.log(formattedString);
        console.log(formattedString.length);
    }

}

postAnyValue(anyValue);