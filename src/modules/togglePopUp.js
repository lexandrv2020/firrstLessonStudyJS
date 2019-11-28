//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');

    popup.classList.add('showBlock');

    function showBlock() {
        document.documentElement.clientWidth
        if (document.documentElement.clientWidth > 768) {
            popup.style.opacity = '0';
            popup.style.display = 'block';
            let num = 0;
            let stId = setInterval(() => {
                    let opacity = num / 100;
                    popup.style.opacity = '' + opacity;
                    num++;
                    if (num === 100) {
                        clearInterval(stId);
                    }
                },
                30);
        } else {
            popup.style.display = 'block';
        }
    };

    //new animate
    function makeEaseInOut(timing) {
        return function(timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        }
    }

    function animate({ timing, draw, duration }) {

        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);

            draw(progress); // отрисовать её

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    }

    function bounce(timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
            }
        }
    }

    let bounceEaseInOut = makeEaseInOut(bounce);


    function makeAnimate() {
        animate({
            duration: 3000,
            timing: bounceEaseInOut,
            draw: function(progress) {
                popupContent.style.left = progress * 500 + 'px';
            }
        });

    }
    //the end of animation


    popupBtn.forEach(element => {
        element.addEventListener('click', showBlock);
        element.addEventListener('click', makeAnimate);
    });
    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
}
export default togglePopUp;