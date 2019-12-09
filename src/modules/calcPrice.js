//калькулятор
const calcPrice = () => {
    let locat = location.href;
    if (locat.indexOf("mozaika") != -1 || locat.indexOf("schelkovo") != -1) {} else {
        const time = document.querySelector('.time'),
            price = document.querySelector('.price'),
            magicWorldBlock = price.querySelector('.input-text'),
            magicWorldtext = magicWorldBlock.querySelector('input'),
            clubName = document.querySelectorAll('input[name="club-name"]'),
            cardType = document.querySelectorAll('input[name="card-type"]'),
            cardMozaika = document.getElementById('card_leto_mozaika'),
            priceTotal = document.getElementById('price-total'),
            mozaika_arr = [0, 1999, 0, 0, 0, 0, 9900, 0, 0, 13900, 0, 0, 19900],
            schelkovo_arr = [0, 2999, 0, 0, 0, 0, 14990, 0, 0, 21990, 0, 0, 24990];

        let period = 1,
            club = 'mozaika',
            arr = mozaika_arr,
            bonus = 0;

        const getCurrentPrice = () => {
            if (magicWorldtext.value.replace(/\s+/g, '') === 'ТЕЛО2019') {
                bonus = 30;
            } else { bonus = 0 }
            if (cardMozaika.checked) {

                club = 'mozaika';
            }

            period = period === 0 ? 1 : period;

            arr = club === 'mozaika' ? mozaika_arr : schelkovo_arr;
            priceTotal.textContent = +arr[period] - Math.floor(+arr[period] / 100 * bonus);
        }

        const getClubNameValue = (elem) => {
            club = elem.value;
            getCurrentPrice();
        }

        const getCardTypeValue = (elem) => {
            period = +elem.value;
            getCurrentPrice();
        }
        magicWorldtext.addEventListener('input', getCurrentPrice);

        clubName.forEach(element => {
            element.addEventListener('click', function() {
                getClubNameValue(element);
            });
        });

        cardType.forEach(element => {
            element.addEventListener('click', function() {
                getCardTypeValue(element);
            });
        });
        getCurrentPrice();
    }
};
export default calcPrice;