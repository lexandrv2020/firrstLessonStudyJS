'use strict';
//console.log(window.screen);
console.log(screen);
//console.dir(document);

//размеры экрана
//console.log('document clientHeight: ', document.documentElement.clientHeight);
//console.log('document clientWidth: ', document.documentElement.clientWidth);


//размеры блока в экране
//!!!        document.documentElement    - выжные свойства:
let block = document.querySelector('.boxing');
//console.dir(block);
console.log('clientHeight: ', block.clientHeight); //без  паддинги, скролл...(все что видит )
console.log('clientWidth: ', block.clientWidth); //без прокрутки и границ

console.log('scrollHeight: ', block.scrollHeight); //размер всего блока который в скролле даже скрыт
console.log('scrollWidth: ', block.scrollWidth);

console.log('offsetHeight: ', block.offsetHeight); //размер всего блока включая скролл и рамки
console.log('offsetWidth: ', block.offsetWidth);

let btn = document.querySelector('.box__button');
btn.addEventListener('click', () => {
    console.log(block.scrollTop);
    console.log(block.scrollLeft);
    //    block.scrollTop += 10;
    //    block.scrollLeft += 10;
    block.scrollBy(5, 0); // прокрутка документа на пиксели (ГОРИЗНТАЛЬНЫЕ, ВЕРТИКАЛЬНЫЕ)
    block.scrollTo(50, 20); // прокрутка документа на указанные координаты  (ГОРИЗНТАЛЬНЫЕ, ВЕРТИКАЛЬНЫЕ)
    console.log(block.getBoundingClientRect()); //координаты элемента боксинга
});




//объем видимой страницы пользвоателя
//document.documentElement.clientHeight
//document.documentElement.clientLeft
//document.documentElement.clientTop
//document.documentElement.clientWidth

//document.documentElement.offsetHeight
//document.documentElement.offsetLeft
//document.documentElement.offsetTop
//document.documentElement.offsetWidth


//сколько количество px от верха страницы (по скроллу) - можно менять

//document.documentElement.scrollHeight
//document.documentElement.scrollLeft
//document.documentElement.scrollTop
//document.documentElement.scrollWidth