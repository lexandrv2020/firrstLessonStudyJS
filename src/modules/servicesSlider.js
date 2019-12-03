class servicesSlider {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 5,
        responsive = [],
    }) {
        if (!main || !wrap) {
            
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
        };
        this.responsive = responsive;
    }
    init() {

        this.addGloClasses();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responseInit) {
            this.responseInit();
        }
    };

    addGloClasses() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        console.log('this.wrap: ', this.wrap);
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }
    addStyle() {
        const style = document.createElement('style')
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            ._glo-slider{
                overflow: hidden !important;
            }
            ._glo-slider__wrap{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            ._glo-slider__item{
                display: flex !important;
                align-items: center  !important;
                justify-content: center  !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
                }
            
            .glo-slider__prev,
            .glo-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            .glo-slider__next{
                border-left-color: #19b5fe;
            }
            .glo-slider__prev{
                border-right-color: #19b5fe;
            }
            .glo-slider__next:hover,
            .glo-slider__next:focus,
            .glo-slider__prev:hover,
            .glo-slider__prev:focus{
                background: transparent;
                outline: transparent;
                }
                .gallery {
                    padding: 5rem 0; }
                    .gallery-slider {
                        position: relative;
                        height: 775px;
                        margin: 0 auto;
                        display: block; }
                        @media (max-width: 1024px) {
                        .gallery-slider {
                            height: 650px; } }
                    .gallery-item {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        width: 100%;
                        opacity: 0;
                        -webkit-transition: opacity .5s ease;
                        transition: opacity .5s ease; }
                        .gallery-item img {
                        height: auto;
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%); }
                        .gallery-item-active {
                        opacity: 1;
                        -webkit-transition: opacity .5s ease;
                        transition: opacity .5s ease; }
                    .gallery-btn {
                        position: absolute;
                        cursor: pointer;
                        top: 50%;
                        z-index: 5;
                        width: 50px;
                        height: 50px;
                        background-color: rgba(0, 0, 0, 0.5);
                        background-repeat: no-repeat;
                        background-size: 34px;
                        border-radius: 50%;
                        -webkit-transition: background-color 0.2s ease;
                        transition: background-color 0.2s ease; }
                        .gallery-btn.prev {
                        left: 20px;
                        background-image: url("./images/arrow-left.png");
                        background-position: 25% 50%; }
                        .gallery-btn.next {
                        right: 20px;
                        background-image: url("./images/arrow-right.png");
                        background-position: 75% 50%; }
                        .gallery-btn:hover {
                        background-color: rgba(0, 0, 0, 0.8);
                        -webkit-transition: background-color 0.2s ease;
                        transition: background-color 0.2s ease; }
                    .gallery-dots {
                        position: absolute;
                        bottom: 20px;
                        width: 100%;
                        margin: 0 auto;
                        margin-top: 20px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        z-index: 5; }
                        .gallery-dots .dot {
                        cursor: pointer;
                        height: 16px;
                        width: 16px;
                        margin: 0 10px;
                        border-radius: 50%;
                        border: solid #fff;
                        display: inline-block;
                        -webkit-transition: background-color, -webkit-transform 0.4s ease;
                        transition: background-color, -webkit-transform 0.4s ease;
                        transition: background-color, transform 0.4s ease;
                        transition: background-color, transform 0.4s ease, -webkit-transform 0.4s ease; }
                        .gallery-dots .dot-active {
                            background-color: #19b5fe;
                            -webkit-transform: scale(1.2);
                            transform: scale(1.2); }
                        .gallery-dots .dot:hover {
                            background-color: #53c6fe;
                            -webkit-transform: scale(1.2);
                            transform: scale(1.2); }

            `
        document.head.appendChild(style);
    }
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    };

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        };
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        };
    }
    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';
        
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    };

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
}
