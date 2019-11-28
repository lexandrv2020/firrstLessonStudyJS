//таб
function tabs() {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    function toggleTabContent(index) {

        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');

            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    tabHeader.addEventListener('click', function(event) {
        let target = event.target;
        target = target.closest('.service-header-tab'); //вернет найденный селектор (вверх - к родителю) до null
        if (target) {

            for (i = 0; i < tab.length; i++) {
                if (item === target) {
                    toggleTabContent(i);
                }
                /*            
                            tab.forEach((item, i) => {
                                if (item === target) {
                                    toggleTabContent(i);
                                }
                            });
                            */
            }

        };
    });
};

export default tabs;