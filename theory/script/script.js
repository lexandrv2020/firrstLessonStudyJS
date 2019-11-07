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
console.log(map.get(true));

//проверить наличие значения свойст - set
console.log(map.has(null));
console.log(map.has('hi'));

//у коллекции есть свойство size (количечество элементов )
console.log(map.size);

console.log('map: ', map);


//можем передать значения сразу при создании коллекции
//массивом устанавливаем сразу значения
const newMap = new Map([
    [2019, 'autumn'],
    ['joker', 1]
]);
newMap.set(1222112, 'в значение чего то там');
console.log('newMap: ', newMap.get(2019));