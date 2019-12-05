const gallerySlider = () => {
    let slider = document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide');
    let btn_left = document.createElement('a');
    btn_left.setAttribute('href', '#');
    btn_left.classList.add('gallery-btn');
    btn_left.classList.add('prev');
    btn_left.setAttribute('id', 'arrow-left');
    let btn_right = document.createElement('a');
    btn_right.setAttribute('href', '#');
    btn_right.classList.add('gallery-btn');
    btn_right.classList.add('next');
    btn_right.setAttribute('id', 'arrow-right');
    slider.appendChild(btn_left);
    slider.appendChild(btn_right);
    let btn = slider.querySelectorAll('.gallery-btn');
    let ul = document.createElement('ul');
    ul.className = 'gallery-dots';
    slider.appendChild(ul);

    const dots = document.querySelector('.gallery-dots');

    // добавим "точки" на слайдер, по количеству слайдов
    const setDots = () => {
        slide.forEach((elem, index) => {
            slide[index].classList.add('gallery-item');
            slide[index].classList.remove('slide');
            let newElem = document.createElement('li');
            if (index === 0) {
                newElem.setAttribute('class', 'dot dot-active');
            } else {
                newElem.setAttribute('class', 'dot');
            }
            dots.appendChild(newElem);
        });
        slide[0].classList.add('gallery-item-active');
    }
    setDots();
    let dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    }
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    }
    let currentSlide = 0,
        interval;

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'gallery-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'gallery-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.gallery-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-item-active');
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

        nextSlide(slide, currentSlide, 'gallery-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.gallery-btn, .dot ')) { //||
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.gallery-btn, .dot')) { // ||
            startSlide();
        }
    });
    startSlide(4500);
}

export default gallerySlider;