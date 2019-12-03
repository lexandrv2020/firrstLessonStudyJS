const fixingMenu = () => {
    const burgerMenu = document.querySelector('.top-menu');

    window.addEventListener('scroll', ()=> {
        console.log(pageYOffset);
        console.log('burgerMenu.getAttribute:', burgerMenu.getAttribute('position'));
        if (pageYOffset > 215){
            burgerMenu.style.cssText = 'position: fixed; top:0; right:0;';
        }else if (pageYOffset < 215){
            burgerMenu.style.cssText = '';
        } 
    });
}

export default fixingMenu;