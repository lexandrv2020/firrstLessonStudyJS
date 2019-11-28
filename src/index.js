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
import Validator from './modules/validator';


countTimer();

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

const options1 = {
    selector: '#form1',
    pattern: {
        zip: /\d{5,6}/
    },
    method: {
        'form-phone': [
            ['notEmpty'],
            ['pattern', 'form-phone']
        ],
        'form-name': [
            ['notEmpty'],
            ['pattern', 'form-name']
        ],
        'form-message': [
            ['notEmpty'],
            ['pattern', 'form-message']
        ],
        'form-email': [
            ['notEmpty'],
            ['pattern', 'form-email']
        ]
    },
};
const validForm1 = new Validator(options1);
validForm1.init();

const options2 = {
    selector: '#form2',
    pattern: {
        zip: /\d{5,6}/
    },
    method: {
        'form-phone': [
            ['notEmpty'],
            ['pattern', 'form-phone']
        ],
        'form-name': [
            ['notEmpty'],
            ['pattern', 'form-name']
        ],
        'form-message': [
            ['notEmpty'],
            ['pattern', 'form-message']
        ],
        'form-email': [
            ['notEmpty'],
            ['pattern', 'form-email']
        ]
    },
};
const validForm2 = new Validator(options2);
validForm2.init();

const options3 = {
    selector: '#form3',
    pattern: {
        zip: /\d{5,6}/
    },
    method: {
        'form-phone': [
            ['notEmpty'],
            ['pattern', 'form-phone']
        ],
        'form-name': [
            ['notEmpty'],
            ['pattern', 'form-name']
        ],
        'form-message': [
            ['notEmpty'],
            ['pattern', 'form-message']
        ],
        'form-email': [
            ['notEmpty'],
            ['pattern', 'form-email']
        ]
    },
};
const validForm3 = new Validator(options3);
validForm3.init();
c