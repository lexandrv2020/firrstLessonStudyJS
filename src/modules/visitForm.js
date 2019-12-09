const visitForm = () => {
    const openPopup = document.getElementsByClassName('open-popup')[0],
        form = document.getElementById('free_visit_form'),
        checkDats = document.getElementById('check2'),
        closeIcon = form.getElementsByClassName('close_icon')[0],
        body = document.querySelector('body');
    let inputs = form.querySelectorAll('input');
    const cleanFormInputs = () => {
        inputs.forEach((elems) => {
            elems.value = '';
        });
        checkDats.innerHTML = '';
        checkDats.checked = false;
    }

    const openVisitForm = () => {
        form.style.cssText = 'display: block';
    }
    const closeVisitForm = (event) => {
        if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
            cleanFormInputs();
            form.style.cssText = 'display: none';
        }
    }
    openPopup.addEventListener('click', openVisitForm);
    closeIcon.addEventListener('click', closeVisitForm);
    body.addEventListener('click', closeVisitForm);
};
export default visitForm;