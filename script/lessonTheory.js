'use script';

//////////////////////////////
////////ОБЪЕКТЫ///////////////
//////////////////////////////
/*
//create
//let car = {}; (1)
let car = { //(2)
    model: 'mazda',
    year: 2006,
    style: {
        color: 'green'
    }
};
let obj = new Object();
obj.color = 'black';
//console.log('obj: ', obj);
car.style = obj; //ссылка на объект
//console.log('car: ', car);
//console.log('car.style = obj: ', car.style === obj);
//console.log('obj: ', obj);
car.style.color = 'green'; //поменяли цвет у *obj* по ссылке
//console.log('obj: ', obj);
obj.color = 'red';

car.ride = function(speed) {
    console.log('Машина едет со скоростью ' + speed + ' км/ч');
};
car.ride(60);
car.stop = stop;
car.stop();
//stop();
function stop() {
    console.log('Машина стоит со скоростью 0 км/ч');
}
car['best place'] = 'city';
//console.log(car['model']);
let titleTrans = 'Коробка передач';
let bodyTrans = 'АКП';
car[titleTrans] = bodyTrans;
car['Количество передач'] = 6;
console.log('car: ', car);
*/

//////////////////////////////
////////МАСССИВ///////////////
//////////////////////////////
/*
let arr = [1, 2, 3, 4];
console.log('arr: ', arr);
//console.log('arr[0]: ', arr[0]);
console.log('arr[18]: ', arr[18]);
arr[0] = 'cat';
console.log(arr, arr.length);
arr[15] = 'man';
console.log(arr);

//let array = new Array(1,2,3); //аргументы - несколько элементов
//let array = new Array(12); //длина массива -т.к. 1 элемент

let arr2 = [, 2, , 4]; //с пустыми элементами
console.log('arr2: ', arr2);
arr2.length = 30 // задаем длину массива
    //если длина больше того что есть сейчас - массив дополнится
    //если длина меньше того что есть сейчас - массив удалит последние лишние элементы
*/
//методы

let arr = ['Apple', 'Orange', 'Onion'];
//console.log('arr: ', arr);
arr.push('kiwi') // добавляет в конец элементы
arr.unshift('Banana', 'Potatoes') // добавляет в начало элементы
    //console.log('arr: ', arr);
arr.pop(); // удаляет 1 с конца - и возвращает удаленный
//console.log(arr.shift()); // // удаляет 1 с начала - и возвращает удаленный
arr.sort(); // сортирует по имени !! учитывает регистр (вначале с большой буквы)
//console.log(arr.slice(2));
console.log('arr: ', arr);
//console.log('arr: ', arr);
//console.log(arr.slice(2)); //возвращает элементы с указанного индекса
//console.log(arr.slice(1, 3)); //возвращает элементы с указанного нач индекса по кон. (не включительно!)
//console.log(arr.slice(-2)); //отриц.!! возвращает кол элементов с конца

//console.log(arr.splice(1, 2, '1 - papaya', '2 - kiwi'));
//console.log('arr: ', arr);
//удаляет элементы: С указанного индекса / В количестве сколько / все последующее вставятся туда где удалили
//+возвращает удаленные

//выводит на экран и вставляет между элементам указанный аргумент
console.log(arr.join((" - ")));
console.log(arr.join(("\n")));

console.log(arr.reverse());