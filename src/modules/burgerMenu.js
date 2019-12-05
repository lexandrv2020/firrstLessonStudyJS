const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        menuButton = document.querySelector('.menu-button'),
        popupMenu = document.querySelector('.popup-menu'),
        closeBtn = popupMenu.querySelector('.close-menu-btn'),
        menuItemsPopup = popupMenu.querySelectorAll('li');

    window.addEventListener('scroll', () => {
        if (pageYOffset > 215) {
            topMenu.style.cssText = 'position: fixed; top:0; right:0;';
        } else if (pageYOffset < 215) {
            topMenu.style.cssText = '';
        }
    });

    const openPopupMenu = () => {
        if (popupMenu.style.display === 'flex') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'flex';
        }
    };
    menuButton.addEventListener('click', openPopupMenu);

    const closePopupMenu = () => {
        popupMenu.style.display = 'none';
    }

    closeBtn.addEventListener('click', closePopupMenu);
    menuItemsPopup.forEach(element => {
        element.addEventListener('click', closePopupMenu);
    });
};

export default burgerMenu;