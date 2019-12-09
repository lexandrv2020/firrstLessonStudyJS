//отправка формы
const sendForm = () => {
    const formThanks = document.getElementById('thanks'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        closeIcon = formThanks.getElementsByClassName('close_icon')[0],
        closeBtn = formThanks.getElementsByClassName('close-btn')[0],

        errorMassageSrc = "./images/statuses/mark-warning.png",
        successMassageSrc = "./images/statuses/mark-done.png",

        form1Check = document.getElementById('check'),
        form2Check = document.getElementById('check2'),
        formBannerCheck = document.getElementById('check1'),
        formOrderCheck = document.getElementById('card_check'),

        statusDone = document.createElement('img'),
        statusMessage = document.createElement('div'),
        statusError = document.createElement('img');

    form1Check.setAttribute('name', 'namecheck');
    statusDone.setAttribute('id', 'statusDone');
    statusError.setAttribute('id', 'statusError');
    statusDone.setAttribute('width', 'statusDone');
    statusDone.setAttribute('src', successMassageSrc);
    statusError.setAttribute('src', errorMassageSrc);
    statusError.style.display = 'none';
    statusDone.style.display = 'none';
    statusMessage.style.cssText = 'font-size: 1rem; color: green;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);';

    //форма баннера
    const makeBannerForm = () => {
        const bannerForm = document.getElementById('banner-form'),
            bodyBanner = document.querySelector('body'),
            errorMassageThanks = 'Произошла ошибка. Повторите позже....',
            loadMassageThanks = 'Выполняется отправка....',
            successMassageThanks = 'Спасибо! Мы скоро с Вами свяжемся!';
        formBannerCheck.style.display = 'block';
        formBannerCheck.style.position = 'absolute';
        formBannerCheck.style.zIndex = -100;
        formBannerCheck.style.left = 50 + '%';
        let inputs = bannerForm.querySelectorAll('input');
        const cleanFormInputs = () => {
            inputs.forEach((elems) => {
                elems.value = '';
                statusMessage.textContent = '';
            });
            formBannerCheck.setAttribute('checked', false);
        }
        bannerForm.addEventListener('submit', (event) => {

            event.preventDefault();
            bannerForm.appendChild(statusMessage);
            bannerForm.appendChild(statusError);
            bannerForm.appendChild(statusDone);
            statusMessage.textContent = loadMassageThanks;

            let formData = new FormData(bannerForm);
            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEnd = () => {
                statusMessage.textContent = successMassageThanks;
                formThanks.style.display = 'block';

                //setTimeout(cleanFormInputs(), 4000);
            };

            const makeErrorEnd = () => {
                statusMessage.textContent = errorMassageThanks;
                formThanks.style.display = 'block';
                const headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею нам не удалось отправить Вашу заявку! Повторите позднее...",
                    formContent = formThanks.querySelector('.form-content'),
                    head_txt = formContent.querySelector('h4'),
                    main_txt = formContent.querySelector('p');
                head_txt.textContent = headPhrase;
                main_txt.textContent = mainText;
                setTimeout(cleanFormInputs(), 4000);
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
                    cleanFormInputs();
                }
            }
            closeIcon.addEventListener('click', closeThanksForm);
            closeBtn.addEventListener('click', closeThanksForm);
            bodyBanner.addEventListener('click', closeThanksForm);
        })
    };
    makeBannerForm();

    //форма1
    const makeForm1 = () => {
        const forms1 = document.getElementById('form1'),
            bodyForm1 = document.querySelector('body'),
            errorMassageForm1 = 'Произошла ошибка. Повторите позже....',
            loadMassageForm1 = 'Выполняется запись....',
            successMassageForm1 = 'Спасибо! Мы обязательно Вам перезвоним.';

        form1Check.style.display = 'block';
        form1Check.style.position = 'absolute';
        form1Check.style.opacity = 0;
        form1Check.style.left = 20 + '%';
        let inputs = forms1.querySelectorAll('input');
        const cleanFormInputs = () => {
            inputs.forEach((elems) => {
                elems.value = '';
                statusMessage.textContent = '';
            });
            form1Check.setAttribute('checked', false);
        }

        forms1.addEventListener('submit', (event) => {
            event.preventDefault();
            forms1.appendChild(statusMessage);
            forms1.appendChild(statusError);
            forms1.appendChild(statusDone);
            statusMessage.textContent = loadMassageForm1;

            const formDataForm1 = new FormData(forms1);
            let body = {};
            formDataForm1.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEndForm1 = () => {
                statusMessage.textContent = successMassageForm1;
                cleanFormInputs();
                formThanks.style.display = 'block';
                callbackForm.style.display = 'none';
            };

            const makeErrorEndForm1 = () => {
                statusMessage.textContent = errorMassageForm1;
                formThanks.style.display = 'block';
                callbackForm.style.display = 'none';
                let headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею связь не удалась! Повторите позднее...",
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
                    makeSuccessEndForm1();
                })
                .catch((error) => {
                    makeErrorEndForm1();
                });

            const closeThanksForm1 = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formThanks.style.cssText = 'display: none';
                    statusMessage.textContent = '';
                }
            }
            closeIcon.addEventListener('click', closeThanksForm1);
            closeBtn.addEventListener('click', closeThanksForm1);
            bodyForm1.addEventListener('click', closeThanksForm1);
        });
    };
    makeForm1();

    //форма2
    const makeForm2 = () => {
        const forms2 = document.getElementById('form2'),
            bodyForm2 = document.querySelector('body'),
            errorMassageForm2 = 'Произошла ошибка. Повторите позже....',
            loadMassageForm2 = 'Выполняется запись....',
            successMassageForm2 = 'Спасибо! Вы успешно записаны.';
        form2Check.style.display = 'block';
        form2Check.style.position = 'absolute';
        form2Check.style.opacity = 0;
        form2Check.style.left = 20 + '%';
        let inputs = forms2.querySelectorAll('input');
        const cleanFormInputs = () => {
            inputs.forEach((elems) => {
                elems.value = '';
                statusMessage.textContent = '';
            });
            form1Check.setAttribute('checked', false);
        }

        forms2.addEventListener('submit', (event) => {
            event.preventDefault();
            forms2.appendChild(statusMessage);
            forms2.appendChild(statusError);
            forms2.appendChild(statusDone);
            statusMessage.textContent = loadMassageForm2;

            const formDataForm2 = new FormData(forms2);
            let body = {};
            formDataForm2.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEndForm2 = () => {
                statusMessage.textContent = successMassageForm2;
                cleanFormInputs();
                formThanks.style.display = 'block';
                freeVisitForm.style.display = 'none';

            };

            const makeErrorEndForm2 = () => {
                statusMessage.textContent = errorMassageForm2;
                formThanks.style.display = 'block';
                let headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею запись не удалась! Повторите позднее...",
                    formContent = formThanks.querySelector('.form-content'),
                    head_txt = formContent.querySelector('h4'),
                    main_txt = formContent.querySelector('p');
                head_txt.textContent = headPhrase;
                main_txt.textContent = mainText;
                freeVisitForm.style.display = 'none';
            };

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    makeSuccessEndForm2();
                })
                .catch((error) => {
                    makeErrorEndForm2();
                });

            const closeThanksForm2 = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formThanks.style.cssText = 'display: none';
                    statusMessage.textContent = '';
                }
            }
            closeIcon.addEventListener('click', closeThanksForm2);
            closeBtn.addEventListener('click', closeThanksForm2);
            bodyForm2.addEventListener('click', closeThanksForm2);
        });
    };
    makeForm2();

    //card-order
    const makeCardOrder = () => {
        const cardOrderForm = document.getElementById('card_order'),
            bodyOrder = document.querySelector('body'),
            cardСheck = document.getElementById('card_check'),
            formBottom = cardOrderForm.querySelector('.submit'),
            errorMassageOrder = 'Произошла ошибка. Повторите позже....',
            loadMassageOrder = 'Выполняется отправка брони....',
            successMassageOrder = 'Спасибо! Вы сделали Правильный Выбор!';

        formOrderCheck.style.display = 'block';
        formOrderCheck.style.position = 'absolute';
        formOrderCheck.style.opacity = 0;

        let inputs = cardOrderForm.querySelectorAll('input');
        const cleanFormInputs = () => {
            inputs.forEach((elems) => {

                elems.value = '';
                statusMessage.textContent = '';
            });
            cardСheck.setAttribute('checked', false);

        }

        cardOrderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            formBottom.appendChild(statusMessage);
            formBottom.appendChild(statusError);
            formBottom.appendChild(statusDone);
            statusMessage.textContent = loadMassageOrder;
            const formDataCardOrderForm = new FormData(cardOrderForm);
            let body = {};
            formDataCardOrderForm.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEndCardOrder = () => {
                statusMessage.textContent = successMassageOrder;
                formThanks.style.display = 'block';
                cleanFormInputs();
            };

            const makeErrorEndCardOrder = () => {
                statusMessage.textContent = errorMassageOrder;
                formThanks.style.display = 'block';
                let headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею бронь не удалась! Повторите позднее...",
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
                    makeSuccessEndCardOrder();
                })
                .catch((error) => {
                    makeErrorEndCardOrder();
                });

            const closeThanksCardOrder = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formThanks.style.cssText = 'display: none';
                    statusMessage.textContent = '';
                }
            }
            closeIcon.addEventListener('click', closeThanksCardOrder);
            closeBtn.addEventListener('click', closeThanksCardOrder);
            bodyOrder.addEventListener('click', closeThanksCardOrder);

        });
    };
    makeCardOrder();

    //footer-form
    const makeFooterForm = () => {
        const footerForm = document.getElementById('footer_form'),
            bodyFooter = document.querySelector('body'),
            footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
            footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
            errorMassageFooter = 'Произошла ошибка. Повторите позже....',
            loadMassageFooter = 'Выполняется отправка....',
            successMassageFooter = 'Спасибо! Мы обязательно вам перезвоним.';

        footerLetoMozaika.style.display = 'block';
        footerLetoMozaika.style.position = 'absolute';
        footerLetoMozaika.style.zIndex = -100;
        footerLetoMozaika.setAttribute('required', '');

        footerLetoSchelkovo.style.display = 'block';
        footerLetoSchelkovo.style.position = 'absolute';
        footerLetoSchelkovo.style.zIndex = -100;
        footerLetoSchelkovo.setAttribute('required', '');

        let inputs = footerForm.querySelectorAll('input');
        const cleanFormInputs = () => {
            inputs.forEach((elems) => {
                elems.value = '';
                statusMessage.textContent = '';
            });
            footerLetoMozaika.innerHTML = '';
            footerLetoSchelkovo.innerHTML = '';
        }
        footerForm.addEventListener('submit', (event) => {

            event.preventDefault();
            footerForm.appendChild(statusMessage);
            footerForm.appendChild(statusError);
            footerForm.appendChild(statusDone);
            statusMessage.textContent = loadMassageFooter;

            const formDataFooterForm = new FormData(footerForm);
            let body = {};
            formDataFooterForm.forEach((value, key) => {
                body[key] = value;
            });

            const makeSuccessEndFooterForm = () => {
                statusMessage.textContent = successMassageFooter;
                formThanks.style.display = 'block';
                cleanFormInputs();
            };

            const makeErrorEndFooterForm = () => {
                statusMessage.textContent = errorMassageFooter;
                formThanks.style.display = 'block';
                let headPhrase = "ВНИМАНИЕ!",
                    mainText = "К сожалениею запись не удалась! Повторите позднее...",
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
                    makeSuccessEndFooterForm();
                })
                .catch((error) => {
                    makeErrorEndFooterForm();
                });

            const closeThanksFooterForm = (event) => {
                if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                    formThanks.style.cssText = 'display: none';
                    statusMessage.textContent = '';
                }
            }
            closeIcon.addEventListener('click', closeThanksFooterForm);
            closeBtn.addEventListener('click', closeThanksFooterForm);
            bodyFooter.addEventListener('click', closeThanksFooterForm);
        });
    };
    makeFooterForm();

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