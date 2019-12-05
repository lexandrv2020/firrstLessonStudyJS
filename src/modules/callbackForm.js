const callbackForm = () => {
    const right = document.getElementsByClassName('right')[0],
        openPopup = right.getElementsByClassName('callback-btn')[0],
        callBackForm = document.getElementById('callback_form'),
        closeIcon = callBackForm.getElementsByClassName('close_icon')[0],
        body = document.querySelector('body');
    let inputs = callBackForm.querySelectorAll('input');
    const cleanFormInputs = () => {
        inputs.forEach((elems) => {
            elems.value = '';
        })
    }

    const openVisitForm = (event) => {
        callBackForm.style.cssText = 'display: block';
    }
    const closeVisitForm = (event) => {
        if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
            callBackForm.style.cssText = 'display: none';
            cleanFormInputs();
        }
    }
    openPopup.addEventListener('click', openVisitForm);
    closeIcon.addEventListener('click', closeVisitForm);
    body.addEventListener('click', closeVisitForm);
}


export default callbackForm;