const sendForm = () =>{
        
    const bannerForm = document.getElementById('banner-form'),
        btnSend = bannerForm.getElementsByClassName('btn')[0],
        check1 = document.getElementById('check1'),
        formThanks = document.getElementById('thanks'),
        closeIcon = formThanks.getElementsByClassName('close_icon')[0],
        closeBtn = formThanks.getElementsByClassName('close-btn')[0],
        errorMassage = 'Произошла ошибка. Повторите позже....',
        loadMassage = 'Выполняется отправка....',
        successMassage = 'Спасибо! Мы скоро с Вами свяжемся!',
        errorMassageSrc = "./images/statuses/mark-warning.png",
        successMassageSrc = "./images/statuses/mark-done.png",
        statusDone = document.createElement('img'),
        statusMessage = document.createElement('div'),
        statusError = document.createElement('img');

    statusDone.setAttribute('id', 'statusDone');
    statusError.setAttribute('id', 'statusError');
    statusDone.setAttribute('width', 'statusDone');
    statusDone.setAttribute('src', successMassageSrc);
    statusError.setAttribute('src', errorMassageSrc);
    statusError.style.display = 'none';
    statusDone.style.display = 'none';
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';

    bannerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            bannerForm.appendChild(statusMessage);
            bannerForm.appendChild(statusError);
            bannerForm.appendChild(statusDone);
            statusMessage.textContent = loadMassage;
            
            const formData = new FormData(bannerForm);
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEnd = () => {
                statusMessage.textContent = successMassage;
                formThanks.style.display = 'block';
            };

            const makeErrorEnd = () => {
                statusMessage.textContent = errorMassage;
                formThanks.style.display = 'block';
                const headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею нам не удалось отправить Вашу заявку! Повторите позднее...",
                    formContent = formThanks.querySelector('.form-content'),
                    head_txt = formContent.querySelector('h4'),
                    main_txt = formContent.querySelector('p');
                    head_txt.textContent = headPhrase;
                    main_txt.textContent = mainText;
            };
            
            postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                makeSuccessEnd();
            })
            .catch((error) => {
                makeErrorEnd();
            });

            const closeThanksForm = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formThanks.style.cssText = 'display: none';
                }
            }
            closeIcon.addEventListener('click', closeThanksForm);
            closeBtn.addEventListener('click', closeThanksForm);

                  
 
    }) ;
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });             
    }
};    
export default sendForm;