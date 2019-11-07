'use strict';

document.addEventListener("DOMContentLoaded", initial);

function initial() {

    document.getElementById('start').disabled = (document.querySelector('.salary-amount').value === '');

    const dataElements = document.querySelector('.data');
    const textElem = dataElements.querySelectorAll('input');

    textElem.forEach(function(item) {
        if (item.getAttribute("placeholder") === "Наименование") {
            item.addEventListener('input', function() {
                item.value = item.value.replace(/[^а-яА-Я ,.:;'"()/]*$/, '');
            });
        } else if (item.getAttribute("placeholder") === "Сумма") {
            item.addEventListener('input', function() {
                item.value = item.value.replace(/[^0-9]/, '');
            });
        }
    });
};

const btnStart = document.getElementById('start');
const btnСancel = document.getElementById('cancel');

const btnIncomePlus = document.getElementsByTagName('button')[0],
    btnExpensesPlus = document.getElementsByTagName('button')[1];

const depositСheck = document.getElementById('deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    depositCheckmark = document.querySelector('deposit-checkmark');

const addIncomeItems = document.querySelectorAll('.additional_income-item'),
    addExpensesItem = document.querySelector('.additional_expenses-item');

const budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value');

const sallaryAmount = document.querySelector('.salary-amount'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

const incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items');

const AppData = function() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 1;
};
AppData.prototype.start = function() {
    this.budget = +sallaryAmount.value;
    this.getAddExpenses();
    this.getExpenses();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getIncome();
    this.getIncomeMonth();
    this.getBudget();
    this.showResult();
    this.getDisableAllInputs();
};
AppData.prototype.showResult = function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    incomePeriodValue.value = this.calcSavedMonth();
    targetMonthValue.value = this.getTargetMonth();
};
AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function(item) {
        const itemExpences = item.querySelector('.expenses-title').value;
        const cashExpences = item.querySelector('.expenses-amount').value;
        if (itemExpences !== '' && cashExpences !== '') {
            _this.expenses[itemExpences] = +cashExpences;
        }
    });
};
AppData.prototype.getIncome = function() {
    const this_income = this.income;
    incomeItems.forEach(function(item) {
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            this_income[itemIncome] = +cashIncome;
        }
    });
};
AppData.prototype.getExpensesMonth = function() {
    let sumExpenses = 0;
    for (let key in this.expenses) {
        sumExpenses += +this.expenses[key];
    }
    this.expensesMonth = sumExpenses;
};
AppData.prototype.getIncomeMonth = function() {
    let sumIncome = 0;
    for (let key in this.income) {
        sumIncome += +this.income[key];
    }
    this.incomeMonth = sumIncome;
};
AppData.prototype.getBudget = function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + Math.round(this.moneyDeposit * this.percentDeposit / 12);
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function() {
    if (isNotANumber(this.budgetMonth)) {
        return 0;
    }
    return Math.ceil(targetAmount.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function() {
    if (this.budgetDay >= 800) {
        return 'Высокий уровень дохода';
    } else if ((this.budgetDay < 800) && (this.budgetDay > 300)) {
        return 'Средний уровень дохода';
    } else if ((this.budgetDay <= 300) && (this.budgetDay > 0)) {
        return 'Низкий уровень дохода';
    } else if (this.budgetDay === 0) {
        return 'Жаль, не остается денег на отпуск';
    } else if (this.budgetDay < 0) {
        return 'Что-то в этой жизни пошло не так.....';
    }
};
AppData.prototype.getInfoDeposit = function() {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};
AppData.prototype.calcSavedMonth = function() {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getPeriodAmount = function() {
    this.period = +periodSelect.value;
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.period * appData.budgetMonth;
};
AppData.prototype.getDisableAllInputs = function() {

    const dataElem = document.querySelector('.data');
    const inputElem = dataElem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.setAttribute("readonly", true);
    });
    btnStart.style.display = 'none';
    btnСancel.style.display = 'block';
};

AppData.prototype.getAddExpenses = function() {
    const add_Expenses = addExpensesItem.value.split(',');
    appData.getAddAmount('expences', add_Expenses);
};
AppData.prototype.getAddIncome = function() {
    appData.getAddAmount('income', addIncomeItems);
};
AppData.prototype.getAddAmount = function(addType, additionalItem) {
    let addAmount = (addType === 'expences') ? this.addExpenses : this.addIncome;
    let this_addAmount = addAmount;
    additionalItem.forEach(function(item) {
        let itemValue = item;
        if (addType === 'income') {
            itemValue = item.value;
        }
        if (itemValue !== '') {
            this_addAmount.push(itemValue);
        }
    });
};

AppData.prototype.addExpensesBlock = function() {
    appData.addBlock(expensesItems, btnExpensesPlus, '.expenses');
};
AppData.prototype.addIncomeBlock = function() {
    appData.addBlock(incomeItems, btnIncomePlus, '.income');
};
AppData.prototype.addBlock = function(items, btn, type) {
    const cloneItem = items[0].cloneNode(true);
    const inputElem = cloneItem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.value = '';
    });
    items[0].parentNode.insertBefore(cloneItem, btn);
    const _items = document.querySelectorAll(type + '-items');
    if (_items.length === 3) {
        btn.style.display = 'none';
    }
};
AppData.prototype.getEventListeners = function() {
    btnIncomePlus.addEventListener('click', this.addIncomeBlock);
    btnExpensesPlus.addEventListener('click', this.addExpensesBlock);
    periodSelect.addEventListener('click', this.getPeriodAmount);
};

