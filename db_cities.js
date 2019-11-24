document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const input = document.querySelector('input'),
        label = document.querySelector('.label'),
        listDefault = document.querySelector('.dropdown-lists__list--default'),
        dropdownLists = listDefault.querySelector('.dropdown-lists__col'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        dropdownListsSelect = listSelect.querySelector('.dropdown-lists__col'),
        listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        dropdownListsAutocomplete = listAutocomplete.querySelector('.dropdown-lists__col'),
        closeButton = document.querySelector('.close-button'),
        buttonLink = document.querySelector('.button');
    let eventNumber = 1;
    const data = {
        "RU": [{
                "country": "Россия",
                "count": "144500000",
                "cities": [{
                        "name": "Рязань",
                        "count": "538962",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                    },
                    {
                        "name": "Москва",
                        "count": "12615882",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                    },
                    {
                        "name": "Санкт-Петербург",
                        "count": "5383968",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Краснодар",
                        "count": "918145",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                    },
                    {
                        "name": "Екатеринбург",
                        "count": "1484456",
                        "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Ростов-на-Дону",
                        "count": "1130305",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                    },
                    {
                        "name": "Воронеж",
                        "count": "1054537",
                        "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                    }
                ]

            },
            {
                "country": "Германия",
                "count": 82175684,
                "cities": [{
                        "name": "Берлин",
                        "count": "3613495",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                    },
                    {
                        "name": "Мюнхен",
                        "count": "1456039",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                    },
                    {
                        "name": "Франкфурт-на-Майне",
                        "count": "736414",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                    },
                    {
                        "name": "Кёльн",
                        "count": "1080394",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                    }
                ]
            },
            {
                "country": "Англия",
                "count": 53012456,
                "cities": [{
                        "name": "Лондон",
                        "count": " 8869898",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                    },
                    {
                        "name": "Манчестер",
                        "count": "545500",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                    },
                    {
                        "name": "Эдинбург",
                        "count": "488100",
                        "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Бристоль",
                        "count": "567111",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                    }
                ]

            }
        ],
        "EN": [{
                "country": "Russia",
                "count": "144500000",
                "cities": [{
                        "name": "Ryazan",
                        "count": "538962",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                    },
                    {
                        "name": "Moscow",
                        "count": "12615882",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                    },
                    {
                        "name": "St Petersburg",
                        "count": "5383968",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Krasnodar",
                        "count": "918145",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                    },
                    {
                        "name": "Yekaterinburg",
                        "count": "1484456",
                        "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Rostov-on-Don",
                        "count": "1130305",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                    },
                    {
                        "name": "Voronezh",
                        "count": "1054537",
                        "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                    }
                ]

            },
            {
                "country": "Germany",
                "count": 82175684,
                "cities": [{
                        "name": "Berlin",
                        "count": "3613495",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                    },
                    {
                        "name": "Munich",
                        "count": "1456039",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                    },
                    {
                        "name": "frankfurt",
                        "count": "736414",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                    },
                    {
                        "name": "Cologne",
                        "count": "1080394",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                    }
                ]
            },
            {
                "country": "United Kingdom",
                "count": 53012456,
                "cities": [{
                        "name": "London",
                        "count": " 8869898",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                    },
                    {
                        "name": "Manchester",
                        "count": "545500",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                    },
                    {
                        "name": "Edinburgh",
                        "count": "488100",
                        "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Bristol",
                        "count": "567111",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                    }
                ]

            }
        ],
        "DE": [{
                "country": "Russland",
                "count": "144500000",
                "cities": [{
                        "name": "Ryazan",
                        "count": "538962",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                    },
                    {
                        "name": "Moskau",
                        "count": "12615882",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                    },
                    {
                        "name": "Saint Petersburg",
                        "count": "5383968",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Krasnodar",
                        "count": "918145",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                    },
                    {
                        "name": "Jekaterinburg",
                        "count": "1484456",
                        "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Rostow",
                        "count": "1130305",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                    },
                    {
                        "name": "Woronesch",
                        "count": "1054537",
                        "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                    }
                ]

            },
            {
                "country": "Deutschland",
                "count": 82175684,
                "cities": [{
                        "name": "Berlin",
                        "count": "3613495",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                    },
                    {
                        "name": "München",
                        "count": "1456039",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                    },
                    {
                        "name": "Frankfurt",
                        "count": "736414",
                        "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                    },
                    {
                        "name": "Köln",
                        "count": "1080394",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                    }
                ]
            },
            {
                "country": "England",
                "count": 53012456,
                "cities": [{
                        "name": "London",
                        "count": " 8869898",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                    },
                    {
                        "name": "Manchester",
                        "count": "545500",
                        "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                    },
                    {
                        "name": "Edinburgh",
                        "count": "488100",
                        "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                    },
                    {
                        "name": "Bristol",
                        "count": "567111",
                        "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                    }
                ]

            }
        ]
    };
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
        const listContry = data.RU;
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

    const openCitiesList = (country) => {
        input.value = '';
        label.textContent = '';
        listSelect.style.display = 'block';
        listDefault.style.display = 'none';
        listAutocomplete.style.display = 'none';
        if (eventNumber === 1) {
            eventNumber = 2;
            //label.textContent = country;
            input.value = country;
            label.textContent = '';

            while (dropdownListsSelect.firstChild) {
                dropdownListsSelect.removeChild(dropdownListsSelect.firstChild);
            }
            fillStructure('select', country);
        } else if (eventNumber === 2) {
            eventNumber = 1;
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

            const listContry = data.RU;
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
        const listContry = data.RU;

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

        listContry.forEach((item) => {
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

    const initial = () => {
        closeButton.style.display = 'none';
        listDefault.style.display = 'none';
        listSelect.style.display = 'none';
        listAutocomplete.style.display = 'none';
        closeButton.addEventListener('click', clearAllLists);
        input.addEventListener('click', openAListDefault);
        input.addEventListener('input', openAListAutocomplete);
        clearAllLists();
    }
    initial();
    fillStructure('default', '');

});