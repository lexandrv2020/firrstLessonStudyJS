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