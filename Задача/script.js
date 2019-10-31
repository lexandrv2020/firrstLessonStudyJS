btn = document.getElementsByTagName('.btn')[0];
console.log('btn: ', btn);

btn.addEventListener('click', start);

function start() {
    let arr = [];
    let newArr = [];
    let txt = document.querySelector('.text');
    //txt.textContent = arr;
    for (let i = 1; i < 10; i++) {
        arr.push(Math.ceil(Math.random() * (16 - 1) + 1));
    }
    console.log('arr: ', arr);
    // alert(arr);
    //div.textConte
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
    console.log('newArr: ', newArr);

};