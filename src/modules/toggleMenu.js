//меню
const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        body = document.querySelector('body'),
        menuItems = menu.querySelectorAll('ul>li'),
        document_a = document.querySelectorAll('a');

    const actionMenu = (event) => {
        menu.classList.toggle('active-menu');
    };

    const onMouseClick = (event) => {
        let active_menu = document.querySelector('.active-menu');
        let closeMenu = !(event.target.classList.contains('active-menu')) && (!!active_menu) && (event.target.localName !== 'img');
        if (closeMenu) {
            menu.classList.toggle('active-menu');
        }
    }
    const openBlock = (event, btn) => {
        event.preventDefault()
        const blockId = btn.getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const applyEvent = (event, btn) => {
        if (event === 'actionMenu') {
            return actionMenu;
        } else if (event === 'mouseclick') {
            return onMouseClick;
        } else {
            return openBlock(event, btn);
        }
    };

    btnMenu.addEventListener('click', actionMenu);
    menuItems.forEach(element => {
        element.addEventListener('click', applyEvent('actionMenu', element));
    });
    body.addEventListener('click', applyEvent('mouseclick', body));
    document_a.forEach(element => {
        if (element.classList.contains('close-btn')) {
            element.addEventListener('click', applyEvent('actionMenu', element));
        } else if (element.closest('li') || element.closest('main')) {
            element.addEventListener('click', function(event) {
                applyEvent(event, element)
            });
        }
    });
};

export default toggleMenu;