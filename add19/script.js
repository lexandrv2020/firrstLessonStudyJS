'use sctict';

const btn_dog = document.getElementById('dog'),
    btn_cat = document.getElementById('cat'),
    box = document.querySelector('.box'),
    img = document.createElement('img');

const showALink = (result) => {
    img.setAttribute('src', result);
    img.style.width = '300px';
    img.style.height = '300px';
    box.append(img);
}

btn_dog.addEventListener('click', () => {
    fetch('https://random.dog/woof.json')
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            response.json().then((data) => {
                showALink(data.url);
            });
        })
        .catch((error) => {
            console.error(error);
        });
});

btn_cat.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            response.json().then((data) => {
                showALink(data.file);
            });
        })
        .catch((error) => {
            console.error(error);
        });
});