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
    addIncomeItems_01Value = addIncomeItems[0].value,
    addIncomeItems_02Value = addIncomeItems[1].value;
//(e)
let budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value');
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
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function() {
        if (sallaryAmount.value === '') {
            alert('Ошибка, для расчета необходимо заполнить месячный доход.');
            return;
        }
        appData.budget = +sallaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        //appData.getInfoDeposit();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();

    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcSavedMonth();

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
            let itemExpences = item.querySelector('.expenses-title').value;
            let cashExpences = item.querySelector('.expenses-amount').value;
            if (itemExpences !== '' && cashExpences !== '') {
                appData.expenses[itemExpences] = +cashExpences;
            }
        });
    },

    getIncome: function() { //исправить в домашней работе
        if (confirm('Есть у вас дополнительный заработок?')) {

            let itemIncome = prompt('Какой доп. заработок у вас есть?', '-Infostart, 1clancer');
            let cashIncome = prompt('Сколько в месяц вы зарабатываете на этом?', 5000);
            appData.income[itemIncome] = +cashIncome;
        }
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }


    },
    getAddExpenses: function() {
        let add_Expenses = additionalExpensesItem.value.split(','); //получае массив из строки с ','
        //перебираем массив
        add_Expenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        addIncomeItems.forEach(function(item) {
            let itemValue = item.value;
            itemValue = itemValue.trim(); //убираем пробелы
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function() {

        let sumExpenses = 0;
        for (let key in appData.expenses) {
            sumExpenses += +appData.expenses[key];
        }
        appData.expensesMonth = sumExpenses
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return Math.ceil(targetAmount.value / appData.budgetMonth);
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
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit) {
            do { appData.percentDeposit = prompt('Какой годовой процент?', 10) }
            while (isNotANumber(appData.percentDeposit));


            do { appData.moneyDeposit = prompt('Какой сумма заложена?', 10000) }
            while (isNotANumber(appData.moneyDeposit));
        }
    },
    calcSavedMonth: function() {
        return appData.budgetMonth * periodSelect.value;
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
    return (!isNaN(value) || value === '' || value === null)
}