const appData = new AppData();

function getStartData() {
    appData.start();
}

appData.getEventListeners();
btnСancel.addEventListener('click', _reset);

function _reset() {

    const allDataElements = document.querySelector('.data');
    let allInputElements = allDataElements.querySelectorAll('input').forEach(function(item) {
        item.value = '';
        item.textContent = '';
    });

    const removeElem = '';
    const quantityIncomes = document.querySelectorAll('.income-items').length - 1;
    let rIt = quantityIncomes;
    for (let i = 1; i <= quantityIncomes; i++) {
        rIt = document.querySelectorAll('.income-items').length;
        removeElem = document.querySelectorAll('.income-items')[rIt - 1];
        removeElem.remove();
    }
    btnIncomePlus.style.display = 'block';

    const quantityExpences = document.querySelectorAll('.expenses-items').length - 1;
    let rEt = quantityExpences;
    for (let i = 1; i <= quantityExpences; i++) {
        rEt = document.querySelectorAll('.expenses-items').length;
        removeElem = document.querySelectorAll('.expenses-items')[rEt - 1];
        removeElem.remove();
    }
    btnExpensesPlus.style.display = 'block';

    appData.budget = 0;
    appData.budgetDay = 0;
    appData.budgetMonth = 0;
    appData.income = {};
    appData.incomeMonth = 0;
    appData.addIncome = [];
    appData.expenses = {};
    appData.addExpenses = [];
    appData.expensesMonth = 0;
    appData.deposit = false;
    appData.percentDeposit = 0;
    appData.moneyDeposit = 0;
    appData.period = 1;
    periodSelect.value = 1;
    sallaryAmount.value = 0;
    sallaryAmount.value = '';
    depositСheck.checked = false;
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositAmount.value = '';
    appData.deposit = 'false';
    appData.start();
    btnStart.style.display = 'block';
    btnСancel.style.display = 'none';
    checkAbilityOsStart();
    periodAmount.textContent = periodSelect.value;
    targetMonthValue.value = '';
    allInputElements = allDataElements.querySelectorAll('input').forEach(function(item) {
        item.removeAttribute("readonly", 'false');
    });
    initial();
}

const checkAbilityOsStart = function() {
    btnStart.disabled = (sallaryAmount.value === '');
}
sallaryAmount.addEventListener('input', checkAbilityOsStart);

function isNotANumber(value) {
    return (isNaN(value) || value === '' || value === null); //функция проверки введенного значения на число
}

function isNotAString(value) {
    return (!isNaN(value) || value === '' || value === null) //функция проверки введенного значения на строку

}

depositСheck.addEventListener('change', function() {
    if (depositСheck.checked) {
        depositPercent.removeAttribute('disabled');
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function() {
            const selectIndex = this.options[this.selectedIndex].value;
            if (selectIndex === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
        })
    } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';
    }
});



btnStart.addEventListener('click', getStartData);