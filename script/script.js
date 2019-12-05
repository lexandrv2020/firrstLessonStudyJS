window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //меню
    const clubListMenu = () => {
        const clubListMenu = document.getElementsByClassName('clubs-list')[0],
            menuItems = clubListMenu.querySelector('ul'),
            body = document.querySelector('body');

        const openClubList = (event) => {
            if (menuItems.style.display === 'block') {} else {
                menuItems.style.display = 'block';
            }
        }
        const closeClubList = (event) => {
            let target = event.target;
            target = target.closest('.clubs-list');
            if (!target) {
                menuItems.style.display = 'none';
            }
        }
        clubListMenu.addEventListener('click', openClubList);
        body.addEventListener('click', closeClubList);
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

    const setPatterns = () => {

        function maskPhone(selector, masked = '+7 (___) ___-__-__') {
            //const elem = document.querySelector(selector);
            const elem = selector;

            function mask(event) {
                const keyCode = event.keyCode;
                const template = masked,
                    def = template.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, "");
                //console.log(template);
                let i = 0,
                    newValue = template.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = newValue.indexOf("_");
                if (i != -1) {
                    newValue = newValue.slice(0, i);
                }
                let reg = template.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}";
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                    this.value = newValue;
                }
                if (event.type == "blur" && this.value.length < 5) {
                    this.value = "";
                }
            }

            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }

        const inputsItems = document.querySelectorAll('input');
        inputsItems.forEach((elem) => {
            if (elem.type === 'tel') {
                //console.log('elem: ', elem);
                maskPhone(elem);
            } else {
                elem.addEventListener('input', () => {
                    if (elem.name === 'name' && elem.getAttribute('placeholder') !== 'Промокод') {
                        elem.value = elem.value.replace(/[^а-яА-Я\s]/, '')
                    }
                })
            }
        });
    }
    setPatterns();
    //подарок
    const getGift = () => {
        let locat = location.href;
        if (locat.indexOf("mozaika") != -1 || locat.indexOf("schelkovo") != -1) {} else {

            const fixedGift = document.getElementsByClassName('fixed-gift')[0],
                formGift = document.getElementById('gift'),
                img = fixedGift.querySelectorAll('img')[0],
                closeIcon = formGift.getElementsByClassName('close_icon')[0],
                closeBtn = formGift.getElementsByClassName('close-btn')[0],
                body = document.querySelector('body');
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
            body.addEventListener('click', closeGiftForm);
        }
    }
    getGift();
    //слайдер клуба
    const clubSlider = () => {
        const mainSlider = document.getElementsByClassName('main-slider')[0],
            slides = mainSlider.querySelectorAll('.slide');
        let currentSlide = 0;
        const showSlide = () => {
            slides.forEach((elem) => {
                elem.style.display = 'none';
            })
            slides[currentSlide].style.display = 'flex';

            currentSlide++;
            if (currentSlide === slides.length) { currentSlide = 0 };
        }
        setInterval(showSlide, 2000);
    }
    clubSlider();

    //отправка формы
    const sendForm = () => {
        const formThanks = document.getElementById('thanks'),
            closeIcon = formThanks.getElementsByClassName('close_icon')[0],
            closeBtn = formThanks.getElementsByClassName('close-btn')[0],
            errorMassageSrc = "./images/statuses/mark-warning.png",
            successMassageSrc = "./images/statuses/mark-done.png",

            form1Check = document.getElementById('check2'),
            form2Check = document.getElementById('check'),
            formBannerCheck = document.getElementById('check1'),
            formOrderCheck = document.getElementById('card_check'),

            statusDone = document.createElement('img'),
            statusMessage = document.createElement('div'),
            statusError = document.createElement('img');

        form1Check.setAttribute('name', 'name');
        statusDone.setAttribute('id', 'statusDone');
        statusError.setAttribute('id', 'statusError');
        statusDone.setAttribute('width', 'statusDone');
        statusDone.setAttribute('src', successMassageSrc);
        statusError.setAttribute('src', errorMassageSrc);
        statusError.style.display = 'none';
        statusDone.style.display = 'none';
        statusMessage.style.cssText = 'font-size: 1rem; color: green;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';

        //форма баннера
        const makeBannerForm = () => {

            const bannerForm = document.getElementById('banner-form'),
                errorMassageThanks = 'Произошла ошибка. Повторите позже....',
                loadMassageThanks = 'Выполняется отправка....',
                successMassageThanks = 'Спасибо! Мы скоро с Вами свяжемся!';

            formBannerCheck.style.display = 'block';
            formBannerCheck.style.position = 'absolute';
            formBannerCheck.style.zIndex = -100;
            formBannerCheck.style.left = 50 + '%';

            bannerForm.addEventListener('submit', (event) => {

                event.preventDefault();
                bannerForm.appendChild(statusMessage);
                bannerForm.appendChild(statusError);
                bannerForm.appendChild(statusDone);
                statusMessage.textContent = loadMassageThanks;

                let formData = new FormData(bannerForm);
                let body = {};

                formData.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEnd = () => {
                    statusMessage.textContent = successMassageThanks;
                    formThanks.style.display = 'block';
                };

                const makeErrorEnd = () => {
                    statusMessage.textContent = errorMassageThanks;
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
            })
        };
        makeBannerForm();

        //форма2
        const makeForm1 = () => {
            const forms1 = document.getElementById('form1'),
                errorMassageForm1 = 'Произошла ошибка. Повторите позже....',
                loadMassageForm1 = 'Выполняется запись....',
                successMassageForm1 = 'Спасибо! Мы обязательно Вам перезвоним.';

            forms1.addEventListener('submit', (event) => {
                event.preventDefault();
                forms1.appendChild(statusMessage);
                forms1.appendChild(statusError);
                forms1.appendChild(statusDone);
                statusMessage.textContent = loadMassageForm1;

                const formDataForm1 = new FormData(forms1);
                let body = {};
                formDataForm1.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEndForm1 = () => {
                    statusMessage.textContent = successMassageForm1;
                };

                const makeErrorEndForm1 = () => {
                    statusMessage.textContent = errorMassageForm1;
                    //formThanks.style.display = 'block';
                    let headPhrase = "ВНИМАНИЕ!",
                        mainText = "К сожалениею связь не удалась! Повторите позднее...",
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
                        makeSuccessEndForm1();
                    })
                    .catch((error) => {
                        makeErrorEndForm1();
                    });

                const closeThanksForm1 = (event) => {
                    if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                        //formThanks.style.cssText = 'display: none';
                        statusMessage.textContent = '';
                        form1Check.close();
                    }
                }
                closeIcon.addEventListener('click', closeThanksForm1);
                closeBtn.addEventListener('click', closeThanksForm1);
            });
        };
        makeForm1();

        //форма2
        const makeForm2 = () => {
            const forms2 = document.getElementById('form2'),
                errorMassageForm2 = 'Произошла ошибка. Повторите позже....',
                loadMassageForm2 = 'Выполняется запись....',
                successMassageForm2 = 'Спасибо! Вы успешно записаны.';
            forms2.addEventListener('submit', (event) => {
                event.preventDefault();
                forms2.appendChild(statusMessage);
                forms2.appendChild(statusError);
                forms2.appendChild(statusDone);
                statusMessage.textContent = loadMassageForm2;

                const formDataForm2 = new FormData(forms2);
                let body = {};
                formDataForm2.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEndForm2 = () => {
                    statusMessage.textContent = successMassageForm2;
                    //formThanks.style.display = 'block';
                    //forms2.style.display = 'none';
                };

                const makeErrorEndForm2 = () => {
                    statusMessage.textContent = errorMassageForm2;
                    //formThanks.style.display = 'block';
                    let headPhrase = "ВНИМАНИЕ!",
                        mainText = "К сожалениею запись не удалась! Повторите позднее...",
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
                        makeSuccessEndForm2();
                    })
                    .catch((error) => {
                        makeErrorEndForm2();
                    });

                const closeThanksForm2 = (event) => {
                    if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                        //formThanks.style.cssText = 'display: none';
                        statusMessage.textContent = '';
                    }
                }
                closeIcon.addEventListener('click', closeThanksForm2);
                closeBtn.addEventListener('click', closeThanksForm2);
            });
        };
        makeForm2();

        //card-order
        const makeCardOrder = () => {
            const cardOrderForm = document.getElementById('card_order'),
                errorMassageOrder = 'Произошла ошибка. Повторите позже....',
                loadMassageOrder = 'Выполняется отправка брони....',
                successMassageOrder = 'Спасибо! Вы сделали Правильный Выбор!';
            cardOrderForm.addEventListener('submit', (event) => {
                event.preventDefault();
                cardOrderForm.appendChild(statusMessage);
                cardOrderForm.appendChild(statusError);
                cardOrderForm.appendChild(statusDone);
                statusMessage.textContent = loadMassageOrder;

                const formDataCardOrderForm = new FormData(cardOrderForm);
                let body = {};
                formDataCardOrderForm.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEndCardOrder = () => {
                    statusMessage.textContent = successMassageOrder;
                    formThanks.style.display = 'block';
                };

                const makeErrorEndCardOrder = () => {
                    statusMessage.textContent = errorMassageOrder;
                    formThanks.style.display = 'block';
                    let headPhrase = "ВНИМАНИЕ!",
                        mainText = "К сожалениею бронь не удалась! Повторите позднее...",
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
                        makeSuccessEndCardOrder();
                    })
                    .catch((error) => {
                        makeErrorEndCardOrder();
                    });

                const closeThanksCardOrder = (event) => {
                    if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                        formThanks.style.cssText = 'display: none';
                        statusMessage.textContent = '';
                    }
                }
                closeIcon.addEventListener('click', closeThanksCardOrder);
                closeBtn.addEventListener('click', closeThanksCardOrder);

            });
        };
        makeCardOrder();

        //footer-form
        const makeFooterForm = () => {
            const footerForm = document.getElementById('footer_form'),
                footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
                footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
                errorMassageFooter = 'Произошла ошибка. Повторите позже....',
                loadMassageFooter = 'Выполняется отправка....',
                successMassageFooter = 'Спасибо! Мы обязательно вам перезвоним.';

            footerLetoMozaika.style.display = 'block';
            footerLetoMozaika.style.position = 'absolute';
            footerLetoMozaika.style.zIndex = -100;
            footerLetoMozaika.setAttribute('required', '');

            footerLetoSchelkovo.style.display = 'block';
            footerLetoSchelkovo.style.position = 'absolute';
            footerLetoSchelkovo.style.zIndex = -100;
            footerLetoSchelkovo.setAttribute('required', '');

            footerForm.addEventListener('submit', (event) => {

                event.preventDefault();
                footerForm.appendChild(statusMessage);
                footerForm.appendChild(statusError);
                footerForm.appendChild(statusDone);
                statusMessage.textContent = loadMassageFooter;

                const formDataFooterForm = new FormData(footerForm);
                let body = {};
                formDataFooterForm.forEach((value, key) => {
                    body[key] = value;
                });

                const makeSuccessEndFooterForm = () => {
                    statusMessage.textContent = successMassageFooter;
                    formThanks.style.display = 'block';
                };

                const makeErrorEndFooterForm = () => {
                    statusMessage.textContent = errorMassageFooter;
                    formThanks.style.display = 'block';
                    let headPhrase = "ВНИМАНИЕ!",
                        mainText = "К сожалениею запись не удалась! Повторите позднее...",
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
                        makeSuccessEndFooterForm();
                    })
                    .catch((error) => {
                        makeErrorEndFooterForm();
                    });

                const closeThanksFooterForm = (event) => {
                    if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                        formThanks.style.cssText = 'display: none';
                        statusMessage.textContent = '';
                    }
                }
                closeIcon.addEventListener('click', closeThanksFooterForm);
                closeBtn.addEventListener('click', closeThanksFooterForm);
            });
        };
        makeFooterForm();

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        }
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
            if (!main || !wrap) {}
            const services = document.getElementById('services');
            this.main = services.getElementsByClassName('wrapper')[0];
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
        }
        addStyle() {
            const style = document.createElement('style')
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }

            style.textContent = `
                #services{
                    position: relative;
                }
                .glo-slider{
                    overflow: hidden !important;
                }
                .glo-slider__wrap{
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                }
                .slide{
                    flex: 0 0 ${this.options.widthSlide}% !important;
                }
                .glo-slider__prev,
                .glo-slider__next{
                    margin: 0 10px;
                    border: 20px solid transparent;
                    background: transparent;
                }
                .glo-slider__next{
                    background-image: url("./images/arrow-left.png");
                    background-position: 25% 50%;
                    background-color: #ffd11a;
                    background-size: contain;
                    width: 35px;
                    height: 35px;
                    font-size: inherit;

                    /*border-left-color: #ffd11a;*/
                }
                .glo-slider__prev{
                    border-right-color: #ffd11a;
                }
                .glo-slider__next:hover,
                .glo-slider__next:focus,
                .glo-slider__prev:hover,
                .glo-slider__prev:focus{
                    background: transparent;
                    outline: transparent;
                }
                .glo-slider__prev{    
                    position: absolute;
                    left: 20%;
                    top: 50%;
                    
                }
                .glo-slider__next{    
                    position: absolute;
                    right: 20%;
                    top: 50%;
                    
                }                
                .gallery {
                    padding: 5rem 0; 
                }
                .gallery-slider {
                    position: relative;
                    height: 775px;
                    margin: 0 auto;
                    display: block; }
                    @media (max-width: 1024px) {
                        .gallery-slider {
                            height: 650px;
                        } 
                    }
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
                    transform: translate(-50%, -50%); 
                }
                .gallery-item-active {
                    opacity: 1;
                    -webkit-transition: opacity .5s ease;
                    transition: opacity .5s ease; 
                }
                .gallery-btn {
                    position: absolute;
                    cursor: pointer;
                    top: 50%;
                    z-index: 5;
                    background-color: rgba(0, 0, 0, 0.5);
                    background-repeat: no-repeat;
                    background-size: 28px;
                    border-radius: 50%;
                    -webkit-transition: background-color 0.2s ease;
                    transition: background-color 0.2s ease; 
                }
                .gallery-btn.prev {
                    left: 20px;
                    background-image: url("./images/arrow-left.png");
                    background-position: 25% 50%;
                    background-color: #ffd11a;
                    background-size: contain;
                    width: 35px;
                    height: 35px;
                    font-size: inherit;
                }
                .gallery-btn.next {
                    right: 20px;
                    background-image: url("./images/arrow-right.png");
                    background-position: 75% 50%; 
                    background-color: #ffd11a;
                    width: 35px;
                    height: 35px;
                    background-size: contain;
                    font-size: inherit;
                }
                .gallery-btn:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                    -webkit-transition: background-color 0.2s ease;
                    transition: background-color 0.2s ease; 
                }
                .gallery-dots {
                    position: absolute;
                    width: 100%;
                    bottom: 180px;
                    left: 0;
                    margin: 0 auto;
                    margin-top: 20px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    z-index: 5; 
                }
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
                    transition: background-color, transform 0.4s ease, -webkit-transform 0.4s ease; 
                }
                .gallery-dots .dot-active {
                        background-color: #19b5fe;
                        -webkit-transform: scale(1.2);
                        transform: scale(1.2); }
                .gallery-dots .dot:hover {
                        background-color: #53c6fe;
                        -webkit-transform: scale(1.2);
                        transform: scale(1.2); }

                .next-glo{
                    right: 20%;
                    margin-right: 16%;
                }
                .prev-glo{
                    left: 20%;
                    margin-left: 16%;
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
            this.prev.className = 'gallery-btn prev prev-glo';
            this.next.className = 'gallery-btn next next-glo';

            const wrapper = document.getElementsByClassName('wrapper glo-slider')[0];
            wrapper.appendChild(this.prev);
            wrapper.appendChild(this.next);
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
            slide[0].classList.add('gallery-item-active');
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

    //калькулятор
    const calcPrice = () => {
        let locat = location.href;
        if (locat.indexOf("mozaika") != -1 || locat.indexOf("schelkovo") != -1) {} else {
            const time = document.querySelector('.time'),
                price = document.querySelector('.price'),
                magicWorldBlock = price.querySelector('.input-text'),
                magicWorldtext = magicWorldBlock.querySelector('input'),
                clubName = document.querySelectorAll('input[name="club-name"]'),
                cardType = document.querySelectorAll('input[name="card-type"]'),
                priceTotal = document.getElementById('price-total'),
                mozaika_arr = [0, 1999, 0, 0, 0, 0, 9900, 0, 0, 13900, 0, 0, 19900],
                schelkovo_arr = [0, 2999, 0, 0, 0, 0, 14990, 0, 0, 21990, 0, 0, 24990];

            let period = 1,
                club = 'mozaika',
                arr = mozaika_arr,
                bonus = 0;

            const getCurrentPrice = () => {
                if (magicWorldtext.value.replace(/\s+/g, '') === 'ТЕЛО2019') {
                    bonus = 30;
                }
                arr = club === 'mozaika' ? mozaika_arr : schelkovo_arr;

                priceTotal.textContent = +arr[period] - Math.floor(+arr[period] / 100 * bonus);
            }

            const getClubNameValue = (elem) => {
                club = elem.value;
                getCurrentPrice();
            }

            const getCardTypeValue = (elem) => {
                period = +elem.value;
                getCurrentPrice();
            }
            magicWorldtext.addEventListener('input', getCurrentPrice);

            clubName.forEach(element => {
                element.addEventListener('click', function() {
                    getClubNameValue(element);
                });
            });

            cardType.forEach(element => {
                element.addEventListener('click', function() {
                    getCardTypeValue(element);
                });
            });
            getCurrentPrice();
        }
    }
    calcPrice();

    //бургер-меню
    const burgerMenu = () => {
        const topMenu = document.querySelector('.top-menu'),
            menuButton = document.querySelector('.menu-button'),
            popupMenu = document.querySelector('.popup-menu'),
            closeBtn = popupMenu.querySelector('.close-menu-btn'),
            menuItemsPopup = popupMenu.querySelectorAll('li');

        window.addEventListener('scroll', () => {
            if (pageYOffset > 215) {
                topMenu.style.cssText = 'position: fixed; top:0; right:0;';
            } else if (pageYOffset < 215) {
                topMenu.style.cssText = '';
            }
        });

        const openPopupMenu = () => {
            if (popupMenu.style.display === 'flex') {
                popupMenu.style.display = 'none';
            } else {
                popupMenu.style.display = 'flex';
            }
        };
        menuButton.addEventListener('click', openPopupMenu);

        const closePopupMenu = () => {
            popupMenu.style.display = 'none';
        }

        closeBtn.addEventListener('click', closePopupMenu);
        menuItemsPopup.forEach(element => {
            element.addEventListener('click', closePopupMenu);
        });
    }
    burgerMenu();

    //стрелка возврата
    const arrowUp = () => {
        const upBtn = document.getElementById('totop');
        upBtn.style.display = 'none';
        window.addEventListener('scroll', () => {
            if (pageYOffset > 600) {
                upBtn.style.display = 'block';
            } else if (pageYOffset < 600) {
                upBtn.style.display = 'none';
            }
        });
    }
    arrowUp();
});