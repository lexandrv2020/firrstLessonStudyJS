'use strict';

class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.options = {
            position = position
        };
    }
    init() {
        this.addGloClasses();
    };

    addGloClasses() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        const style = document.createElement('style')
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .glo-slyder{
                overflow: hidden !important;
            }
            .glo-slider__wrap{
                display: flex !important;
                transition: transform !important;
                will-change: transform !important;
            }
            .glo-slider__item{
                flex: 0 0 33% !important;
                margin: auto 0 !important;
            }
            `
        document.head.appendChild(style);
    }


}