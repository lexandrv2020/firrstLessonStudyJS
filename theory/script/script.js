/*defineProperty, Геттеры, Сеттеры*/

'use strict';


/*defineProperty

const mazda = {

    model: 3,
    year: 2006
};
//***************добавляем свойства 
//mazds.color = 'blue';
//mazds['color'] = 'blue'; 
Object.defineProperty(mazda, 'color', {
    value: 'blue', //значение
    writable: false, //разрешить перезапись
    configurable: false, //разрешить удалять
    enumerable: false, //разрешить на for ** in (невидимое свойство)
});

for (let key in mazda) {
    console.log(key + ': ', mazda[key]);

}
console.log('mazda: ', mazda);
*/

/*Геттеры, Сеттеры*/
/*
const car = {
    brand: 'mazda',
    model: 3,
    year: 2006,
    get fullTitle() {
        return this.brand + ' ' + this.model;
    },
    set fullTitle(value) {
        this.brand = value;
    },

};
car.color = 'blue'; //значение
car.fullTitle = '   B M W   '; //без 'set' (в object) не смогли бы установить 

console.log('car: ', car.fullTitle); //из getter
*/

class CarWash { //мОЙКА АВТО
    constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
        this.brand = brand;
        this.model = model;
        this.washed = false; //машины поступают грязные        
        this._services = services; //(для скрытия от пользователя свойства объекта "_" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    static noCarBaseModel() { //статические методы. нельзя вызвать из объекта. только из класса
        return 'none';
    }

    washReady() {
        this.washed = true; //машина помыта
        CarWash.counter++;
        this.report();
    }
    report() { //информируем владельца
        console.log(this.brand, this.model, this.washed);
    }
    get services() {
        console.log(this._services);
        return this._services.length > 0 ? 'Есть доп.услуги (' + this._services + ')' : 'Нет доп.услуг';
    }

    set services(addServices) {
        this._services.push(addServices);
    }
}

///наследование!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// наследуемый класс наследует свойства и методы родителя
class PassCar extends CarWash {
    //ддя создания своих свойств указываем SUPER
    constructor(brand, model, services, pass = 5) {
        super(brand, model, services); //свойства какие будем наследовать
        this.pass = pass;
    }
    washReady() {
        //   this.washed = true; //машина помыта
        //   CarWash.counter++;
        //   this.report();
        super.washReady(); //Наследуем из главного метода.
        this.reportOffice();
    }
    reportOffice() { //информируем владельца
        console.log('на мойке для легковых автомобилей помыли: ' + this.brand, this.model, this.washed);
    }
}


///создаем классу статические свойства (принадлежат классу а не объекту)
CarWash.counter = 0;

const car1 = new CarWash('brand', 3, ['black tires', 'wax']); //новый ОБЪЕКТ
const car2 = new PassCar('bmw', 3); //новый ОБЪЕКТ
const car3 = new CarWash('volvo', 3); //новый ОБЪЕКТ
const car4 = new CarWash('ZAZ'); //новый ОБЪЕКТ

car1.washReady();
console.log('CarWash.counter: ', CarWash.counter);
car2.washReady();
console.log('CarWash.counter: ', CarWash.counter);
/*
car3.washReady();
console.log('CarWash.counter: ', CarWash.counter);
car4.washReady();
console.log('CarWash.counter: ', CarWash.counter);
*/

car2.services = 'Протирка стекол';
console.log(car1);
console.log(car2);
//console.log('car1.services: ', car1.services);