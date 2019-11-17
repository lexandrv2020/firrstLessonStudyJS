'use strict';

const listItem = document.querySelector('.listItems'),
    text = document.querySelector('.newItem'),
    btn = document.querySelector('button'),
    items = document.querySelectorAll('.item');

function setStatus() {
    console.log('target.classList: ', this);
    this.classList.toggle('crosstext');
};

let createItem = () => {
    let newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.textContent = text.value.trim();
    newLi.addEventListener('click', setStatus);
    listItem.append(newLi);
};

btn.addEventListener('click', () => {
    if (text.value === '') {
        alert('Не заполнено содержание задачи. Повторите ввод');
        return;
    }
    createItem();
    text.value = '';
});

const initial = () => {
    const style = document.createElement('style');
    style.id = 'cross-text';
    style.textContent = '.crosstext {text-decoration:line-through; font-weight: 700}';
    document.head.appendChild(style);

    items.forEach(element => {
        element.addEventListener('click', setStatus);
    });
};
initial();