window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Timer
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerNumbers = document.querySelector('.timer-numbers');

        function getTimeRemaining() {
            let dateNow = new Date().getTime(),
                timeRemaining = Math.floor((deadline - dateNow) / 1000),
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 60 / 60) % 24);

            seconds = (seconds < 0) ? 0 : seconds;
            minutes = (minutes < 0) ? 0 : minutes;
            hours = (hours < 0) ? 0 : hours;
            let theEnd = (timeRemaining <= 0) ? true : false;
            updateClock(seconds, minutes, hours, theEnd);
        };

        function updateClock(seconds, minutes, hours, theEnd = false) {
            timerHours.textContent = (hours < 10) ? '0' + hours : hours;
            timerMinutes.textContent = (minutes < 10) ? '0' + minutes : minutes;
            timerSeconds.textContent = (seconds < 10) ? '0' + seconds : seconds;;
            if (theEnd) {
                timerNumbers.style.color = '#7d0f0f';
                timerNumbers.style.fontWeight = '700';
            }

        };
        setInterval(getTimeRemaining, 1000);
    }
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(0, 0, 0, 0);
    countTimer(deadline);

    //меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            body = document.querySelector('body'),
            menuItems = menu.querySelectorAll('ul>li'),
            document_a = document.querySelectorAll('a');

        const actionMenu = (event) => {
            menu.classList.toggle('active-menu');
        };

        const onMouseClick = (event) => {
            let active_menu = document.querySelector('.active-menu');
            let closeMenu = !(event.target.classList.contains('active-menu')) && (!!active_menu) && (event.target.localName !== 'img');
            if (closeMenu) {
                menu.classList.toggle('active-menu');
            }
        }
        const openBlock = (event, btn) => {
            event.preventDefault()
            const blockId = btn.getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        const applyEvent = (event, btn) => {
            if (event === 'actionMenu') {
                return actionMenu;
            } else if (event === 'mouseclick') {
                return onMouseClick;
            } else {
                return openBlock(event, btn);
            }
        };

        btnMenu.addEventListener('click', actionMenu);
        menuItems.forEach(element => {
            element.addEventListener('click', applyEvent('actionMenu', element));
        });
        body.addEventListener('click', applyEvent('mouseclick', body));
        document_a.forEach(element => {
            if (element.classList.contains('close-btn')) {
                element.addEventListener('click', applyEvent('actionMenu', element));
            } else if (element.closest('li') || element.closest('main')) {
                element.addEventListener('click', function(event) {
                    applyEvent(event, element)
                });
            }
        });


    };

    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popup.classList.add('showBlock');

        function showBlock() {
            document.documentElement.clientWidth
            if (document.documentElement.clientWidth > 768) {
                popup.style.opacity = '0';
                popup.style.display = 'block';
                let num = 0;
                let stId = setInterval(() => {
                        let opacity = num / 100;
                        popup.style.opacity = '' + opacity;
                        num++;
                        if (num === 100) {
                            clearInterval(stId);
                        }
                    },
                    30);
            } else {
                popup.style.display = 'block';
            }
        };

        //new animate
        function makeEaseInOut(timing) {
            return function(timeFraction) {
                if (timeFraction < .5)
                    return timing(2 * timeFraction) / 2;
                else
                    return (2 - timing(2 * (1 - timeFraction))) / 2;
            }
        }

        function animate({ timing, draw, duration }) {

            let start = performance.now();

            requestAnimationFrame(function animate(time) {
                // timeFraction изменяется от 0 до 1
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) timeFraction = 1;

                // вычисление текущего состояния анимации
                let progress = timing(timeFraction);

                draw(progress); // отрисовать её

                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }

            });
        }

        function bounce(timeFraction) {
            for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        }

        let bounceEaseInOut = makeEaseInOut(bounce);


        function makeAnimate() {
            animate({
                duration: 3000,
                timing: bounceEaseInOut,
                draw: function(progress) {
                    popupContent.style.left = progress * 500 + 'px';
                }
            });

        }
        //the end of animation


        popupBtn.forEach(element => {
            element.addEventListener('click', showBlock);
            element.addEventListener('click', makeAnimate);
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {

                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    }
    togglePopUp();

    //таб
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {

            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');

                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab'); //вернет найденный селектор (вверх - к родителю) до null
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    }
    tabs();

    //Slider
    const slider = () => {
        let slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dots = document.querySelector('.portfolio-dots');

        // добавим "точки" на слайдер, по количеству слайдов
        const setDots = () => {
            slide.forEach((elem, index) => {

                let newElem = document.createElement('li');
                if (index === 0) {
                    newElem.setAttribute('class', 'dot dot-active');
                } else {
                    newElem.setAttribute('class', 'dot');
                }
                dots.appendChild(newElem);
            });
        }
        setDots();
        let dot = document.querySelectorAll('.dot');


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        }
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        }
        let currentSlide = 0,
            interval;

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 1500) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                })
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn, .dot ')) { //||
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) { // ||
                startSlide();
            }
        });
        startSlide(1500);
    }
    slider();

    //command   
    const command = () => {
        const photoCommand = document.querySelectorAll('.command__photo');
        //console.log('photoCommand: ', photoCommand);

        photoCommand.forEach((elem) => {
            elem.addEventListener('mouseenter', (event) => {
                let originalSrc = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = originalSrc;

            })
            elem.addEventListener('mouseleave', (event) => {
                let datasetSrc = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = datasetSrc;
            })
        })
    }
    command();

    //calculator   
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total'),
            calcItems = document.querySelectorAll('.calc-item');

        calcItems.forEach((elem) => {
            if (elem.getAttribute('min') === '1') {
                elem.removeAttribute('type');
            }
        })

        calcItems.forEach((elem) => {
            elem.addEventListener('input', () => {
                //if (elem.getAttribute('min') === '1') {
                elem.value = elem.value.replace(/[^0-9]/, '');
                //}
            })
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = +calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (!!typeValue && !!squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
                let init = 0,
                    timer = setInterval(function() {
                        totalValue.textContent = Math.min(init += 25, total);
                        //console.log('init: ', init);
                        if (init > total) {
                            clearInterval(timer);
                        }
                    }, 1);
            }
            // totalValue.textContent = total;
        }

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            /*
                        if (target.matches('.calc-type') || target.matches('.calc-count') || target.matches('.calc-day') || target.matches('.calc-square')) {
                            console.log(1);
                        }
            */
            /*
                        if (target === calcType || target === calcCount || target === calcDay || target === calcSquare) {
                            console.log('target: ', target);
                        }
            */
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        })
    };

    let price = 100;
    calc(price);

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

    }
    const carousel = new SliderCarousel(options);
    carousel.init();

    //send ajax-form
    const sendForm = () => {

        const errorMassage = 'Произошла ошибка. Повторите позже....',
            loadMassage = 'Выполняется отправка....',
            successMassage = 'Спасибо! Мы скоро с Вами свяжемся!',

            errorMassageSrc = "./images/statuses/mark-warning.png",
            successMassageSrc = "./images/statuses/mark-done.png",
            loadMassageImg = 'Выполняется отправка....';


        form.forEach(itemForm => {
            const elemForm = document.getElementById(itemForm.id);
            //statusCircular
            const statusMessage = document.createElement('div'),
                statusCircular0 = document.createElement('div'),
                statusCircular1 = document.createElement('div'),
                statusCircular2 = document.createElement('div'),
                statusCircular3 = document.createElement('div'),
                statusCircular4 = document.createElement('div'),
                statusCircular5 = document.createElement('div'),
                statusCircular6 = document.createElement('div'),
                statusCircular7 = document.createElement('div'),
                statusCircular8 = document.createElement('div'),
                statusDone = document.createElement('img'),
                statusError = document.createElement('img');

            statusCircular0.setAttribute('id', 'circularG');
            statusCircular1.setAttribute('id', 'circularG_1');
            statusCircular2.setAttribute('id', 'circularG_2');
            statusCircular3.setAttribute('id', 'circularG_3');
            statusCircular4.setAttribute('id', 'circularG_4');
            statusCircular5.setAttribute('id', 'circularG_5');
            statusCircular6.setAttribute('id', 'circularG_6');
            statusCircular7.setAttribute('id', 'circularG_7');
            statusCircular8.setAttribute('id', 'circularG_8');
            statusCircular1.setAttribute('class', 'circularG');
            statusCircular2.setAttribute('class', 'circularG');
            statusCircular3.setAttribute('class', 'circularG');
            statusCircular4.setAttribute('class', 'circularG');
            statusCircular5.setAttribute('class', 'circularG');
            statusCircular6.setAttribute('class', 'circularG');
            statusCircular7.setAttribute('class', 'circularG');
            statusCircular8.setAttribute('class', 'circularG');
            statusDone.setAttribute('id', 'statusDone');
            statusError.setAttribute('id', 'statusError');
            statusDone.setAttribute('src', successMassageSrc);
            statusError.setAttribute('src', errorMassageSrc);
            statusCircular0.appendChild(statusCircular1);
            statusCircular0.appendChild(statusCircular2);
            statusCircular0.appendChild(statusCircular3);
            statusCircular0.appendChild(statusCircular4);
            statusCircular0.appendChild(statusCircular5);
            statusCircular0.appendChild(statusCircular6);
            statusCircular0.appendChild(statusCircular7);
            statusCircular0.appendChild(statusCircular8);
            statusCircular0.style.display = 'none';
            statusError.style.display = 'none';
            statusDone.style.display = 'none';
            statusCircular0.style.display = 'none';
            statusMessage.style.cssText = 'font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';

            //валидация данных
            const inputItems = elemForm.querySelectorAll('input');
            inputItems.forEach((elem) => {
                if (elem.name && (elem.name === 'user_name' || elem.name === 'user_email' || elem.name === 'user_phone')) {
                    elem.removeAttribute('type');
                };
            });

            inputItems.forEach((elem) => {
                elem.addEventListener('input', () => {
                    if (elem.name === 'user_name' || elem.name === 'user_message') {


                        elem.value = elem.value.replace(/[^а-яА-Я\s]/, '');
                    } else if (elem.name === 'user_phone') {
                        elem.value = elem.value.replace(/[^0-9\\+]/, '');
                    }
                });
            });

            elemForm.appendChild(statusMessage);

            elemForm.appendChild(statusCircular0);
            elemForm.appendChild(statusError);
            elemForm.appendChild(statusDone);

            elemForm.addEventListener('submit', (event) => {
                event.preventDefault();
                elemForm.appendChild(statusMessage);
                elemForm.appendChild(statusCircular0);
                elemForm.appendChild(statusError);
                elemForm.appendChild(statusDone);
                statusCircular0.style.display = 'block';
                statusError.style.display = 'none';
                statusDone.style.display = 'none';
                statusMessage.textContent = loadMassage;
                const formData = new FormData(elemForm);
                let body = {};
                formData.forEach((value, key) => {
                    body[key] = value;
                });


                /*
                                postData(body,
                                    () => {
                                        statusMessage.textContent = successMassage;
                                        let inputs = elemForm.querySelectorAll('input');
                                        inputs.forEach((item) => {
                                            item.value = '';
                                            item.classList.remove('success');
                                            statusDone.style.display = 'block';
                                            statusError.style.display = 'none';
                                        });
                                        statusCircular0.style.display = 'none';
                                    },
                                    (error) => {
                                        statusMessage.textContent = errorMassage;
                                        statusDone.style.display = 'none';
                                        statusError.style.display = 'block';
                                        console.error(error);
                                    });
                */
                const makeSuccessEnd = () => {
                    statusMessage.textContent = successMassage;
                    let inputs = elemForm.querySelectorAll('input');
                    inputs.forEach((item) => {
                        item.value = '';
                        item.classList.remove('success');
                        statusDone.style.display = 'block';
                        statusError.style.display = 'none';
                    });
                    statusCircular0.style.display = 'none';
                };

                const makeErrorEnd = () => {
                    statusMessage.textContent = successMassage;
                    let inputs = elemForm.querySelectorAll('input');
                    inputs.forEach((item) => {
                        item.value = '';
                        item.classList.remove('success');
                        statusDone.style.display = 'block';
                        statusError.style.display = 'none';
                    });
                    statusCircular0.style.display = 'none';
                };

                //promise                
                /*
                                postData(body)
                                    .then(makeSuccessEnd)
                                    .catch(makeErrorEnd);
                */
                //для fetch

                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        //statusMessage.textContent = successMassage;
                        makeSuccessEnd();
                    })
                    .catch((error) => {
                        //statusMessage.textContent = errorMassage;
                        console.error(error);
                        makeErrorEnd();
                    });
            });

        });

    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST', //без этой строки => GET запрос
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
                //credentials: 'include' //
        });
        /*        
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'application/json');
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState !== 4) {
                            return;
                        }
                        if (request.status === 200) {
                            resolve(request.responseText);
                        } else {
                            reject(request.status);
                        }
                    });
                    request.send(JSON.stringify(body));
                })
        */
    };


    sendForm();
});