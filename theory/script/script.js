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
    /*
        //http запрос без перезагрузки страницы
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', (event) => {
            console.log(request.readyState);
            // возвращает состояние        
            // 0 = создан объект (request = new XMLHttpRequest())
            // 1 = после вызова Open
            // 2 = вызван метод SEND и получены заголовки
            // 3 = загружено ТЕЛО (body)
            // 4 = запрос завершен и получен от сервера результат
        });

        //request.open('GET', url, assinc, login, pass); 
        //метод позволяет настроить ajax-запрос (обязательные 2 первых параметра)
        request.open('GET', './script/cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        //устанавливаем загооловки
        request.send(); //если POST передается с телом

        //события XMLHttpRequest
        //1) запрос начат
        request.addEventListener('loadstart', (event) => {});

        //2) процесс
        request.addEventListener('progress', (event) => {});

        //3) отменить 
        request.addEventListener('abort', (event) => {});

        //4) завершен без ошибок
        request.addEventListener('load', (event) => {});

        //5) завершен C ошибками
        request.addEventListener('error', (event) => {});

        //6) завершен запрос (с ошибками или без)
        request.addEventListener('loadend', (event) => {});

        //7) ++++ несколько раз происходит за азапрос
        request.addEventListener('readystatechange', (event) => {});
    })
    */
    //все сделаем через обработчик событий

    select.addEventListener('change', () => {
        const request = new XMLHttpRequest();

        request.open('GET', './script/cars.json');

        request.setRequestHeader('Content-type', 'application/json');

        request.send();

        request.addEventListener('readystatechange', (event) => {
            if (request.readyState !== 4) {
                output.innerHTML = 'Произошла ошибка запроса (' + request.readyState + ')';
                return
            };
            //console.log(request.readyState);
            //console.log(request.status); //(0, 404, 200...);
            //console.log(request.statusText); //описание состояния серверного запроса
            if (request.status !== 200) {
                output.innerHTML = 'Произошла ошибка запроса (' + request.readyState + ')';
                return
            };
            //console.log(request.response); //тело ответа от сервера 
            //console.log(request.responseText); //что отправил сервер (для последующей обработки)  
            const data = JSON.parse(request.responseText);
            //console.log('data: ', data);
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    //                    console.log('item.brand: ', item.brand);
                    //деструктуризация
                    const { brand, model, price } = item;
                    output.innerHTML = `Auto: ${brand}  ${model} <br>
                                        Price: ${price}$`;
                }
            });
        });
    });
});


/////////////////////////////////////////////////////////////
///     MAMP         ////////////////////////////////////////
/////////////////////////////////////////////////////////////
// mamp.info