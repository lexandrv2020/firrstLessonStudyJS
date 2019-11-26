    ///карусель
    class SliderCarousel {
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
                console.warn('slider-carusel: Необходимо 2 свойства: "main" и "wrap"!');
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
                .glo-slider{
                    overflow: hidden !important;
                }
                .glo-slider__wrap{
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                }
                .glo-slider__item{
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
                    #statusDone, 
                    #statusError{
                        position:relative;
                        width:58px;
                        height:58px;
                        margin: auto;
                    }
                    
                    #circularG{
                        position:relative;
                        width:58px;
                        height:58px;
                        margin: auto;
                    }
                    .circularG{
                        position:absolute;
                        background-color:rgb(0,0,0);
                        width:14px;
                        height:14px;
                        border-radius:9px;
                            -moz-border-radius:9px;
                        animation-name:bounce_circularG;
                            -moz-animation-name:bounce_circularG;
                        animation-duration:1.1s;
                            -moz-animation-duration:1.1s;
                        animation-iteration-count:infinite;
                            -moz-animation-iteration-count:infinite;
                        animation-direction:normal;
                            -moz-animation-direction:normal;
                    }
                    
                    #circularG_1{
                        left:0;
                        top:23px;
                        animation-delay:0.41s;
                            -moz-animation-delay:0.41s;
                    }
                    
                    #circularG_2{
                        left:6px;
                        top:6px;
                        animation-delay:0.55s;
                            -moz-animation-delay:0.55s;
                    }
                    
                    #circularG_3{
                        top:0;
                        left:23px;
                        animation-delay:0.69s;
                            -moz-animation-delay:0.69s;
                    }
                    
                    #circularG_4{
                        right:6px;
                        top:6px;
                        animation-delay:0.83s;
                            -moz-animation-delay:0.83s;
                    }
                    
                    #circularG_5{
                        right:0;
                        top:23px;
                        animation-delay:0.97s;
                            -moz-animation-delay:0.97s;
                    }
                    
                    #circularG_6{
                        right:6px;
                        bottom:6px;
                        animation-delay:1.1s;
                            -moz-animation-delay:1.1s;
                    }
                    
                    #circularG_7{
                        left:23px;
                        bottom:0;
                        animation-delay:1.24s;
                            -moz-animation-delay:1.24s;
                    }
                    
                    #circularG_8{
                        left:6px;
                        bottom:6px;
                        animation-delay:1.38s;
                            -moz-animation-delay:1.38s;
                    }
                    
                    @keyframes bounce_circularG{
                        0%{
                            transform:scale(1);
                        }
                        100%{
                            transform:scale(.3);
                        }
                    }
                    
                    @-moz-keyframes bounce_circularG{
                        0%{
                            -moz-transform:scale(1);
                        }
                        100%{
                            -moz-transform:scale(.3);
                        }
                    }
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

    export default SliderCarousel;