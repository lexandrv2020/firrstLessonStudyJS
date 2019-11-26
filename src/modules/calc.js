    //calculator   
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total'),
            calcItems = document.querySelectorAll('.calc-item');

        calcItems.forEach((elem) => {
            if (elem.getAttribute('min') === '1') {
                elem.removeAttribute('type');
            }
        })

        calcItems.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9]/, '');
            })
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = +calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (!!typeValue && !!squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
                let init = 0,
                    timer = setInterval(function() {
                        totalValue.textContent = Math.min(init += 25, total);
                        //console.log('init: ', init);
                        if (init > total) {
                            clearInterval(timer);
                        }
                    }, 1);
            }
        }

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            console.log(event);
            console.log(target);
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        })
    };
    export default calc;