'use strict';

const listItem = document.querySelector('.listItems'),
    text = document.querySelector('.newItem'),
    btn = document.querySelector('button');

let setAttributesForLi = () => {
    let item = document.querySelectorAll('.item');
    console.log(item);
    item.forEach(element => {
        element.addEventListener('click', () => {
            if (element.hasAttribute('style')) {
                element.removeAttribute('style')
            } else {
                element.setAttribute('style', 'text-decoration:line-through; font-weight: 700');
            }
        });
    });
};

let createItem = () => {
    let newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.textContent = text.value.trim();
    newLi.addEventListener('click', () => {
        if (newLi.hasAttribute('style')) {
            newLi.removeAttribute('style')
        } else {
            newLi.setAttribute('style', 'text-decoration:line-through; font-weight: 700');
        }
    })
    listItem.append(newLi);


}

btn.addEventListener('click', () => {
    if (text.value === '') {
        alert('Не заполнено содержание задачи. Повторите ввод');
        return;
    }
    createItem();
    text.value = '';
});

setAttributesForLi();