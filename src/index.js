'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import calc from './modules/calc';
import SliderCarousel from './modules/carousel';
import sendForm from './modules/sendForm';

let deadline = new Date();
deadline.setDate(deadline.getDate() + 1);
deadline.setHours(0, 0, 0, 0);
countTimer(deadline);
toggleMenu();
togglePopUp();
tabs();
slider();
command();
let price = 100;
calc(price);

const options = {
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slidesToShow: 4,
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

};
const carousel_module = new SliderCarousel(options);
carousel_module.init();
sendForm();