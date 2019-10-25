'use strict';

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 289000);
        }
        while (isNaN(money) || money === '' || money === null);
    }

start();

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 2500000,
    period: 72,
    budget: Number(money),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    accumulatedMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let listExpenses,
            valueExpenses,
            objExpenses = {};

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                listExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Ипотека');
            } else {
                listExpenses = prompt('Какие еще обязательные ежемесячные расходы у вас есть?', 'Дети: обучение, развлечения');
            }
            do { valueExpenses = prompt('А во сколько это обойдется?', 90000) }
            while (isNaN(valueExpenses) || valueExpenses === '' || valueExpenses === null);
            objExpenses[listExpenses] = Number(valueExpenses);
        }
        appData.expenses = objExpenses;
        //console.log('objExpenses: ', objExpenses);

    },
    getExpensesMonth: function() {
        let sumExpenses = 0;
        for (let key in appData.expenses) {
            sumExpenses += appData.expenses[key];
        }
        appData.expensesMonth = sumExpenses
    },
    getAccumulatedMonth: function() {
        appData.accumulatedMonth = appData.budget - appData.expensesMonth;

    },
    getBudgetMonthDay: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return Math.floor(appData.mission / appData.accumulatedMonth);
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            return 'Высокий уровень дохода';
        } else if ((appData.budgetDay < 800) && (appData.budgetDay > 300)) {
            return 'Средний уровень дохода';
        } else if ((appData.budgetDay <= 300) && (appData.budgetDay > 0)) {
            return 'Низкий уровень дохода';
        } else if (appData.budgetDay === 0) {
            return 'Жаль, не остается денег на отпуск';
        } else if (appData.budgetDay < 0) {
            return 'Что-то в этой жизни пошло не так.....';
        }
    }
}

//let listExpenses,
//    listExpenses2;

appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getBudgetMonthDay();
let targetMonth = appData.getTargetMonth();
let statusIncome = appData.getStatusIncome();

console.log(`Доход за месяц: ${money} рублей.`);
console.log(`Расходы за месяц: ${appData.expensesMonth} рублей`);
console.log(`Накопления за месяц: ${appData.accumulatedMonth} рублей`);
console.log(`Срок достижения цели накопления в ${appData.mission} руб.: ${targetMonth} месяцев`);
console.log(`Цель ${(targetMonth > 0) ? "когда-то :) " : "НИКОГДА :( не"} будет достигнута....`);
if (appData.budgetDay < 0) {
    console.log(statusIncome + ' (дневной заработок' + appData.budgetDay + ' руб.)');
} else {
    console.log('Оценка текущего дневного заработка: ', statusIncome + ' (' + appData.budgetDay + ' руб.)');
}

console.log(appData);