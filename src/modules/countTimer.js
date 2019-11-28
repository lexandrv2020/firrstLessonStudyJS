//Timer
//function countTimer(deadline) {
const countTimer = (deadline) => {

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

export default countTimer;