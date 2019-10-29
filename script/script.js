'use strict';

//сортируем коллекции книг
let collectionBooks = document.querySelectorAll('.books');
let elemBook = collectionBooks[0].querySelectorAll('.book');
collectionBooks[0].insertBefore(elemBook[1], elemBook[0]);
collectionBooks[0].insertBefore(elemBook[2], elemBook[6]);
collectionBooks[0].insertBefore(elemBook[3], elemBook[2]);
elemBook = collectionBooks[0].querySelectorAll('.book');
collectionBooks[0].insertBefore(elemBook[4], elemBook[3]);

//сортируем коллекции глав
let collection = document.querySelectorAll('ul');
let elemli_a = collection[1].querySelectorAll('li');
collection[1].insertBefore(elemli_a[2], elemli_a[10]);
collection[1].insertBefore(elemli_a[6], elemli_a[4]);
collection[1].insertBefore(elemli_a[8], elemli_a[4]);

let elemli_b = collection[4].querySelectorAll('li');
collection[4].insertBefore(elemli_b[9], elemli_b[2]);
collection[4].insertBefore(elemli_b[5], elemli_b[8]);
elemli_b = collection[4].querySelectorAll('li');
collection[4].insertBefore(elemli_b[3], elemli_b[6]);

//меняем фон
let bodySection = document.querySelector('body');
bodySection.setAttribute('style', 'background-image : url(./image/you-dont-know-js.jpg);')

//исправляем заглавие книги №3
let attr = document.getElementsByTagName('a');
attr[2].textContent = "Книга 3. this и Прототипы Объектов";

//убираем рекламу со страницы
let adv = document.querySelector('.adv');
adv.setAttribute('style', 'display : none;')

//добавляем раздел в содержание книги №6
collection = document.querySelectorAll('ul');
let elemli_b6 = collection[5].querySelectorAll('li');
let newElement = elemli_b6[8].cloneNode(true);
newElement.textContent = "Глава 8: За пределами ES6";
collection[5].insertBefore(newElement, elemli_b6[9]);