'use strict';
/////СОБЫТИЯ В JS//////////////////////////////////
//1 вариант..в html (не удачный)
//<button onclick="alert('клик по кнопке')" id="button">hi</button>

//второй варинта в js (костыль)
/*
let btn = document.querySelector('#button');
btn.onclick = function() {
        console.log('hi');
    }
    //console.dir(btn);
*/
//в DOM - справа - Event Listener 
//при выборе button - показыватьются все обработчики текущего элемента
//!!!!!!!!!!!!!!!!!!события на 'on...' - устарели и не популярны
//например если мы хотим ограничить количество кликов - событие будет продолжаться и обрываться все равно
//надо обнулять событиы ( .onclick = null)
//третий вариант - продвинутый костыль )))))))))))))))))))))))))))))))))))))))))
/*
let btn2 = document.querySelector('#button');
let count = 0;
btn2.onclick = function() {
        if (count === 3) {
            console.log('опачки :)');
            btn2.onclick = null; //отключаем событие
            return;
        }
        count++;
        console.log('hi ' + count);
    }
    //console.dir(btn2);

///новая функция - (перезатерла первую ((((((((( 
btn2.onclick = function() {
    //console.log('Это вторая функция'); //перезаписала функцию.. а первая обнулилась
}
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//////////////////////////СОВРЕМЕННЫЙ СПОСОБ//////////////////////
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///НАВЕШИВАНИЕ ФУНКЦИИ
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
let btn3 = document.querySelector('#button');
let count2 = 0;
let clicked = function() {
    count2++;
    //если счетчик = 3 удаляем обработчик события
    if (count2 === 3) btn.removeEventListener('click', clicked);
    console.log('произошел клик на кнопку' + count2);
};
btn.addEventListener('click', clicked);
*/
/*
btn.addEventListener('click', function() {
    console.log('произошел клик на кнопку 2');
});
btn.addEventListener('click', function() {
    console.log('произошел клик на кнопку 3');
});
*/

////у каждого события есть объект события
/*
let btn = document.querySelector('#button');
btn.addEventListener('click', function(event) {
    console.log(event);
    //выжные:
    //target (откуда вызвана)
    //type (событие)
    //currentTarget (где возникло событие)

});
*/
/*
let btn = document.querySelector('#button');
let eventFunc = function(event) {
    console.log(event.type);
}
btn.addEventListener('click', eventFunc); ////выполняется клик (4)
//btn.addEventListener('mouseup', eventFunc); //поднимаем кнопку по объекту (3)
//btn.addEventListener('mousedown', eventFunc); //нажимаем кнопку по объекту (2)объект 
//btn.addEventListener('mousemove', eventFunc); //подводим на / убираем с объекта (1) (5)
//!!!!!! click = mousedown + mouseup
btn.addEventListener('mouseenter', eventFunc); //заводим на объект
btn.addEventListener('mouseleave', eventFunc); //уводим с объекта
btn.addEventListener('mouseover', eventFunc); //заводим с границы объекта (+ при переходе на подчиненные объекты)
btn.addEventListener('mouseout', eventFunc); //уводим с границы объекта (+ при переходе на подчиненные объекты)
*/
/*
/////////////////////////////////////////////////////
///СОБЫТИЯ ЭЛЕМЕНТАМИ ФОРМЫ
let eventFunc = function(event) {
        console.log(event.type);
    }
    //document.querySelector('#text').addEventListener('input', eventFunc); //input - при изменении value
    //document.querySelector('#text').addEventListener('change', eventFunc); //при измении value когда кликнули на другую область
    //document.querySelector('#text').addEventListener('keydown', eventFunc); //нажатие кнопки
    //document.querySelector('#text').addEventListener('keyup', eventFunc); //поднятие кнопки
    //(keydown/ keyup ) при нажатии любой кнопки клавиатуры - проверять символ вводный

document.querySelector('#text').addEventListener('focus', eventFunc); //кликаем на элемент input
document.querySelector('#text').addEventListener('blur', eventFunc); //кликаем мимо input ПОСЛЕ FOCUS
//blur - проверяют что ввел в форму пользователь - валидная /нет

document.querySelector('#range').addEventListener('change', eventFunc); //изменяется позиция переключателя на линии (диапазон заложенный с индикатором)
//значение range === event.target.value
*/

///////////////////////////////////////////////////
///СОБЫТИЯ С ДОКУМЕНТОМ
//
/*
document.addEventListener('DOMContentLoaded', function() {
    //    console.log('Страница загрузилась');
});

//часто пишут перед 'use strict';
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //    console.log('Страница загрузилась');
    //onbeforeunload
    window.onbeforeunload = function() { //изменится на событие заложенное в браузере
        //    return 'Вы уверены, что хотите уйти со страницы?';
    };
});

*/
////////////////////////////////////////////////////////
///EVENTPREVENTBEFORE///////////////////////////////////
/*
//отменяем стандартное действие (перехват событий)
//пример отменяем переход на ссылку (google)
document.querySelector('#link').addEventListener('click', function(event) { //отменим переход
    event.preventDefault();
    console.log('Переход отменется');
});

document.addEventListener('contextmenu', function(event) { //отменили контекстное меню стандартное
    event.preventDefault();
});
*/
////////////////////////////////////////////////////////
//!!!!!!!!!!!! ВЫСПЛЫТИЕ СОБЫТИЙ / ЗАХВАТ СОБЫТИЙ //////
////////////////////////////////////////////////////////
//
document.addEventListener('DOMContentLoaded', function() {
    'use strict';


    let clickElem = null;

    function greenHundler(event) {
        console.log('clickElem: ', clickElem);
        if (clickElem) {

            clickElem.classList.remove('green');
        }

        clickElem = event.currentTarget;
        clickElem.classList.add('green');
    }
    /*
    //всплытие   (окращиевается "от обратного" - в результате синим будет только фон)
        document.querySelector('.event_btn').addEventListener('click', greenHundler);
        document.querySelector('body').addEventListener('click', greenHundler);
        document.querySelector('#text').addEventListener('click', greenHundler);
    */
    //захват  
    document.querySelector('.event_btn').addEventListener('click', greenHundler, true);
    document.querySelector('body').addEventListener('click', greenHundler, true);
    document.querySelector('#text').addEventListener('click', greenHundler, true);

});