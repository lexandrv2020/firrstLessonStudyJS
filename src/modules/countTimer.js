//Timer
//function countTimer(deadline) {
const countTimer = (deadline) => {

    const timerHours = document.querySelector('#timer-hours'),
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
        updateClock(seconds, minutes, hours);
    };

    //function updateClock(seconds, minutes, hours, theEnd = false) {
    function updateClock(seconds, minutes, hours) {
        timerHours.textContent = (hours < 10) ? '0' + hours : hours;
        timerMinutes.textContent = (minutes < 10) ? '0' + minutes : minutes;
        timerSeconds.textContent = (seconds < 10) ? '0' + seconds : seconds;;
    };
    setInterval(getTimeRemaining, 1000);
}

export default countTimer;