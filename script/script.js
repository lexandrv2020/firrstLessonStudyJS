'use strict'; //усиленный конроль синтаксиса

//первый урок
let money = 149000,
    income = '140000',
    addExpenses = 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью',
    deposit = false,
    mission = 2500000,
    period = 72;
/*
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период месяцев: ' + period);
console.log('Цель заработать: ' + mission + ' руб.');
console.log(addExpenses.toLowerCase().split(', '));*/

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
console.log(addExpenses.split(','));
deposit = confirm('Есть ли у вас депозит в банке?', deposit) //true / false

//выводим результат ввода в консоль
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

budgetMonth = money;
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

    listExpenses = prompt(question1, '');
    valueExpenses = +prompt(question2, '');
    budgetMonth = budgetMonth - valueExpenses;
}

console.log('Доход за месяц: ', budgetMonth);
console.log('Цель в ' + mission + ' рублей с учетом дохода будет достигнута за ' +
    Math.ceil(mission / budgetMonth) + ' месяцев');
budgetDay = Math.floor(budgetMonth / 30);
console.log('Дневной бюджет = ' + budgetDay + ' рублей');

let resultBudgetDay = '';
if (budgetDay >= 800) {
    resultBudgetDay = 'Высокий уровень дохода';
} else if ((budgetDay < 800) && (budgetDay > 300)) {
    resultBudgetDay = 'Средний уровень дохода';
} else if ((budgetDay <= 300) && (budgetDay > 0)) {
    resultBudgetDay = 'Низкий уровень дохода';
} else if (budgetDay = 0) {
    resultBudgetDay = 'Жаль, не остается денег на отпуск';
} else if (budgetDay < 0) {
    resultBudgetDay = 'Что-то в этой жизни пошло не так.....';
}
console.log('Оценка текущего дневного заработка: ', resultBudgetDay + ' (' + budgetDay + ' руб.)');