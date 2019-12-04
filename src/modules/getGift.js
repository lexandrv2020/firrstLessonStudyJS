const getGift = () =>{
    let locat = location.href;
    if (locat.indexOf("mozaika") != -1 || locat.indexOf("schelkovo") != -1) {
    } else {
        const fixedGift = document.getElementsByClassName('fixed-gift')[0],
            formGift = document.getElementById('gift'),
            img = fixedGift.querySelectorAll('img')[0],
            closeIcon = formGift.getElementsByClassName('close_icon')[0],
            closeBtn = formGift.getElementsByClassName('close-btn')[0];
        const openGift = (event) => {
            formGift.style.cssText = 'display: block';
            fixedGift.style.cssText = 'display: none';
        }
        const closeGiftForm = (event) => {
            if (event.target.classList.contains('close-btn') || event.target.classList.contains('close_icon') || event.target.classList.contains('overlay')) {
                formGift.style.cssText = 'display: none';
            }
        }
        img.addEventListener('click', openGift);    
        closeIcon.addEventListener('click', closeGiftForm);
        closeBtn.addEventListener('click', closeGiftForm);
    }        
}
export default getGift;