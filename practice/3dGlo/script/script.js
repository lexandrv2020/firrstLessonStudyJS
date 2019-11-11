window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Timer
    /*
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining() {
            let dateStop = new Date(deadline),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 60 / 60) % 24);
            //days = Math.floor(timeRemaining / 60 / 60 / 24);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds,
            }
        }
        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000)
            }
        }
        updateClock();
    }
    countTimer('09 nov 2019');
    */

    //*****************************************************************
    /////////Переписать таймер с помощью setInterval//////////////////
    //*****************************************************************

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
            closeBtn = document.querySelector('.close-btn');

        const actionMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', actionMenu)
        closeBtn.addEventListener('click', actionMenu)
        menuItems.forEach(element => {
            element.addEventListener('click', actionMenu)
        });
    };

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            formBtn = document.querySelectorAll('.form-btn'),
            popUpClose = document.querySelector('.popup-close');
        popup.classList.add('showBlock');

        function showBlock() {
            document.documentElement.clientWidth
            if (document.documentElement.clientWidth > 768) {
                console.log('document.documentElement.clientWidth: ', document.documentElement.clientWidth);
                popup.style.opacity = '0';
                popup.style.display = 'block';
                let num = 0;
                let stId = setInterval(() => {
                        let opacity = num / 100;
                        popup.style.opacity = '' + opacity;
                        //console.log('popup.style.opacity: ', popup.style.opacity);
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
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    toggleMenu();
    togglePopUp();
});