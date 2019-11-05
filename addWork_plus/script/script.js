'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const domElement = new DomElement('.divSquare', '100px', '100px', 'green', '24');
    domElement.addElement();
});

let elementBody = document.querySelector('body');
let _div = document.createElement('div');

let _right = 0;
let _left = 0;
let _up = 0;
let _down = 0;


class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    addElement() {
        if (this.selector !== '') {

            elementBody.append(_div);
            _div.style.height = this.height;
            _div.style.width = this.width;
            _div.style.background = this.bg;
            _div.style.position = 'absolute';
        }
        console.log(this);
    }
}

function onkeydown(event) {
    //    console.log(event.code);
    if (event.code === 'ArrowRight') {
        _div.style.left = _div.offsetLeft + 10 + 'px';
    } else if (event.code === 'ArrowLeft') {
        _div.style.left = _div.offsetLeft - 10 + 'px';
    } else if (event.code === 'ArrowUp') {
        _div.style.top = _div.offsetTop - 10 + 'px';
    } else if (event.code === 'ArrowDown') {
        _div.style.top = _div.offsetTop + 10 + 'px';
    }
}




document.addEventListener('keydown', onkeydown);