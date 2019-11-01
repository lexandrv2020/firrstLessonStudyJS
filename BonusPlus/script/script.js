'use strict';

function getResult(a, b) {
    let result360 = 360;
    let н_1 = 30;
    let м_1 = 6;
    let м_h_1 = 0.5;
    let angH = ((a <= 12) ? a : a - 12) * (+н_1);
    let angM = м_1 * +b;
    let angM_H = (+м_h_1) * (+b);
    let _h = angH + angM_H;
    let result1 = (_h > angM) ? (angM - _h) : (angM - _h);
    let result2 = (+result1 > 180) ? (360 - (+result1)) : result1;
    res.value = (result2 < 0) ? (-result2) : result2;

}

let elem_num1 = document.getElementById('a'),
    elem_num2 = document.getElementById('b'),
    btn_main = document.getElementById('sumMulti'),
    res = document.getElementById('res');

elem_num1.addEventListener('input', function() {
    elem_num1.value = elem_num1.value.replace(/[^0-9]/, '');
});
elem_num2.addEventListener('input', function() {
    elem_num2.value = elem_num2.value.replace(/[^0-9]/, '');
});

function newGetResult() {
    getResult(elem_num1.value, elem_num2.value);
}
btn_main.addEventListener('click', newGetResult);