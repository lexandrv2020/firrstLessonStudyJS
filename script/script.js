'use strict'; //усиленный конроль синтаксиса

//первый урок
let money = 149000,
    income = '140000',
    addExpenses = 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью',
    deposit = false,
    mission = 2500000,
    period = 72;

let showTypeof = function(data) {
    // console.log(data, typeof(data));
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);
//console.log(typeof money);
//console.log(typeof income);
//console.log(typeof deposit);
/*
console.log(income.length);
console.log('Период месяцев: ' + period);
console.log('Цель заработать: ' + mission + ' руб.');
console.log(addExpenses.toLowerCase().split(', '));
*/

let budgetMonth = (money + Number(income)); //бюджет на месяц
let budgetDay = budgetMonth / 30; //бюджет на день
let restOfDivision = (budgetMonth % 30); //остаток от деления
/*
//выводим в консоль дневной заработок и остаток от деления 'доход в месяц' / 'количество дней' 
//console.log(budgetDay.toFixed(2));
//console.log(restOfDivision);
*/
money = +prompt('Ваш месячный доход в рублях?', budgetMonth); //+ получаем доход в формате number
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses); //расходы в формате string
//console.log(addExpenses.split(','));
deposit = confirm('Есть ли у вас депозит в банке?', deposit) //true / false

//выводим результат ввода в консоль
//console.log(typeof money);
//console.log(typeof addExpenses);
//console.log(typeof deposit);

budgetMonth = money;
let allValueExpenses = 0;
for (let i = 1; i <= 2; i++) {

    let listExpenses = 'listExpenses' + i;
    let valueExpenses = 'valueExpenses' + i;
    let question1 = '';
    let question2 = '';
    if (i === 1) {
        question1 = 'Какие обязательные ежемесячные расходы у вас есть?';
        question2 = 'Во сколько это обойдется?';
    } else {
        question1 = 'Какие еще обязательные ежемесячные расходы у вас есть?';
        question2 = 'А во сколько это обойдется?';
    }

    listExpenses = prompt(question1, );
    valueExpenses = +prompt(question2, );
    allValueExpenses = allValueExpenses + valueExpenses;
}
budgetMonth = budgetMonth - allValueExpenses;

console.log('Доход за месяц: ', budgetMonth);
console.log(`Цель в ${mission} рублей с учетом дохода будет достигнута за ` +
    Math.ceil(mission / budgetMonth) + ' месяцев');
budgetDay = Math.floor(budgetMonth / 30);
//console.log(`Дневной бюджет = ${budgetDay} рублей`);


let getStatusIncome = function() {
    if (budgetDay >= 800) {
        return 'Высокий уровень дохода';
    } else if ((budgetDay < 800) && (budgetDay > 300)) {
        return 'Средний уровень дохода';
    } else if ((budgetDay <= 300) && (budgetDay > 0)) {
        return 'Низкий уровень дохода';
    } else if (budgetDay === 0) {
        return 'Жаль, не остается денег на отпуск';
    } else if (budgetDay < 0) {
        return 'Что-то в этой жизни пошло не так.....';
    }
}
getStatusIncome();
console.log('Оценка текущего дневного заработка: ', getStatusIncome() + ' (' + budgetDay + ' руб.)');


//ДОМАШНЕЕ ЗАДАНИЕ 04 (basic)

//функция возвращает все расходы в месяц... я ее посчитал ранее поэтому просто передаю значение переменной
let getExpensesMonth = function() {
    return allValueExpenses;
}

let getAccumulatedMonth = function(monthIncome, expensesMonth) {
    return monthIncome - expensesMonth;
}

let getTargetMonth = function(mission, accumulatedMonth) {
    return Math.floor(mission / budgetMonth);
}

let expensesMonth = getExpensesMonth();
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth); //накопления за месяц
let targetMonth = getTargetMonth(mission, accumulatedMonth); //срок достижения цели

//console.log(expensesMonth);
//console.log(accumulatedMonth);
//console.log(targetMonth);