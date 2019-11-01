'use strict';


const calculator = {
    num1: 0,
    num2: 0,
    sumRes: 0,
    multiRes: 0,
    sum: function() {
        this.sumRes = +elem_num1.value + +elem_num2.value;
        this.show(this.sumRes);
    },
    mult: function() {
        this.multiRes = +elem_num1.value * +elem_num2.value;
        this.show(this.multiRes);
    },
    show: function(result) {
        elem_result.value = result;
    }
}


let elem_num1 = document.getElementById('a'),
    elem_num2 = document.getElementById('b'),
    btn_sum = document.getElementById('sum'),
    btn_multi = document.getElementById('mult'),
    elem_result = document.getElementById('res');

elem_num1.addEventListener('input', function() {
    elem_num1.value = elem_num1.value.replace(/[^0-9]/, '');
});
elem_num2.addEventListener('input', function() {
    elem_num2.value = elem_num2.value.replace(/[^0-9]/, '');
});

btn_sum.addEventListener('click', getSum);
btn_multi.addEventListener('click', getMulti);

function getSum() {
    calculator.sum();
}

function getMulti() {
    calculator.mult();
}