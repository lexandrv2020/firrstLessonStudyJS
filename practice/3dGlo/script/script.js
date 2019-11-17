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

    //calc   
    const calc = () => {
        const calcItems = document.querySelectorAll('.calc-item');
        calcItems.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.removeAttribute('type');
                elem.value = elem.value.replace(/[^0-9]/, '');
            })
        });
    };

    calc();

});