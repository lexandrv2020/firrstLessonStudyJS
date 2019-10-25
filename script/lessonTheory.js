'use script';

//////ОБЪЕКТЫ///////////////
//////ОБЪЕКТЫ///////////////
//////ОБЪЕКТЫ///////////////

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
stop();

function stop() {
    console.log('Машина стоит со скоростью 0 км/ч');
}
console.log('car: ', car);