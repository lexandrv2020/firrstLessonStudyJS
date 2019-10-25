'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let div = document.getElementById('weekDay');
let today = new Date();
let day = today.getDay();

for (let i = 0; i < week.length; i++) {
    console.log(week[i], i);

    if (i + 1 === day) {
        div.innerHTML += "<b>" + week[i] + "</b><br>";
    } else if (i + 1 === 6 || i + 1 === 7) {
        div.innerHTML += "<em>" + week[i] + "</em><br>";
    } else {
        div.innerHTML += week[i] + "<br>";
    }


}



//console.log('today: ', today);

//console.log('day: ', day);