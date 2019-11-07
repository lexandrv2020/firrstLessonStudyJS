//Коллекции Map и Set
'use strict';
///ОБЪЕКТ
const obj = {
        a: 5,
        b: 10,
    }
    //ключ всегда =  Строка
    //свойства всегда наследуются
    //console.log('obj: ', obj);
    //console.log(Object.keys(obj)); //коллекция свойство



///КОЛЛЕКЦИЯ MAP
const map = new Map(); //коллекция!!!!

map.set('car', { brand: 'mazda', model: 3 })
map.set(777, 'три топора') //ключ может быть и числом и Null
    .set(null, 'даже так')
    .set(NaN, 'Ух ты')
    .set(undefined, 'неожиданно');

const newObj = {
    name: 'Maks',
    age: 30,
}
map.set(newObj, 111); //объект является ключом

const func = () => {
    console.log('Hello');
}
map.set(func, "фига се") //Функция является ключом !!!
    .set(true, false); //и даже boolean

//получать значения - get
//console.log(map.get(true));

//проверить наличие значения свойст - set
//console.log(map.has(null));
//console.log(map.has('hi'));

//у коллекции есть свойство size (количечество элементов )
//console.log(map.size);

//console.log('map: ', map);


//можем передать значения сразу при создании коллекции
//массивом устанавливаем сразу значения
const newMap = new Map([
    [2019, 'autumn'],
    ['joker', 1]
]);
newMap.set(1222112, 'в значение чего то там');
//console.log('newMap: ', newMap.get(2019));



const collectMap = new Map([

    ['hello', 'World'],
    ['year', 2019],
    ['month', 'July']
]);
//console.log('collectMap: ', collectMap);
collectMap.delete('month'); //удаляем элемент
//console.log('collectMap: ', collectMap);
collectMap.clear(); //очищает коллекцию
//console.log('collectMap: ', collectMap);


const arr = Array.from(map); // = коллекцию массивов из Map
//console.log('arr: ', arr);

newMap.forEach(function(item) { ///по старому
    //console.log('item: ', item);
});

newMap.forEach((value, key) => { //по новому
    //console.log(key, value);
});

for (let [key, value] of newMap) { //по новому
    console.log(key, value);
};



function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User('Ivan');
//console.log('User: ', User); //конструктор - НЕ ДАННЫЕ
//console.log('user: ', user); //ОБЪЕКТ-ДАННЫЕ из конструктора





///КОЛЛЕКЦИЯ SET (для хранения уникальных значений) // - (список значений - дубли неуникальные - не сохраняется)
//ключи могут быть разные как и в Mat
//менее ресурсозатратнее чем массив
const carsSet = new Set();
carsSet.add('Volvo');
carsSet.add('Audio');
carsSet.add('BMW');
carsSet.add('Volvo');
console.log('carsSet: ', carsSet.size);
console.log('carsSet: ', carsSet);

carsSet.has('Volvo') //true
carsSet.has('VAZ') //false

carsSet.delete('BMW');
console.log('carsSet: ', carsSet);

const carsSet2 = new Set(['Миша', 'Петя', 'Коля']);
const carsSet3 = new Set(['Оля', 'Маша', 'Аня']);
const [name1, name2] = carsSet2;
console.log(name1, name2); //по индексу 'Миша', 'Петя'
console.log([...carsSet2]); //превратил коллекцию в arr

const carsSetAll = new Set([...carsSet2, ...carsSet3]);
console.log('carsSetAll: ', carsSetAll);

carsSetAll.forEach((key) => { //по новому
    console.log(key);
});