'use strict';

let buttons = document.querySelectorAll('.button');
const content = document.querySelector('.content'),
    wrapButton = document.querySelector('.wrapper-button'),
    addButton = document.querySelector('.add-button');

/*  первый способ с навешиванием события на каждую кнопку и установки текста   

const changeText = (element) => {
    content.textContent = element.textContent;
}

for (let i = 0; i < buttons.length; i++) {
    //buttons[i].addEventListener('click', changeText); //без параметров

    //!!!!!!!!!!!!!!!! вот так с параметрами!!!
    buttons[i].addEventListener('click', () => {
        changeText(buttons[i]);
    }); //без параметров
}
//copy button
const getButton = () => {
    const newBtn = buttons[0].cloneNode(); //скопировали первую кнопку
    //wrapButton.appendChild(newBtn); // вставили в родителя wrapButtons !!! без текста

    let textButton = buttons.length + 1;
    if (textButton < 10) {
        textButton = `0${textButton}`
    }
    newBtn.textContent = textButton;
    //на кнопку навеслили обработчик события
    newBtn.addEventListener('click', () => {
        changeText(newBtn);
    });
    wrapButton.appendChild(newBtn); // вставили в родителя wrapButtons !!! без текста
    buttons = document.querySelectorAll('.button');

};

addButton.addEventListener('click', getButton);
*/



/*  Оптимальный способ с навешиванием события на родителя кнопок */
/*const changeText = (event) => {
    //console.log('event: ', event.target.textContent);
    content.textContent = event.target.textContent;
}

buttons.forEach((elem) => {
    elem.addEventListener('click', changeText);
});

const getButton = () => {
    const newBtn = buttons[0].cloneNode(); //скопировали первую кнопку
    let textButton = buttons.length + 1;
    if (textButton < 10) {
        textButton = `0${textButton}`
    }
    newBtn.textContent = textButton;
    //на кнопку навеслили обработчик события
    newBtn.addEventListener('click', changeText);
    wrapButton.appendChild(newBtn); // вставили в родителя wrapButtons !!! без текста
    buttons = document.querySelectorAll('.button');
};
addButton.addEventListener('click', getButton); 


ВЫШЕ СЛИШКОМ БОЛЬШОЙ ТЕКСТ*/



//ДЕЛЕГИРОВАНИЕ
const changeText = (event) => {
    content.textContent = event.target.textContent;
};


const getButton = () => {
    const newBtn = buttons[0].cloneNode();
    let textButton = buttons.length + 1;
    if (textButton < 10) {
        textButton = `0${textButton}`
    }
    newBtn.textContent = textButton;
    wrapButton.appendChild(newBtn);
    buttons = document.querySelectorAll('.button');
};
addButton.addEventListener('click', getButton);

wrapButton.addEventListener('click', () => {
    //    console.log(event.target); //и по кнопке и между.
    //    console.log('event.target.tagName: ', event.target.tagName);
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    changeText(event);

    //или 

    //  if (event.target.tagName === 'BUTTON') {
    //    changeText(event);
    //  }


    //или

    //  if (!event.target.classList.contains('button'))) {
    //    return;
    //  }
    //  changeText(event);

    //или ++++

    // if (!event.target.matches('#super')) { //по ID
    // if (!event.target.matches('.super')) { //по className
    //     return;
    // }
    // changeText(event);

});