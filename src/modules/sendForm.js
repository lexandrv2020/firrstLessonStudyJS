//send ajax-form
const sendForm = () => {

    const loadMassage = 'Выполняется отправка....',
        successMassage = 'Спасибо! Мы скоро с Вами свяжемся!',
        form = document.querySelectorAll('form'),

        errorMassageSrc = "./images/statuses/mark-warning.png",
        successMassageSrc = "./images/statuses/mark-done.png";



    form.forEach(itemForm => {
        const elemForm = document.getElementById(itemForm.id);
        //statusCircular
        const statusMessage = document.createElement('div'),
            statusCircular0 = document.createElement('div'),
            statusCircular1 = document.createElement('div'),
            statusCircular2 = document.createElement('div'),
            statusCircular3 = document.createElement('div'),
            statusCircular4 = document.createElement('div'),
            statusCircular5 = document.createElement('div'),
            statusCircular6 = document.createElement('div'),
            statusCircular7 = document.createElement('div'),
            statusCircular8 = document.createElement('div'),
            statusDone = document.createElement('img'),
            statusError = document.createElement('img');

        statusCircular0.setAttribute('id', 'circularG');
        statusCircular1.setAttribute('id', 'circularG_1');
        statusCircular2.setAttribute('id', 'circularG_2');
        statusCircular3.setAttribute('id', 'circularG_3');
        statusCircular4.setAttribute('id', 'circularG_4');
        statusCircular5.setAttribute('id', 'circularG_5');
        statusCircular6.setAttribute('id', 'circularG_6');
        statusCircular7.setAttribute('id', 'circularG_7');
        statusCircular8.setAttribute('id', 'circularG_8');
        statusCircular1.setAttribute('class', 'circularG');
        statusCircular2.setAttribute('class', 'circularG');
        statusCircular3.setAttribute('class', 'circularG');
        statusCircular4.setAttribute('class', 'circularG');
        statusCircular5.setAttribute('class', 'circularG');
        statusCircular6.setAttribute('class', 'circularG');
        statusCircular7.setAttribute('class', 'circularG');
        statusCircular8.setAttribute('class', 'circularG');
        statusDone.setAttribute('id', 'statusDone');
        statusError.setAttribute('id', 'statusError');
        statusDone.setAttribute('src', successMassageSrc);
        statusError.setAttribute('src', errorMassageSrc);
        statusCircular0.appendChild(statusCircular1);
        statusCircular0.appendChild(statusCircular2);
        statusCircular0.appendChild(statusCircular3);
        statusCircular0.appendChild(statusCircular4);
        statusCircular0.appendChild(statusCircular5);
        statusCircular0.appendChild(statusCircular6);
        statusCircular0.appendChild(statusCircular7);
        statusCircular0.appendChild(statusCircular8);
        statusCircular0.style.display = 'none';
        statusError.style.display = 'none';
        statusDone.style.display = 'none';
        statusCircular0.style.display = 'none';
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';

        //валидация данных
        const inputItems = elemForm.querySelectorAll('input');

        inputItems.forEach((elem) => {
            if (elem.name && (elem.name === 'user_name' || elem.name === 'user_email' || elem.name === 'user_phone')) {
                elem.removeAttribute('type');
            };
        });
        inputItems.forEach((elem) => {
            elem.addEventListener('input', () => {
                if (elem.name === 'user_name' || elem.name === 'user_message') {


                    elem.value = elem.value.replace(/[^а-яА-Я\s]/, '');
                } else if (elem.name === 'user_phone') {
                    elem.value = elem.value.replace(/[^0-9\\+]/, '');
                }
            });
        });

        elemForm.appendChild(statusMessage);

        elemForm.appendChild(statusCircular0);
        elemForm.appendChild(statusError);
        elemForm.appendChild(statusDone);

        elemForm.addEventListener('submit', (event) => {
            event.preventDefault();
            elemForm.appendChild(statusMessage);
            elemForm.appendChild(statusCircular0);
            elemForm.appendChild(statusError);
            elemForm.appendChild(statusDone);
            statusCircular0.style.display = 'block';
            statusError.style.display = 'none';
            statusDone.style.display = 'none';
            statusMessage.textContent = loadMassage;
            const formData = new FormData(elemForm);
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });
            const makeSuccessEnd = () => {
                statusMessage.textContent = successMassage;
                let inputs = elemForm.querySelectorAll('input');
                inputs.forEach((item) => {
                    item.value = '';
                    item.classList.remove('success');
                    statusDone.style.display = 'block';
                    statusError.style.display = 'none';
                });
                statusCircular0.style.display = 'none';
            };

            const makeErrorEnd = () => {
                statusMessage.textContent = successMassage;
                let inputs = elemForm.querySelectorAll('input');
                inputs.forEach((item) => {
                    item.value = '';
                    item.classList.remove('success');
                    statusDone.style.display = 'block';
                    statusError.style.display = 'none';
                });
                statusCircular0.style.display = 'none';
            };
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    makeSuccessEnd();
                })
                .catch((error) => {
                    console.error(error);
                    makeErrorEnd();
                });
        });
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
    });

};


export default sendForm;