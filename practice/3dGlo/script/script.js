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
            menuItems = menu.querySelectorAll('ul>li'),
            document_a = document.querySelectorAll('a');

        const actionMenu = () => {
            menu.classList.toggle('active-menu');
        };

        const openBlock = (event, btn) => {
            event.preventDefault()
            const blockId = btn.getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        btnMenu.addEventListener('click', actionMenu);
        menuItems.forEach(element => {
            element.addEventListener('click', actionMenu);
        });

        document_a.forEach(element => {
            if (element.classList.contains('close-btn')) {
                element.addEventListener('click', actionMenu);
            } else if (element.closest('li') || element.closest('main')) {

                element.addEventListener('click', function(event) {
                    openBlock(event, element)
                });
            }
        });
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
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
                    10);
            } else {
                popup.style.display = 'block';
            }
        };

        popupBtn.forEach(element => {
            element.addEventListener('click', showBlock);
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

});