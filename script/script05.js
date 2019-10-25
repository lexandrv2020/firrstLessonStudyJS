'use strict';

let money,
    income = 'Внешнее совместительство',
    addExpenses = 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью',
    deposit = false,
    mission = 2500000,
    period = 72;

let start = function() {

    do { money = prompt('Ваш месячный доход?', 289000) }
    while (isNaN(money) || money === '' || money === null);
}

start();

let showTypeof = function(item) {
    //    console.log(item, typeof item);
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetMonth = money; //бюджет на месяц
//money = +prompt('Ваш месячный доход в рублях?', budgetMonth); //+ получаем доход в формате number
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses); //расходы в формате string
deposit = confirm('Есть ли у вас депозит в банке?', deposit) //true / false

let budgetDay = budgetMonth / 30; //бюджет на день
let restOfDivision = (budgetMonth % 30); //остаток от деления
budgetMonth = money;

//let listExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Ипотека'),
//    valueExpenses1 = +prompt('Во сколько это обойдется?', 30000),
//    listExpenses2 = prompt('Какие еще обязательные ежемесячные расходы у вас есть?', 'Дети: обучение, развлечения'),
//    valueExpenses2 = +prompt('А во сколько это обойдется?', 90000);
let listExpenses1,
    listExpenses2;
/*
console.log(`Доход за месяц: ${budgetMonth}`);
console.log(`Цель в ${mission} рублей с учетом дохода будет достигнута за ` +
    Math.ceil(mission / budgetMonth) + ' месяцев');
*/
console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function() {

    let sumExpenses = 0;

    let valueExpenses;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            listExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Ипотека');
        } else {
            listExpenses2 = prompt('Какие еще обязательные ежемесячные расходы у вас есть?', 'Дети: обучение, развлечения');
        }

        do { valueExpenses = prompt('А во сколько это обойдется?', 90000) }
        while (isNaN(valueExpenses) || valueExpenses === '' || valueExpenses === null);

        sumExpenses += Number(valueExpenses);
        //console.log('sumExpenses: ', sumExpenses);

    }
    return sumExpenses;
};
let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};
let getTargetMonth = function() {
    return Math.floor(mission / getAccumulatedMonth());
};
let targetMonth = getTargetMonth();

console.log(`Расходы за месяц: ${expensesAmount} рублей`);
console.log(`Накопления за месяц: ${getAccumulatedMonth()} рублей`);
console.log(`Срок достижения цели накопления в ${mission} руб.: ${targetMonth} месяцев`);

console.log(`Цель ${(targetMonth > 0) ? "" : " НИКОГДА не"} будет достигнута`);

budgetMonth = budgetMonth - expensesAmount;
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
if (budgetDay < 0) {
    console.log(getStatusIncome() + ' (дневной заработок' + budgetDay + ' руб.)');
} else {
    console.log('Оценка текущего дневного заработка: ', getStatusIncome() + ' (' + budgetDay + ' руб.)');
}