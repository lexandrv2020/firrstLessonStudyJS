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
            let theEnd = (seconds === 0) ? true : false;
            updateClock(seconds, minutes, hours, theEnd);
        };

        function updateClock(seconds, minutes, hours, theEnd = false) {
            timerHours.textContent = (hours < 10) ? '0' + hours : hours;
            timerMinutes.textContent = (minutes < 10) ? '0' + minutes : minutes;
            timerSeconds.textContent = (seconds < 10) ? '0' + seconds : seconds;
            //console.log('theEnd: ', theEnd);
            if (theEnd) {
                timerNumbers.style.color = '#7d0f0f';
                timerNumbers.style.fontWeight = '700';
            }

        };
        setInterval(getTimeRemaining, 1000);
    }
    //let deadline = new Date('31 dec 2018');

    //начало следующего дня
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(0, 0, 0, 0);
    countTimer(deadline);
});