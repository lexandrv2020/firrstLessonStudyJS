    //Slider
    function slider() {
        let slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dots = document.querySelector('.portfolio-dots');

        // добавим "точки" на слайдер, по количеству слайдов
        function setDots() {
            slide.forEach((elem, index) => {

                let newElem = document.createElement('li');
                if (index === 0) {
                    newElem.setAttribute('class', 'dot dot-active');
                } else {
                    newElem.setAttribute('class', 'dot');
                }
                dots.appendChild(newElem);
            });
        }
        setDots();
        let dot = document.querySelectorAll('.dot');


        function prevSlide(elem, index, strClass) {
            elem[index].classList.remove(strClass);
        }

        function nextSlide(elem, index, strClass) {
            elem[index].classList.add(strClass);
        }
        let currentSlide = 0,
            interval;

        function autoPlaySlide() {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        function startSlide(time = 1500) {
            interval = setInterval(autoPlaySlide, time);
        };

        function stopSlide() {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                })
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn, .dot ')) { //||
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) { // ||
                startSlide();
            }
        });
        startSlide(1500);
    }
    export default slider;