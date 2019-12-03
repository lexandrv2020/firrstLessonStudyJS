window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    
    //меню
    const clubListMenu = () => {
        const clubListMenu = document.getElementsByClassName('clubs-list')[0],
        menuItems = clubListMenu.querySelectorAll('ul');

        const openClubList = (event) => {
            menuItems.forEach(element => {
                if (element.style.display === 'block') {
                    element.style.display = 'none';
                }else{
                    element.style.display = 'block';
                }
            });
        }
        clubListMenu.addEventListener('click', openClubList);

    }
    clubListMenu();

    //Бесплатный визит
    const visitForm = () => {
        const openPopup = document.getElementsByClassName('open-popup')[0],
        form = document.getElementById('free_visit_form'),
        closeIcon = form.getElementsByClassName('close_icon')[0],
        body = document.querySelector('body');
       // console.log('form: ', form);
        const openVisitForm = (event) => {
            form.style.cssText = 'display: block';
        }
        const closeVisitForm = (event) => {
            if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                form.style.cssText = 'display: none';
            }
            
        }
        openPopup.addEventListener('click', openVisitForm);
        closeIcon.addEventListener('click', closeVisitForm);
        body.addEventListener('click', closeVisitForm);
    }
    visitForm();

    //callbackForm
    const callbackForm = () => {
        const right = document.getElementsByClassName('right')[0],
        openPopup = right.getElementsByClassName('callback-btn')[0],
        callBackForm = document.getElementById('callback_form'),
        closeIcon = callBackForm.getElementsByClassName('close_icon')[0],
        body = document.querySelector('body');
        const openVisitForm = (event) => {
            callBackForm.style.cssText = 'display: block';
        }
        const closeVisitForm = (event) => {
            if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                callBackForm.style.cssText = 'display: none';
            }
        }
        openPopup.addEventListener('click', openVisitForm);
        closeIcon.addEventListener('click', closeVisitForm);
        body.addEventListener('click', closeVisitForm);
    }
    callbackForm();


    const setPatterns = () =>{
        const inputsItems = document.querySelectorAll('input');
        inputsItems.forEach((elem) => {
            elem.addEventListener('input', () => {
                if (elem.type === 'tel') {
                    elem.value = elem.value.replace(/[^0-9\\+]/, '');
                }else if (elem.name === 'name') {
                    elem.value = elem.value.replace(/[^а-яА-Я\s]/, '')
                }
            });
        });        
    }
    setPatterns();

    const getGift = () =>{
        const fixedGift = document.getElementsByClassName('fixed-gift')[0],
            formGift = document.getElementById('gift'),
            img = fixedGift.querySelectorAll('img')[0],
            closeIcon = formGift.getElementsByClassName('close_icon')[0],
            closeBtn = formGift.getElementsByClassName('close-btn')[0];
            const openGift = (event) => {
                formGift.style.cssText = 'display: block';
                fixedGift.style.cssText = 'display: none';
            }
            const closeGiftForm = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formGift.style.cssText = 'display: none';
                }
            }
            img.addEventListener('click', openGift);    
            closeIcon.addEventListener('click', closeGiftForm);
            closeBtn.addEventListener('click', closeGiftForm);
    }
    getGift();

    const clubSlider = () => {
        const mainSlider= document.getElementsByClassName('main-slider')[0],
        slides = mainSlider.querySelectorAll('.slide');
        //console.log('slides: ', slides);

        let currentSlide = 0;
        const showSlide = ()=>{
            slides.forEach((elem)=>{
                elem.style.display = 'none';
            })
            //console.log('slides[currentSlide]: ', slides[currentSlide]);
            slides[currentSlide].style.display = 'flex'; 
            
            currentSlide++;
            if(currentSlide===slides.length){currentSlide=0};
        }
        setInterval(showSlide, 2000);
    }
    clubSlider();

    //форма баннера
    const sendForm = () =>{
        
        const bannerForm = document.getElementById('banner-form'),
           btnSend = bannerForm.getElementsByClassName('btn')[0],
           check1 = document.getElementById('check1'),
           formThanks = document.getElementById('thanks'),
           closeIcon = formThanks.getElementsByClassName('close_icon')[0],
           closeBtn = formThanks.getElementsByClassName('close-btn')[0],

            errorMassage = 'Произошла ошибка. Повторите позже....',
            loadMassage = 'Выполняется отправка....',
            successMassage = 'Спасибо! Мы скоро с Вами свяжемся!',
            errorMassageSrc = "./images/statuses/mark-warning.png",
            successMassageSrc = "./images/statuses/mark-done.png",
                                
            statusDone = document.createElement('img'),
            statusMessage = document.createElement('div'),
            statusError = document.createElement('img');

            statusDone.setAttribute('id', 'statusDone');
            statusError.setAttribute('id', 'statusError');
            statusDone.setAttribute('width', 'statusDone');
            statusDone.setAttribute('src', successMassageSrc);
            statusError.setAttribute('src', errorMassageSrc);
            statusError.style.display = 'none';
            statusDone.style.display = 'none';
            statusMessage.style.cssText = 'font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';
            bannerForm.addEventListener('submit', (event) => {
                event.preventDefault();
                bannerForm.appendChild(statusMessage);
                bannerForm.appendChild(statusError);
                bannerForm.appendChild(statusDone);
                statusMessage.textContent = loadMassage;
                
                const formData = new FormData(bannerForm);
                let body = {};
                formData.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEnd = () => {
                    statusMessage.textContent = successMassage;
                    formThanks.style.display = 'block';
                };

                const makeErrorEnd = () => {
                    statusMessage.textContent = errorMassage;
                    formThanks.style.display = 'block';
                    const headPhrase = "ВНИМАНИЕ!",
                        mainText = "К сожалениею нам не удалось отправить Вашу заявку! Повторите позднее...",
                        formContent = formThanks.querySelector('.form-content'),
                        head_txt = formContent.querySelector('h4'),
                        main_txt = formContent.querySelector('p');
                        head_txt.textContent = headPhrase;
                        main_txt.textContent = mainText;
                };
                
                postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    makeSuccessEnd();
                })
                .catch((error) => {
                    makeErrorEnd();
                });

                const closeThanksForm = (event) => {
                    if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                        formThanks.style.cssText = 'display: none';
                    }
                }
                closeIcon.addEventListener('click', closeThanksForm);
                closeBtn.addEventListener('click', closeThanksForm);
     
            }) ;
            
        }
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });             
    }    
    sendForm();

    //слайдер услуг клуба
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
const gallerySlider = () => {
    let slider = document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide');
        let btn_left = document.createElement('a');
        btn_left.setAttribute('href', '#');
        btn_left.classList.add('gallery-btn');
        btn_left.classList.add('prev');
        btn_left.setAttribute('id', 'arrow-left');
        let btn_right = document.createElement('a');
        btn_right.setAttribute('href', '#');
        btn_right.classList.add('gallery-btn');
        btn_right.classList.add('next');
        btn_right.setAttribute('id', 'arrow-right');
        slider.appendChild(btn_left);
        slider.appendChild(btn_right);
        let btn = slider.querySelectorAll('.gallery-btn');
        let ul = document.createElement('ul');
        ul.className = 'gallery-dots'; 
        slider.appendChild(ul);

    const dots = document.querySelector('.gallery-dots');
    
    // добавим "точки" на слайдер, по количеству слайдов
    const setDots = () => {
        slide.forEach((elem, index) => {
            slide[index].classList.add('gallery-item');
            slide[index].classList.remove('slide');
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
        prevSlide(slide, currentSlide, 'gallery-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'gallery-item-active');
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

        if (!target.matches('.gallery-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-item-active');
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

        nextSlide(slide, currentSlide, 'gallery-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.gallery-btn, .dot ')) { //||
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.gallery-btn, .dot')) { // ||
            startSlide();
        }
    });
    startSlide(4500);
}
gallerySlider();























}); 
