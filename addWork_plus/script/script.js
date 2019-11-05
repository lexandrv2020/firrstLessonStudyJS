'use strict';

let elementBody = document.querySelector('body');

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
            let _div = document.createElement('div');
            elementBody.append(_div);
            _div.style.height = this.height;
            _div.style.width = this.width;
            _div.style.background = this.bg;
            _div.style.fontSize = this.height;
            _div.style.position = 'absolut';
        }
        console.log(this);
    }
}


const domElement2 = new DomElement('.divSquare', '100px', '100px', 'green', '100');
domElement2.addElement();