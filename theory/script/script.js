/*
'use strict';
/////////////////////////////////////////////////////////
///     JSON            /////////////////////////////////
/////////////////////////////////////////////////////////
const smarphone = {
    brand: 'samsung',
    rom: 5.5,
    ram: 128,
    gps: true,
    sensor: ['e-compass', 'Acceletometer', 'Gyroscope', 'Fingerprint Sensor'],
    camera: {
        back: [32, 5, 8],
        front: 16
    }
}

//для отправки на сервер в текстововм виде.
//console.log(JSON);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!МЕТОДЫ:
//      1) strigify(obj) -  преобразование в формат json 
//для отправки на сервер   
const jsonSmart = JSON.stringify(smarphone);
//console.log(jsonSmart);
//      1) parse(obj) -  преобразование из формат json в объект    
//для преобразования с сервер
const parseSmart = JSON.parse(jsonSmart);
//console.log(parseSmart);
*/





/////////////////////////////////////////////////////////////
///     AJAX         ////////////////////////////////////////
/////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        outprt = document.getElementById('output');


})