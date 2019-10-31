//'use strict';
//////////////////////////////////////////////
//КОНТЕКСТ ВЫЗОВА -this///////////////////////
//////////////////////////////////////////////
//this - контекст (всегда существует внутри функции)
//console.log(this);
/*


-------------4 ПРАВИЛА----------------   
1. Привязка по умолчанию (вызов функции и скобочки) - foo(); -this = win
2. Неявная привязка - obj.foo(); -this = obj
3. Явная привязка (apply. call. bind)
4. Привязка new



function one() { //точка вызова  - global
    console.log("one");
    two();
}
function two() { //точка вызова  - one
    console.log("two");
    three();
}
function three() { //точка вызова  - two
    console.log("three");
}
one(); // место вызова функции -  "call site"

let a = 10;
//var - записывается в глобальную переменную windows
function test() {
    console.log("Hello", this);

}
test(); //this = undefined если 'use strict';
window.test(); //this = покажет window даже при 'use strict';

let obj = {
    x: 10,
    y: 15,
    test: newTest
        //    test: function() {
        //        console.log('this obj: ', this);
        //    
};
let obj2 = {
    x: 20,
    y: 25,
    testObj: obj
};

function newTest() {
    console.log('this newtest: ', this.x);
}
obj.test();
obj2.testObj.test();
//важно откуда выхывается функция.

function foo(callback) {
    callback();
}
//foo(obj.test);
setTimeout(obj.test, 200);*/



let obj = {
    x: 10,
    y: 15
}

function newTest() {
    console.log('this: ', this);
}
/*
//жесткая привязка
function hardBind(hard) {
    newTest.call(hard); //this = obj
    //   newTest.call(); //this = wind
}
hardBind(obj);
setTimeout(hardBind, 1000, obj);
///явная привязка
//newTest.apply(obj);
//newTest.call(obj);
*/
let foo = newTest.bind(obj);
foo