'use strict';

import clubListMenu from './modules/clubListMenu';
import visitForm from './modules/visitForm';
import callbackForm from './modules/callbackForm';
import setPatterns from './modules/setPatterns';
import getGift from './modules/getGift';
import clubSlider from './modules/clubSlider';
import sendForm from './modules/sendForm';
import servicesSlider from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';
import calcPrice from './modules/calcPrice';
import fixingMenu from './modules/fixingMenu';

//меню
clubListMenu();
//Бесплатный визит
visitForm();
//callbackForm
callbackForm();
//шаблоны
setPatterns();
//подарок
getGift();
//слайдер клуба
clubSlider();
//форма баннера
sendForm();
//слайдер услуг клуба
const options = {
    main: '.wrapper',
    wrap: '.services-slider',
    slidesToShow: 5,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
    }, {
        breakpoint: 768,
        slidesToShow: 2
    }, {
        breakpoint: 576,
        slidesToShow: 1
    }, ]
}
const carousel = new servicesSlider(options);
carousel.init();
//Slider
gallerySlider();
//калькулятор
calcPrice();

//бургер меню. Фиксация
fixingMenu();
