'use strict';
/*
Особенности современного стандарта ES6 (Ecma Script - стандарт) 'Harmony'
17/06/2015 
Интерполяция. Деструктуризация 
Новый синтаксис
*/

//********ПЕРЕМЕННЫЕ**********************
//проблемы ES5

//... переопределение переменных

//console.log(n); //? undefined
/*
var n = 5;
//console.log(n);
var n = 10;
var n = 0;
*/


//
/*
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // >>>> 55555
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // >>>> 55555
    }, 1000 * i);
}

let -  область видимости = блок кода ограниченный фигурными скобками {}  !!!!!!!!!!!!!!!
const -  область видимости = весь код  !!!!!!!!!!!!!!!

const , let - объявляются один раз

массивы заданные через const могут расширяться элементами (добавлением).
объекты заданные через const позвоялют изменять только свойства (добавить, менять свойства присутствующие)
*/

//********СТРОКИ**********************
//-------------
//+++++++++++++
/*
const name = 'Alex',
    age = 30;

const newStr = `<h1>Hello<h1>    
                    <div>${name}</div>
                    <div>${age+1}</div>` //(переносы автоматические)?
//console.log('newStr: ', newStr);
*/

/*
//********ПАРАМЕТРЫ ПО УМОЛЧАНИЮ (в параметрах функции)**********************
const createHome = function(wall = 1, doors = 1, windows = 2) {
    console.log(`Дом имеет:
        стен: ${wall},
        дверей: ${doors},
        окон: ${windows}`);
};
createHome(5, 4);
*/

///СТЕРЕЛОЧНЫЕ ФУНКЦИИ***************************************
/*
const sum2 = (a, b) => {
    return a + b;
}
console.log('sum2(5, 6); ', sum2(5, 6));

//если функция сразу возвращает значение >>>
const sum1 = (a, b) => a + b;
console.log('sum1(6, 8); ', sum1(5, 6));

//если функция возвращает объект >>> надо включать в скобки ({ })
const sum3 = (a, b) => ({
    a: a,
    b: b,
    sum: a + b,
});
console.log('sum3(6, 8); ', sum3(5, 6));

//////////////////////
[].forEach((e) => {
    console.log(e);
});

// === 

[].forEach(function(e) {
    console.log(e);
});

//стрелочная функция не имеет своего this*/

/////PART #2
/*
//Rest parametr !!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!
//неопределенное количество параметров
//через 3 точки (служебный параметр)
//он всегда должен стоять последним
function test(a, b, c, ...arr) {
       console.log('a: ', a);
        console.log('b: ', b);
        console.log('c: ', c);
        console.log('arr: ', arr);
    
}
test('red', 5, 12, 'black', [], true, 9);

//Spread operator !!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!
const arr = ['red', 5, 12];

function testR(a, b, c) {
    // console.log('a, b, c: ', a, b, c);
}
testR(...arr);

//можно комбинировать
const arr11 = ['red', 5, 12];
const arr12 = [17, true];

function testR2(a, b, c, d, e, f) {

    console.log('a, b, c: ', a, b, c);
    console.log('d, e: ', d, e);
}
testR2(...arr11, 50, ...arr12);
//
//собрать из нескольких массивов SPREAD операторов - один.
//!!!!!!!!!!!!!!!!!!!!!!!!!!
const arr13 = [...arr11, 'hi', ...arr12];
console.log('arr13: ', arr13);

///преобразовтаь DOM в массив  !!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!
const allEl = document.querySelectorAll('meta');
console.log('allEl: ', allEl);
const newArr = [...allEl];
console.log('newArr: ', newArr);
*/
//////!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!
//Деструктуризация объектов
/*
const car = {
    brand: 'mazda',
    model: 3,
    options: {
        color: 'red',
        ABS: true
    }
}

const { brand, model, transmission = 'auto' } = car; //свойства которые хотим взять и внести в переменную
//добавили свойство по умолчанию               
console.log('brand, model: ', brand, model);

const { options: { color, ABS } } = car; //свойства которые хотим взять и внести в переменную
const { options: { color: CarColor, ABS: CarABS } } = car; // + можно указать новое имя переменной
console.log('CarColor: ', CarColor);
console.log('color, ABS: ', color, ABS);


const createCar = ({ brand = 'audi', model, color = 'black' }) => {
    console.log(`
        Запущено в производство ${brand} ${model}
        цвет кузова ${color}
    `)
};
//-либо без определения по умолчнию
//const createCar = () => { 
//    console.log(`
//        Запущено в производство ${car.brand} ${car.model}
//        цвет кузова ${car.color}
//    `);
//};

createCar({
    // brand: 'mazda',
    model: 3,
    options: {
        color: 'red',
        ABS: true
    }
});*/

/*
const car = {
    brand: 'mazda',
    model: 3,
    options: {
        color: 'red',
        abs: true
    }
}

const { brand, ...options } = car;
console.log('brand: ', brand, options); //свойство + недостающие параметры
*/
/*
const cars = ['mazda', 'audi', 'bmw', 'VAZ'];
const [a, b, c] = cars;
console.log('a, b, c: ', a,  b, c); //a, b, c:  mazda audi bmw
*/
/*
const cars = [
    ['mazda', 'audi'],
    ['bmw', 'VAZ'], 'ЗИЛ'
];
const [
    [a, b], c
] = cars;
console.log('a, b, c: ', a, b, c); // + можно вставить поумолчанию

const carsModel = {
    brand: 'Volvo',
    models: {
        sedan: ['s60', 's90'],
        cross: ['v60', 'v90'],
    }
};
const {
    models: {
        sedan: [s1, s2],
        cross: [c1, c2]
    }
} = carsModel;
console.log(s1, s2, c1, c2); //s60 s90 v60 v90
*/

/*
//создание объекта из переменных
const car = 'bently';
const cycle = 'bmx';
const bike = 'honda';

//раньше

//const transport = {
//    car: car,
//    cycle: cycle,
//    bike: bike,
//    ride: function() {
//        console.log('go');
//    }
//};


//сейачс
const transport = {
        car,
        cycle,
        bike,
        ride() { //не стрелочная функция
            console.log('go');
        }
    }
transport.ride();

console.log('transport: ', transport);
*/



////////////********************************************** */
///Object.assign/////////////////////////////////////////////
//создаем объект, сливаем (объединяем свойства)

const transport = {
    bike: 'honda',
    car: 'bently',
    cycle: 'bmx',
};

const newTransport = {
    bike: 'suzuki',
    quadBike: 'polaris',
};

Object.assign(transport, newTransport); //перенесли свойства из newTrans в transport (добавили / заменили)

const currentTrans = Object.assign({}, transport, newTransport); //создаем новый объект
console.log('currentTrans: ', currentTrans);
console.log('newTransport: ', newTransport);
console.log('transport: ', transport);