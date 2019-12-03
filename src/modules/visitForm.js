const visitForm = () => {
    const openPopup = document.getElementsByClassName('open-popup')[0],
    form = document.getElementById('free_visit_form'),
    closeIcon = form.getElementsByClassName('close_icon')[0],
    body = document.querySelector('body');
   // console.log('form: ', form);
    const openVisitForm = (event) => {
        form.style.cssText = 'display: block';
    }
    const closeVisitForm = (event) => {
        if (event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
            form.style.cssText = 'display: none';
        }
        
    }
    openPopup.addEventListener('click', openVisitForm);
    closeIcon.addEventListener('click', closeVisitForm);
    body.addEventListener('click', closeVisitForm);
}
export default visitForm;
