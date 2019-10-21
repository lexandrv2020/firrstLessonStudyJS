'use strict'; //усиленный конроль синтаксиса

let money = +prompt('Ваш месячный доход в рублях?', ''); //+ получаем доход в формате number
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''); //расходы в формате string
let deposit = confirm('Есть ли у вас депозит в банке?') //true / false

//выводим результат ввода в консоль
console.log('Месячный доход (руб.) : ', money);
console.log('Возможные расходы : ', addExpenses);
console.log('Наличие депозита : ', deposit);

for (let i = 1; i <= 2; i++) {
    let listExpenses = 'listExpenses' + i;
    let valueExpenses = 'valueExpenses' + i;
    let question1 = '';
    let question2 = '';
    if (i === 1) {
        question1 = 'Какие обязательные ежемесячные расходы у вас есть?';
        question2 = 'Во сколько это обойдется?';
    } else {
        question2 = 'Какие еще обязательные ежемесячные расходы у вас есть?';
        question2 = 'А во сколько это обойдется?';
    }
    listExpenses = prompt(question1, '');
    valueExpenses = +prompt(question2, '');
}