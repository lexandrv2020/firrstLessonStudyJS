const clubListMenu = () => {
    const clubListMenu = document.getElementsByClassName('clubs-list')[0],
        menuItems = clubListMenu.querySelector('ul'),
        body = document.querySelector('body');

    const openClubList = (event) => {
        //console.log('menuItems.style.display: ', menuItems.style.display);
        if (menuItems.style.display === 'block') {
            menuItems.style.display = 'none';
        } else {
            menuItems.style.display = 'block';
        }
    }
    const closeClubList = (event) => {
        let target = event.target;
        target = target.closest('.clubs-list');
        if (!target) {
            menuItems.style.display = 'none';
        }
    }
    clubListMenu.addEventListener('click', openClubList);
    body.addEventListener('click', closeClubList);
};
export default clubListMenu;