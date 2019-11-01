btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', start);

function start() {
    let arr = [];
    let newArr = [];
    let txt_1 = document.querySelector('.firstArr');
    let txt_2 = document.querySelector('.secondArr');
    for (let i = 1; i < 10; i++) {
        arr.push(Math.ceil(Math.random() * (16 - 1) + 1));
    }
    console.log('arr: ', arr);
    txt_1.textContent = "Массив 1: " + arr;

    for (let i = 0; i < arr.length; i++) {
        let sliceArr = arr.slice(i + 1, arr.length);
        let num = 0;
        sliceArr.forEach(function(item) {
            if (item < arr[i]) {
                num++;
            }
        });
        newArr.push(num);
    }
    console.log('Массив 2: ', newArr);
    txt_2.textContent = 'Массив 2: ' + newArr;

};