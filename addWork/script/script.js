'use strict';

let elementSection = document.querySelector('section');
console.log('elementSection: ', elementSection);

class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = +height;
        this.width = +width;
        this.bg = bg;
        this.fontSize = +fontSize;
    }
    addElement() {
        if (this.selector !== '') {
            if (this.selector.substring(0, 1) === '.') {
                let _div = document.createElement('div');
                _div.innerHTML = 'Так как первый символ <strong>точка (.)</strong>, -  мы добавили <strong>"div"</strong>.';
                elementSection.append(_div);
                _div.style.height = this.height;
                _div.style.width = this.width;
                _div.style.background = this.bg;
                _div.style.fontSize = this.height;
            } else if (this.selector.substring(0, 1) === '#') {
                let _p = document.createElement('p');
                _p.innerHTML = 'Так как первый символ <strong># (решетка)</strong>, -  мы добавили <strong>"p" (параграф)</strong>.';
                elementSection.append(_p);
                _p.style.height = this.height;
                _p.style.width = this.width;
                _p.style.background = this.bg;
                _p.style.fontSize = this.height;
            }
            console.log(this);
        }
    }
}

const domElement2 = new DomElement('.divElement', '200', '200', 'green', '100');
domElement2.addElement();