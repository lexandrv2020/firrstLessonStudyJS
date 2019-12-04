const callbackForm = () => {
    const right = document.getElementsByClassName('right')[0],
        openPopup = right.getElementsByClassName('callback-btn')[0],
        callBackForm = document.getElementById('callback_form'),
        closeIcon = callBackForm.getElementsByClassName('close_icon')[0],
        footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
        footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
        body = document.querySelector('body');
    console.log(footerLetoMozaika);
    const openVisitForm = (event) => {
        callBackForm.style.cssText = 'display: block';
    }
    const closeVisitForm = (event) => {
        if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
            callBackForm.style.cssText = 'display: none';
        }
    }
    openPopup.addEventListener('click', openVisitForm);
    closeIcon.addEventListener('click', closeVisitForm);
    body.addEventListener('click', closeVisitForm);
}

export default callbackForm;