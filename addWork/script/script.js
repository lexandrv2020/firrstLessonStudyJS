'use strict';

let elementSection = document.querySelector('body');
console.log('elementSection: ', elementSection);

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
            if (this.selector.substring(0, 1) === '.') {
                let newEl = document.createElement('div');
                newEl.innerHTML = 'Так как первый символ <strong>точка (.)</strong>, -  мы добавили <strong>"div"</strong>.';
                elementSection.append(newEl);
                newEl.style.cssText = 'height:' + this.height + '; width:' + this.width + '; background:' + this.bg + '; font-size:' + this.fontSize;
            } else if (this.selector.substring(0, 1) === '#') {
                let newEl = document.createElement('p');
                newEl.innerHTML = 'Так как первый символ <strong># (решетка)</strong>, -  мы добавили <strong>"p" (параграф)</strong>.';
                elementSection.append(newEl);
                newEl.style.cssText = 'height:' + this.height + '; width:' + this.width + '; background:' + this.bg + '; font-size:' + this.fontSize;
            }
            // console.log(this);
        }
    }
}
const domElement = new DomElement('.divElement', '50px', '800px', 'yellow', '20px');
domElement.addElement();