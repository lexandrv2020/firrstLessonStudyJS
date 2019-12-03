const clubListMenu = () => {
    const clubListMenu = document.getElementsByClassName('clubs-list')[0],
    menuItems = clubListMenu.querySelectorAll('ul');

    const openClubList = (event) => {
        menuItems.forEach(element => {
            if (element.style.display === 'block') {
                element.style.display = 'none';
            }else{
                element.style.display = 'block';
            }
        });
    }
    clubListMenu.addEventListener('click', openClubList);
};

export default clubListMenu;