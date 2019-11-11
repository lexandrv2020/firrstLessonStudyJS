//setTimeout, setInterval и requestAnimationFrame
'use strict';

let currentTime = document.getElementsByTagName('h1'),
    divElements = document.querySelectorAll('div'),
    textHello = document.querySelector('.hello'),
    getDay = document.querySelector('.getDay'),
    getTime = document.querySelector('.getTime'),
    toNewYear = document.querySelector('.toNewYear'),
    arrDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    curentDate = new Date(),
    curentDay = curentDate.getDay(),
    curentHour = curentDate.getHours(),
    curentMinute = curentDate.getMinutes(),
    curentSecond = curentDate.getSeconds(),
    am_pm = curentHour >= 12 ? 'PM' : 'AM',
    newYear = new Date('01 jan 2020 00:00:00'),
    timeRemaining = (newYear - curentDate) / 1000,
    daysRemaining = Math.floor(timeRemaining / 60 / 60 / 24);

currentTime[0].textContent = curentDate;
//console.log('curentDay: ', curentDay);
if (curentHour >= 22 & curentHour < 6) {
    textHello.textContent = 'Доброй ночи';
} else if (curentHour >= 6 & curentHour < 10) {
    textHello.textContent = 'Доброе утро';
} else if (curentHour >= 12 & curentHour < 18) {
    textHello.textContent = 'Добрый день';
} else if (curentHour >= 18 & curentHour < 22) {
    textHello.textContent = 'Добрый вечер';
};

getDay.textContent = 'Сегодня: ' + arrDays[curentDay - 1];
curentHour = (curentHour < 10) ? '0' + curentHour : curentHour;
curentMinute = (curentMinute < 10) ? '0' + curentMinute : curentMinute;
curentSecond = (curentSecond < 10) ? '0' + curentSecond : curentSecond;
getTime.textContent = 'Текущее время: ' + curentHour + ':' + curentMinute + ':' + curentSecond + ' ' + am_pm;
toNewYear.textContent = 'До нового года осталось: ' + daysRemaining + ' дн.';

console.log('divElements: ', divElements);
divElements.forEach(function(item) {
    item.style.fontStyle = 'italic';
});