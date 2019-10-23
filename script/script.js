'use strict';

//1 задание
let arr = ['2411', '121215', '4898', '65461', '24154', '85245', '2841'];
for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    let firstSymbol = Number(item.substr(0, 1));
    if (firstSymbol === 2 || firstSymbol === 4) {
        console.log('item: ', item);
    }
}

//2 задание
function getNumberOfDivisions(i) {
    let arrDivisions = new Array();
    for (let d = 1; d <= i; d++) {
        if (i % d === 0) {
            arrDivisions[arrDivisions.length] = d;
        }
    }
    return arrDivisions;
}

for (let i = 2; i <= 100; i++) {
    let numberOfDivisions = 0;
    numberOfDivisions = getNumberOfDivisions(i);
    if (numberOfDivisions.length === 2) {
        console.log(i + ' : ' + i + ' & ' + i);
    }
}