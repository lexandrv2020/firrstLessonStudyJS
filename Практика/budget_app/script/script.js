'use strict';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('start').disabled = (document.querySelector('.salary-amount').value === '');
});
//(a)
let btnStart = document.getElementById('start');
let btnСancel = document.getElementById('cancel');
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
    incomeItems = document.querySelectorAll('.income-items'),
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
    period: 1,
    start: function() {
        //        if (sallaryAmount.value === '') {
        //            alert('Ошибка, для расчета необходимо заполнить месячный доход.');
        //            return;
        //        }
        appData.budget = +sallaryAmount.value;
        //console.log(appData.budget);

        appData.getAddExpenses();
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getAddIncome();
        appData.getIncome();
        appData.getIncomeMonth();
        appData.getBudget();
        appData.showResult();

        appData.getDisableAllInputs();

    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        incomePeriodValue.value = appData.calcSavedMonth();
        targetMonthValue.value = appData.getTargetMonth();

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
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            btnIncomePlus.style.display = 'none';
        }
    },

    getIncome: function() { //исправить в домашней работе
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
            }
        });
    },
    getAddExpenses: function() {
        appData.addExpenses = [];
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
        appData.addIncome = [];
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
        appData.expensesMonth = sumExpenses;
    },
    getIncomeMonth: function() {

        let sumIncome = 0;
        for (let key in appData.income) {
            sumIncome += +appData.income[key];
        }
        appData.incomeMonth = sumIncome;
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
    },
    getPeriodAmount: function() {
        appData.period = +periodSelect.value;
        periodAmount.textContent = periodSelect.value;
    },
    getDisableAllInputs: function() {

        let dataElem = document.querySelector('.data');
        let inputElem = dataElem.querySelectorAll('input');
        inputElem.forEach(function(item) {
            item.setAttribute("readonly", true);
        });
        btnStart.style.display = 'none';
        btnСancel.style.display = 'block';

    }
}

btnStart.addEventListener('click', appData.start);
btnIncomePlus.addEventListener('click', appData.addIncomeBlock);
btnExpensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('click', appData.getPeriodAmount);

btnStart.addEventListener('click', appData.start);
btnСancel.addEventListener('click', reload);

function reload() {
    location.reload();
}

let checkAbilityOsStart = function() {
    console.log('.value: ', sallaryAmount.value);
    btnStart.disabled = (sallaryAmount.value === '');
}
sallaryAmount.addEventListener('input', checkAbilityOsStart);



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