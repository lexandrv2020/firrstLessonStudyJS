document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const input = document.querySelector('input'),
        label = document.querySelector('.label'),
        dropdown = document.querySelector('.dropdown'),
        listDefault = document.querySelector('.dropdown-lists__list--default'),
        dropdownLists = listDefault.querySelector('.dropdown-lists__col'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        dropdownListsSelect = listSelect.querySelector('.dropdown-lists__col'),
        listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        dropdownListsAutocomplete = listAutocomplete.querySelector('.dropdown-lists__col'),
        closeButton = document.querySelector('.close-button'),
        buttonLink = document.querySelector('.button');
    const statusCircular0 = document.createElement('div'),
        statusCircular1 = document.createElement('div'),
        statusCircular2 = document.createElement('div'),
        statusCircular3 = document.createElement('div'),
        statusCircular4 = document.createElement('div'),
        statusCircular5 = document.createElement('div'),
        statusCircular6 = document.createElement('div'),
        statusCircular7 = document.createElement('div'),
        statusCircular8 = document.createElement('div');

    let eventNumber = 1,
        dataObj = {};

    const clearAllLists = () => {
        listDefault.style.display = 'none';
        while (dropdownListsSelect.firstChild) {
            dropdownListsSelect.removeChild(dropdownListsSelect.firstChild);
        }
        listSelect.style.display = 'none';
        while (dropdownListsAutocomplete.firstChild) {
            dropdownListsAutocomplete.removeChild(dropdownListsAutocomplete.firstChild);
        }
        listAutocomplete.style.display = 'none';
        closeButton.style.display = 'none';
        label.textContent = 'Страна или город';
        input.value = '';

        buttonLink.setAttribute('target', '#');
        buttonLink.textContent = "Выберите город...";
        buttonLink.removeAttribute('href');
    }
    const openAListDefault = () => {
        listDefault.style.display = 'block';
        closeButton.style.display = 'block';
        listSelect.style.display = 'none';
        listAutocomplete.style.display = 'none';
    }

    const getlink = (city) => {
        let link = '';
        const listContry = dataObj;
        //console.log('listContry: ', listContry);
        listContry.forEach((item) => {
            if (link !== '') { return link };
            const cities = item.cities;
            for (let i = 0; i < cities.length; i++) {

                if (cities[i].name === city) {
                    link = cities[i].link;

                }
            }
        });
        return link;
    };

    const createACityLine = (countryBlock) => {
        const cityLine = document.createElement('div');
        cityLine.className = 'dropdown-lists__line';
        countryBlock.append(cityLine);
        return cityLine;
    }

    const fillCityLine = (cityLine, item) => {
        const city = document.createElement('div');
        city.className = 'dropdown-lists__city';
        city.textContent = item.name;
        city.addEventListener('click', function() {
            onClickCity(item.name);
        });

        cityLine.append(city);

        const count = document.createElement('div');
        count.className = 'dropdown-lists__count';
        count.textContent = item.count;
        cityLine.append(count);

        return city;
    }

    const onClickCity = (city) => {
        input.value = city;
        label.textContent = '';
        //label.textContent = city;
        buttonLink.textContent = "Перейти";
        let link = getlink(city);
        //console.log('link: ', link);
        buttonLink.setAttribute('href', link);
        //console.log('link: ', data.RU);
    }

    function makeAnimate() {
        animate({
            duration: 3000,
            timing: bounceEaseInOut,
            draw: function(progress) {
                popupContent.style.left = progress * 500 + 'px';
            }
        });

    }

    function animate({ duration, draw, timing }) {

        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction)

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    }


    const openCitiesList = (country) => {
        input.value = '';
        label.textContent = '';

        animate({
            duration: 2000,
            timing: function(timeFraction) {
                return timeFraction;
            },
            draw: function(progress) {
                listSelect.style.opacity = progress;
                listDefault.style.opacity = 1 - progress;
            }
        });
        listSelect.style.display = 'block';
        listDefault.style.display = 'none';



        listAutocomplete.style.display = 'none';
        if (eventNumber === 1) {
            eventNumber = 2;
            input.value = country;
            label.textContent = '';

            while (dropdownListsSelect.firstChild) {
                dropdownListsSelect.removeChild(dropdownListsSelect.firstChild);
            }
            fillStructure('select', country);
        } else if (eventNumber === 2) {
            eventNumber = 1;
            animate({
                duration: 2000,
                timing: function(timeFraction) {
                    return timeFraction;
                },
                draw: function(progress) {
                    listSelect.style.opacity = - -progress;
                    listDefault.style.opacity = progress;
                }
            });
            listSelect.style.display = 'none'
            listDefault.style.display = 'block';
            label.textContent = 'Страна или город';
        }
    }

    const openAListAutocomplete = () => {
        if (input.value !== '') {
            //console.log(input.value);

            listDefault.style.display = 'none';
            while (dropdownListsSelect.firstChild) {
                dropdownListsSelect.removeChild(dropdownListsSelect.firstChild);
            }
            listSelect.style.display = 'none';
            while (dropdownListsAutocomplete.firstChild) {
                dropdownListsAutocomplete.removeChild(dropdownListsAutocomplete.firstChild);
            }
            listAutocomplete.style.display = 'block';

            let str1 = input.value.toLowerCase();
            //console.log('str1: ', str1);
            let lengthStr1 = str1.length;
            //console.log('lengthStr1: ', lengthStr1);

            const listContry = dataObj;
            //console.log('listContry: ', listContry);
            listContry.forEach((itemCountry) => {
                const itemCities = itemCountry.cities;
                itemCities.forEach((itemCity) => {
                    if (itemCity.name.substring(0, lengthStr1).toLowerCase() === str1) {
                        const cityLine = createACityLine(dropdownListsAutocomplete);
                        const city = fillCityLine(cityLine, itemCity);
                    }
                })
            })
        } else {
            //console.log(input.value);
            listDefault.style.display = 'block';
            while (dropdownListsSelect.firstChild) {
                dropdownListsSelect.removeChild(dropdownListsSelect.firstChild);
            }
            listSelect.style.display = 'none';
            while (dropdownListsAutocomplete.firstChild) {
                dropdownListsAutocomplete.removeChild(dropdownListsAutocomplete.firstChild);
            }
            listAutocomplete.style.display = 'none';

        }
    }

    const fillStructure = (typeOfList = 'default', countryName = '') => {
        let mainList = '';
        if (typeOfList === 'default') {
            mainList = dropdownLists;
        } else if (typeOfList === 'select') {
            mainList = dropdownListsSelect;
        }
        const createACountryBlock = (mainList) => {
            const countryBlock = document.createElement('div');
            countryBlock.className = 'dropdown-lists__countryBlock';
            mainList.append(countryBlock);

            return countryBlock;
        }

        const createATotalLine = (countryBlock) => {
            const totalLine = document.createElement('div');
            totalLine.className = 'dropdown-lists__total-line';
            countryBlock.append(totalLine);
            return totalLine;
        }

        const fillTotalLine = (totalLine, item) => {
                const country = document.createElement('div');
                country.className = 'dropdown-lists__country';
                country.textContent = item.country;
                totalLine.append(country);
                country.addEventListener('click', function() {
                    openCitiesList(item.country);
                });

                const count = document.createElement('div');
                count.className = 'dropdown-lists__count';
                count.textContent = item.count;
                totalLine.append(count);
                return country;
            }
            //console.log(dataObj);
        dataObj.forEach((item) => {
            if (countryName !== '' && item.country !== countryName) { return };
            const countryBlock = createACountryBlock(mainList);
            const totalLine = createATotalLine(countryBlock);
            const country = fillTotalLine(totalLine, item);
            const cities = item.cities;

            function sDecrease(i, ii) {
                if (+i.count > +ii.count)
                    return -1;
                else if (+i.count < +ii.count)
                    return 1;
                else
                    return 0;
            }

            cities.sort(sDecrease);
            let countLength = (countryName !== '' ? cities.length : 3);
            for (let i = 0; i < countLength; i++) {
                const cityLine = createACityLine(countryBlock);
                const city = fillCityLine(cityLine, cities[i]);
            }
        });
    }

    const getDataFromJSONServer = (url) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.addEventListener('readystatechange', () => {
                //console.log('request.readyState: ', request.readyState);
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    dataObj = JSON.parse(request.responseText);
                    //console.log('dataObj: ', dataObj);
                    resolve();
                } else {
                    reject(request.statusText);
                }
            });
            request.send();
        })
    }

    const makeSuccessEnd = () => {
        statusCircular0.style.display = 'none';
        closeButton.style.display = 'none';
        listDefault.style.display = 'none';
        listSelect.style.display = 'none';
        listAutocomplete.style.display = 'none';
        closeButton.addEventListener('click', clearAllLists);
        input.addEventListener('click', openAListDefault);
        input.addEventListener('input', openAListAutocomplete);
        clearAllLists();
        fillStructure('default', '');

    };

    const applyStyles = () => {
        const style = document.createElement('style')
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            #circularG{
                position:relative;
                width:70px;
                height:70px;
                margin: auto;
            }
            .circularG{
                position:absolute;
                background-color:rgb(0,0,0);
                width:14px;
                height:14px;
                border-radius:9px;
                    -moz-border-radius:9px;
                animation-name:bounce_circularG;
                    -moz-animation-name:bounce_circularG;
                animation-duration:1.1s;
                    -moz-animation-duration:1.1s;
                animation-iteration-count:infinite;
                    -moz-animation-iteration-count:infinite;
                animation-direction:normal;
                    -moz-animation-direction:normal;
            }
            
            #circularG_1{
                left:0;
                top:23px;
                animation-delay:0.41s;
                    -moz-animation-delay:0.41s;
            }
            
            #circularG_2{
                left:6px;
                top:6px;
                animation-delay:0.55s;
                    -moz-animation-delay:0.55s;
            }
            
            #circularG_3{
                top:0;
                left:23px;
                animation-delay:0.69s;
                    -moz-animation-delay:0.69s;
            }
            
            #circularG_4{
                right:6px;
                top:6px;
                animation-delay:0.83s;
                    -moz-animation-delay:0.83s;
            }
            
            #circularG_5{
                right:0;
                top:23px;
                animation-delay:0.97s;
                    -moz-animation-delay:0.97s;
            }
            
            #circularG_6{
                right:6px;
                bottom:6px;
                animation-delay:1.1s;
                    -moz-animation-delay:1.1s;
            }
            
            #circularG_7{
                left:23px;
                bottom:0;
                animation-delay:1.24s;
                    -moz-animation-delay:1.24s;
            }
            
            #circularG_8{
                left:6px;
                bottom:6px;
                animation-delay:1.38s;
                    -moz-animation-delay:1.38s;
            }
            
            @keyframes bounce_circularG{
                0%{
                    transform:scale(1);
                }
                100%{
                    transform:scale(.3);
                }
            }
            
            @-moz-keyframes bounce_circularG{
                0%{
                    -moz-transform:scale(1);
                }
                100%{
                    -moz-transform:scale(.3);
                }
            }
        `
        document.head.appendChild(style);
    }
    const startASpinner = () => {

        statusCircular0.setAttribute('id', 'circularG');
        statusCircular1.setAttribute('id', 'circularG_1');
        statusCircular2.setAttribute('id', 'circularG_2');
        statusCircular3.setAttribute('id', 'circularG_3');
        statusCircular4.setAttribute('id', 'circularG_4');
        statusCircular5.setAttribute('id', 'circularG_5');
        statusCircular6.setAttribute('id', 'circularG_6');
        statusCircular7.setAttribute('id', 'circularG_7');
        statusCircular8.setAttribute('id', 'circularG_8');
        statusCircular1.setAttribute('class', 'circularG');
        statusCircular2.setAttribute('class', 'circularG');
        statusCircular3.setAttribute('class', 'circularG');
        statusCircular4.setAttribute('class', 'circularG');
        statusCircular5.setAttribute('class', 'circularG');
        statusCircular6.setAttribute('class', 'circularG');
        statusCircular7.setAttribute('class', 'circularG');
        statusCircular8.setAttribute('class', 'circularG');
        statusCircular0.appendChild(statusCircular1);
        statusCircular0.appendChild(statusCircular2);
        statusCircular0.appendChild(statusCircular3);
        statusCircular0.appendChild(statusCircular4);
        statusCircular0.appendChild(statusCircular5);
        statusCircular0.appendChild(statusCircular6);
        statusCircular0.appendChild(statusCircular7);
        statusCircular0.appendChild(statusCircular8);
        statusCircular0.style.display = 'block';

        dropdown.append(statusCircular0);
    }

    const initial = () => {
        applyStyles();
        startASpinner();
        setTimeout(() => {
            getDataFromJSONServer('http://localhost:3000/RU/')
                .then(makeSuccessEnd)
                .catch(error => console.error(error));
        }, 2000);
    }
    initial();
});