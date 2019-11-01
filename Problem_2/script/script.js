'use strict';

function getResult(a, b) {
    let result;

    let resultPow = Math.pow(+a, +b);
    resMult.value = resultPow;
    let arr = resultPow.toString().split('');
    let res = 0;
    arr.forEach(function(item) {
        res += +item;
    });
    resSum.value = res;
    result = res;
    console.log('result: ', result);

    return result;
}

//console.log(getResult(3, 10))
let elem_num1 = document.getElementById('a'),
    elem_num2 = document.getElementById('b'),
    resMult = document.getElementById('resMult'),
    btn_main = document.getElementById('sumMulti'),
    resSum = document.getElementById('resSum');

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