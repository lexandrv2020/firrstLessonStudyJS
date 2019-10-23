'use strict';

let money = 149000,
    income = '140000',
    addExpenses = 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью',
    deposit = false,
    mission = 2500000,
    period = 72;

let showTypeof = function(data) {}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetMonth = (money + Number(income)); //бюджет на месяц
let budgetDay = budgetMonth / 30; //бюджет на день
let restOfDivision = (budgetMonth % 30); //остаток от деления

money = +prompt('Ваш месячный доход в рублях?', budgetMonth); //+ получаем доход в формате number
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses); //расходы в формате string
deposit = confirm('Есть ли у вас депозит в банке?', deposit) //true / false

budgetMonth = money;

let question1_1 = 'Какие обязательные ежемесячные расходы у вас есть?';
let listExpenses1 = prompt(question1_1, 'Ипотека');
let question1_2 = 'Во сколько это обойдется?';
let valueExpenses1 = +prompt(question1_2, 30000);

let question2_1 = 'Какие еще обязательные ежемесячные расходы у вас есть?';
let listExpenses2 = prompt(question2_1, 'Дети: обучение, развлечения');
let question2_2 = 'А во сколько это обойдется?';
let valueExpenses2 = +prompt(question2_2, 90000);

budgetMonth = budgetMonth - valueExpenses1 - valueExpenses2;

console.log(`Доход за месяц: ${budgetMonth}`);
console.log(`Цель в ${mission} рублей с учетом дохода будет достигнута за ` +
    Math.ceil(mission / budgetMonth) + ' месяцев');
budgetDay = Math.floor(budgetMonth / 30);


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


let getExpensesMonth = function(Expenses1, Expenses2) {
    return Expenses1 + Expenses2;
}

let getAccumulatedMonth = function(monthIncome, expensesMonth) {
    return monthIncome - expensesMonth;
}

let getTargetMonth = function(mission, accumulatedMonth) {
    return Math.floor(mission / budgetMonth);
}

let expensesMonth = getExpensesMonth(valueExpenses1, valueExpenses2) //сводные расходы;
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth); //накопления за месяц
let targetMonth = getTargetMonth(mission, accumulatedMonth); //срок достижения цели