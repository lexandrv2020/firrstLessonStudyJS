'use strict';

class Validator {

    constructor({ selector, pattern = {}, method }) {
        this.form = document.querySelector(selector); // селектор формы
        this.pattern = pattern; //шаблоны
        this.method = method; //настройки полей и свойства к ним
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button'
        });
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
            if (this.error.size) {
                e.preventDefault();
            }
        })
    }

    isValid(elem) {
        const validatorMethod = {

            notEmpty(elem) {
                if (elem.value === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {

                return pattern.test(elem.value);
            }
        };
        if (this.method) {
            let idElem = elem.id.replace(/[123]/, '');
            const method = this.method[idElem];
            //console.log('method: ', method);

            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            };

        } else {
            console.warn('Необходимо передать id полей ввода и методы проверки эти полей!');
        }
        return true;
    }

    checkIt(event) {
        const target = event.target;
        //console.log('event: ', event);
        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('validator-error');
        errorDiv.textContent = 'Ошибка в этом поле';
        if (elem.id === 'form1-email' || elem.id === 'form1-name' || elem.id === 'form1-phone') {
            console.log('elem.id: ', elem.id);
            errorDiv.style.marginTop = '-20px';
        }
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green !important;
            }
            input.error {
                border: 2px solid red !important;
            }
            .validator-error-form1{
                font-size: 12px;
                font-family: sans-serif;
                margin: -20px;
                color: red
            }
            .validator-error{
                font-size: 12px;
                font-family: sans-serif;
                margin: 0px;
                color: red
            }
        `;
        document.head.appendChild(style);
    }

    setPattern() {
        if (!this.pattern['form-phone']) {
            this.pattern['form-phone'] = /^\+?[78]([-()]*\d){10}$/;
        }

        if (!this.pattern['form-email']) {
            this.pattern['form-email'] = /^\w+(\.\w+)*@\w+\.\w{2,}$/;
        }

        if (!this.pattern['form-name']) {
            this.pattern['form-name'] = /^[А-Яа-я ]+$/; ///[А-Яа-я ]/;
        }
        if (!this.pattern['form-message']) {
            this.pattern['form-name'] = /^[А-Яа-я ]+$/; ///[А-Яа-я ]/;
        }
    }
}