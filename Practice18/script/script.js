'use strict';

const output = document.getElementById('output');

/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////!!!!!!!!!!!!!!      БЕЗ PROMISE    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
const getData = (url, outputData) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            outputData(response);
        } else {
            console.error(request.statusText);
        }
    });
    request.send();
};

const outputPhotos = (data) => {
    const random = Math.floor(Math.random() * data.length);
    const obj = data[random];
    console.log('obj: ', obj);
    output.innerHTML = `<h2>${obj.title}</h2>
                        <img src="${obj.url}" alt="${obj.title}">`;
};
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
getData(urlPhotos, outputPhotos);
*/
/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////!!!!!!!!!!!!!!      C PROMISE    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        //console.log(request.readyState);

        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                reject(request.statusText);
            }
        });
        request.send();
    })
};

const outputPhotos = (data) => {
    const random = Math.floor(Math.random() * data.length);
    const obj = data[random];
    console.log('obj: ', obj);
    output.innerHTML = `<h4>${obj.title}</h4>
                        <img src="${obj.thumbnailUrl}" alt="${obj.title}">`;
};
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';


getData(urlPhotos)
    .then(outputPhotos)
    .catch(error => console.error(error));



/*
const outputPhoto = (data) => {
    //console.log(data);
    output.insertAdjacentHTML('beforebegin', `<h4>${data.title}</h4>
                            <img src="${data.thumbnailUrl}" alt="${data.title}">`);

};

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
    twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');

oneImg
    .then(outputPhoto)
    .catch(error => console.error(error));
twoImg
    .then(outputPhoto)
    .catch(error => console.error(error));
*/

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
    twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');

//!!!!!!!!!!!!!!!!!!!!!!!!!!Сперва получим все, потом все выведем (Promise.race())
/*
const outputRacePhoto = (data) => {
    console.log('race:', data);
    output.insertAdjacentHTML('beforebegin', `<h4>${data.title}</h4>
                            <img src="${data.thumbnailUrl}" alt="${data.title}">`);

};
Promise.race([oneImg, twoImg])
    .then(outputRacePhoto)
    .catch(error => console.error(error));
    */


//!!!!!!!!!!!!!!!!!!!!!!!!!!Сперва получим все, потом все выведем (Promise.all())

const outputRacePhoto = (data) => {
    data.forEach((item) => {
        console.log('all:', item);
        output.insertAdjacentHTML('beforebegin', `<h4>${item.title}</h4>
                                <img src="${item.thumbnailUrl}" alt="${item.title}">`);
    })

};
Promise.all([oneImg, twoImg])
    .then(outputRacePhoto)
    .catch(error => console.error(error));