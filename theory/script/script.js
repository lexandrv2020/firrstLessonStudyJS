//'use strict';

//const phone = document.getElementById('phone');
//!!!!!!!!!!!!!!СОБЫТИЯ

//const showLog = e => console.log(e.type);

//phone.addEventListener('keydown', showLog); //1
//phone.addEventListener('keyup', showLog); //4

//phone.addEventListener('keypress', showLog); //между keydown и keyup   //2
// (!!! ТОЛЬКО НА вывод символов (БУКВЫ/ЦИФРЫ))

//phone.addEventListener('input', showLog); //когда изменяется "value"   //3



//!!!!!!!!!!!!!!ОГРАНИЧЕНИЯ
//запрет ввода символов
/*
const showLog = function() {
    this.value = this.value.replace(/\D/g, '');
}
/*
phone.addEventListener('keydown', showLog); //1   
//символы заменяются - но отображаются до нажатия следующего
//потому что еще не произошел инпут


phone.addEventListener('keyup', showLog); //4 
//появляется и исчезает 
//(не красиво - но иногда нужно, когда показываем пользователю его буквы)
//потому что сперва кейдаун, потом кейпресс затем инпут

phone.addEventListener('keypress', showLog); //между keydown и keyup   //2
//символы заменяются - но отображаются до нажатия следующего
//потому что еще не произошел инпут (как в кейдаун)

phone.addEventListener('input', showLog); //когда изменяется "value"   //3
//"левые" символы даже не появляются
//САМОЕ ЛУЧШЕЕ ДЛЯ ОГРАНИЧЕНИЯ

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//до этого исполнения мы УЖЕ подключили скрипт валидации ввода телефона

//подключаем функцию через передачу параметра идентификатора формы
maskPhone('#phone');

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!ВАЛИДАЦИЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//проверка значений введенных пользователем и отображение найденных ошибок

//валидация на стороне клиента с помощью js*/
const myForm = document.getElementById('myform');
myForm.addEventListener('submit', valid);

const elementsForm = [];
//console.log(myForm.elements);
for (const elem of myForm.elements) {
    if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
        elementsForm.push(elem);
    }
}
console.log('elementsForm: ', elementsForm);

function valid(event) {
    //console.log('event: ', event);
    const patternForm = /^\d+$/;
    elementsForm.forEach(elem => {
        if (!elem.value) {

            elem.style.border = 'solid red';
            event.preventDefault();
        } else {
            elem.style.border = '';
        }
        if (elem.id === 'phone' && !patternForm.test(elem.value)) {
            elem.style.border = 'solid red';
            event.preventDefault();
        }
    })
}