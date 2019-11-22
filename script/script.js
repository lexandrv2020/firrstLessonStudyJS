document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function randomColor() {
        const btn = document.getElementById('change'),
            body = document.querySelector('body'),
            textId = document.getElementById('color');

        btn.addEventListener('click', () => {
            const randomColor = getRandomColor();
        })

        function getRandomColor() {
            makeAFon("#" + ((1 << 24) * Math.random() | 0).toString(16));
        };

        const makeAFon = (randomColor) => {
            body.style.backgroundColor = randomColor;
            btn.style.color = randomColor;
            textId.textContent = randomColor;
        };
        getRandomColor();
    }
    randomColor();
});