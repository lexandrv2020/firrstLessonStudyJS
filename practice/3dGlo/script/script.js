window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Timer

    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {

            let dateStopLocal = new Date(deadline),
                dateStopUTC = new Date(dateStopLocal.toUTCString().substr(0, 25)),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStopUTC - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 60 / 60) % 24);
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
            } else {
                let newDate = new Date(deadline);
                newDate.setDate(newDate.getDate() + 1);
                newDate = newDate.toUTCString();
                countTimer(newDate);
            }

        }
        updateClock();
    }
    countTimer("10 nov 2019");
});