'use strict';
//(a)
let btnStart = document.getElementById('start');
//(b)
let btnIncomePlus = document.getElementsByTagName('button')[0],
    btnExpensesPlus = document.getElementsByTagName('button')[1];
//(c)
let checkBox = document.querySelector('#deposit-check');
//(d)
let addIncomeItems = document.querySelectorAll('.additional_income-item'),
    addIncomeItems_01 = addIncomeItems[0],
    addIncomeItems_02 = addIncomeItems[1],
    value_addIncomeItems_01 = addIncomeItems[0].value,
    value_addIncomeItems_02 = addIncomeItems[1].value;
//(e)
let budget_month = document.querySelector('.budget_month-value'),
    budget_day = document.querySelector('.budget_day-value'),
    expenses_month = document.querySelector('.expenses_month-value'),
    additional_income = document.querySelector('.additional_income-value'),
    additional_expenses = document.querySelector('.additional_expenses-value'),
    income_period = document.querySelector('.income_period-value'),
    target_month = document.querySelector('.target_month-value');
//(f)
let sallaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 2500000,
    period: 72,
    start: function() {
        /*        
                do {
                    money = prompt('Ваш месячный доход?', 289000);
                }
                while (isNotANumber(money));
        */
        if (sallaryAmount.value === '') {
            alert('Ошибка, для расчета необходимо заполнить месячный доход.');
            return;
        }
        appData.budget = sallaryAmount.value;
        //onsole.log('sallaryAmount.value: ', sallaryAmount.value);
        appData.getExpenses();
        /*
                appData.asking();
                appData.getInfoDeposit();
                appData.getExpensesMonth();
                appData.getBudget();
        */
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            btnExpensesPlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            console.log(item);
        });
    },
    asking: function() {
        let listExpenses,
            valueExpenses,
            cashIncome,
            itemIncome,
            addExpenses,
            objExpenses = {};

        if (confirm('Есть у вас дополнительный заработок?')) {

            do { itemIncome = prompt('Какой доп. заработок у вас есть?', 'Infostart, 1clancer') }
            while (isNotAString(itemIncome));

            do { cashIncome = prompt('Сколько в месяц вы зарабатываете на этом?', 5000) }
            while (isNotANumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        do { addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Аренда, кредит, одежда, питание, обучение, семья') }
        while (isNotAString(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(',');

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                listExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Ипотека');
            } else {
                listExpenses = prompt('Какие еще обязательные ежемесячные расходы у вас есть?', 'Дети: обучение, развлечения');
            }
            do { valueExpenses = prompt('А во сколько это обойдется?', 90000) }
            while (isNotANumber(valueExpenses));
            appData.expenses[listExpenses] = Number(valueExpenses);
        }
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth: function() {
        let sumExpenses = 0;
        for (let key in appData.expenses) {
            sumExpenses += appData.expenses[key];
        }
        appData.expensesMonth = sumExpenses
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return Math.floor(appData.mission / appData.budgetMonth);
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
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            do { appData.percentDeposit = prompt('Какой годовой процент?', 10) }
            while (isNotANumber(appData.percentDeposit));


            do { appData.moneyDeposit = prompt('Какой сумма заложена?', 10000) }
            while (isNotANumber(appData.moneyDeposit));
        }
    },
    calcSavedMonth: function() {
        return appData.budgetMonth * appData.period;
    }
}

btnStart.addEventListener('click', appData.start);
btnExpensesPlus.addEventListener('click', appData.addExpensesBlock);
/*
let targetMonth = appData.getTargetMonth();
console.log(`Расходы за месяц: ${appData.expensesMonth} рублей`);
console.log(`Срок достижения цели накопления в ${appData.mission} руб.: ${targetMonth} месяцев`);
console.log(`Цель ${(targetMonth > 0) ? "когда-то :) " : "НИКОГДА :( не"} будет достигнута....`);

let statusIncome = appData.getStatusIncome();
if (appData.budgetDay < 0) {
    console.log(statusIncome + ' (дневной заработок' + appData.budgetDay + ' руб.)');
} else {
    console.log('Оценка текущего дневного заработка: ', statusIncome + ' (' + appData.budgetDay + ' руб.)');
}
*/
//функция проверки введенного значения на число
function isNotANumber(value) {
    return (isNaN(value) || value === '' || value === null);
}

//функция проверки введенного значения на строку
function isNotAString(value) {
    return (!isNaN(value) || value === '' || value === null);
}