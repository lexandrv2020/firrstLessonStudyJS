'use strict';

document.addEventListener("DOMContentLoaded", initial);

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
};

function initial() {
    let isFromLS = false;
    if (storageAvailable('localStorage')) {
        for (let key in localStorage) {

            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }

            let elem = document.querySelector(key);
            elem.value = localStorage.getItem(key);
            isFromLS = (elem.value === '' || elem.value === '0' || elem.value === 'NaN') ? false : true;
        };

    }
    if ((isFromLS) && (document.querySelector('.salary-amount').value === '') && (document.querySelector('.budget_month-value').value !== '')) {
        //получены данные с LS
        btnStart.style.display = 'none';
        btnСancel.style.display = 'block';
        let allDataElements = document.querySelector('.data');
        allDataElements.querySelectorAll('input').forEach(function(item) {
            item.setAttribute("readonly", 'true');
        });
        periodAmount.textContent = periodSelect.value;
        targetMonthValue.value = '';
    } else {
        btnStart.style.display = 'block';
        btnСancel.style.display = 'none';
        let allDataElements = document.querySelector('.data');
        allDataElements.querySelectorAll('input').forEach(function(item) {
            item.removeAttribute("readonly");
        });
        periodAmount.textContent = periodSelect.value;
        targetMonthValue.value = '';

        document.getElementById('start').disabled = (document.querySelector('.salary-amount').value === '');
    }

    setFormatOfValue();
};

function setFormatOfValue(textElem = undefined) {
    if (textElem === undefined) {
        const dataElements = document.querySelector('.data');
        textElem = dataElements.querySelectorAll('input');
    }
    textElem.forEach(function(item) {
        if (item.getAttribute("placeholder") === "Наименование") {
            item.addEventListener('input', function() {
                item.value = item.value.replace(/[^а-яА-Я ,.:;Ёё'"()/]*$/, '');
            });
        } else if (item.getAttribute("placeholder") === "Сумма") {
            item.addEventListener('input', function() {
                item.value = item.value.replace(/[^0-9]/, '');
            });
        }
    });
};

function setItems(name, value, exp_y, exp_m, exp_d, path, domain, security) {
    //localStorage
    if (storageAvailable('localStorage') && (name !== 'isLoad')) {
        localStorage.setItem(name, value);
    }
    //cookies
    let cookieStr = name + '=' + encodeURI(value);
    if (exp_y) {
        let expires = new Date(exp_y, exp_m - 1, exp_d);
        cookieStr += '; expires=' + expires.toGMTString();
    }
    cookieStr += path ? '; path=' + path : '';
    cookieStr += domain ? '; domain=' + domain : '';
    cookieStr += security ? '; security' : '';
    cookieStr += '; isLoad=true';
    document.cookie = cookieStr;
};

function setCookieAndLocalStorage() {
    setItems('.budget_month-value', budgetMonthValue.value, 2020, 1, 1);
    setItems('.budget_day-value', budgetDayValue.value, 2020, 1, 1);
    setItems('.expenses_month-value', expensesMonthValue.value, 2020, 1, 1);
    setItems('.additional_income-value', additionalIncomeValue.value, 2020, 1, 1);
    setItems('.additional_expenses-value', additionalExpensesValue.value, 2020, 1, 1);
    setItems('.income_period-value', incomePeriodValue.value, 2020, 1, 1);
    setItems('.target_month-value', targetMonthValue.value, 2020, 1, 1);
    setItems('isLoad', true, 2020, 1, 1);
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

/*let AppData = function() { //конструктор
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
};*/

class AppData { //класс
    constructor(budget = 0, budgetDay = 0, budgetMonth = 0, income = {}, incomeMonth = 0,
        addIncome = [], expenses = {}, addExpenses = [], expensesMonth = 0, deposit = false,
        percentDeposit = 0, moneyDeposit = 0, period = 1) {
        this.budget = budget;
        this.budgetDay = budgetDay;
        this.budgetMonth = budgetMonth;
        this.income = income;
        this.incomeMonth = incomeMonth;
        this.addIncome = addIncome;
        this.expenses = expenses;
        this.addExpenses = addExpenses;
        this.expensesMonth = expensesMonth;
        this.deposit = deposit;
        this.percentDeposit = percentDeposit;
        this.moneyDeposit = moneyDeposit;
        this.period = period;
    }
}

let appData = new AppData(); //объект

AppData.prototype.start = () => {
    appData.budget = +sallaryAmount.value;
    appData.getAddExpenses();
    appData.getExpenses();
    appData.getExpensesMonth();
    appData.getAddIncome();
    appData.getInfoDeposit();
    appData.getIncome();
    appData.getIncomeMonth();
    appData.getBudget();
    appData.showResult();
    appData.getDisableAllInputs();
};
AppData.prototype.showResult = () => {
    budgetMonthValue.value = appData.budgetMonth;
    //debugger;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    incomePeriodValue.value = appData.calcSavedMonth();
    targetMonthValue.value = appData.getTargetMonth();
};
AppData.prototype.getExpenses = () => {
    expensesItems.forEach(function(item) {
        const itemExpences = item.querySelector('.expenses-title').value;
        const cashExpences = item.querySelector('.expenses-amount').value;
        if (itemExpences !== '' && cashExpences !== '') {
            appData.expenses[itemExpences] = +cashExpences;
        }
    });
};
AppData.prototype.getIncome = () => {
    incomeItems.forEach(function(item) {
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = +cashIncome;
        }
    });
};
AppData.prototype.getExpensesMonth = () => {
    let sumExpenses = 0;
    for (let key in appData.expenses) {
        sumExpenses += +appData.expenses[key];
    }
    appData.expensesMonth = sumExpenses;
};
AppData.prototype.getIncomeMonth = () => {
    let sumIncome = 0;
    for (let key in appData.income) {
        sumIncome += +appData.income[key];
    }
    appData.incomeMonth = sumIncome;
};
AppData.prototype.getBudget = () => {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth + Math.round(appData.moneyDeposit * appData.percentDeposit / 12);
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = () => {
    if (isNotANumber(appData.budgetMonth)) {
        return 0;
    }
    return Math.ceil(targetAmount.value / appData.budgetMonth);
};
AppData.prototype.getStatusIncome = () => {
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
};
AppData.prototype.getInfoDeposit = () => {
    if (appData.deposit) {
        appData.percentDeposit = depositPercent.value;
        appData.moneyDeposit = depositAmount.value;
    }
};
AppData.prototype.calcSavedMonth = () => { return appData.budgetMonth * periodSelect.value };

AppData.prototype.getPeriodAmount = () => {
    appData.period = +periodSelect.value;
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.period * appData.budgetMonth;
};
AppData.prototype.getDisableAllInputs = () => {

    const dataElem = document.querySelector('.data');
    const inputElem = dataElem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.setAttribute("readonly", true);
    });
    setCookieAndLocalStorage();

    btnStart.style.display = 'none';
    btnСancel.style.display = 'block';
};

AppData.prototype.getAddExpenses = () => {
    const add_Expenses = addExpensesItem.value.split(',');
    appData.getAddAmount('expences', add_Expenses);
};
AppData.prototype.getAddIncome = () => {
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
AppData.prototype.addExpensesBlock = () => appData.addBlock(expensesItems, btnExpensesPlus, '.expenses');
AppData.prototype.addIncomeBlock = () => appData.addBlock(incomeItems, btnIncomePlus, '.income');

AppData.prototype.addBlock = function(items, btn, type) {
    const cloneItem = items[0].cloneNode(true);
    const inputElem = cloneItem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.value = '';
    });
    setFormatOfValue(inputElem);
    items[0].parentNode.insertBefore(cloneItem, btn);
    const _items = document.querySelectorAll(type + '-items');
    if (_items.length === 3) {
        btn.style.display = 'none';
    }
};
AppData.prototype.getEventListeners = () => {
    btnIncomePlus.addEventListener('click', appData.addIncomeBlock);
    btnExpensesPlus.addEventListener('click', appData.addExpensesBlock);
    periodSelect.addEventListener('input', appData.getPeriodAmount);
};

function getStartData() {
    appData.start();
}

appData.getEventListeners();
btnСancel.addEventListener('click', _reset);

function _reset() {

    let allDataElements = document.querySelector('.data');
    allDataElements.querySelectorAll('input').forEach(function(item) {
        item.value = '';
        item.textContent = '';
    });

    let removeElem = '';
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
    allDataElements.querySelectorAll('input').forEach(function(item) {
        item.removeAttribute("readonly", 'false');
    });
    initial();

    localStorage.clear();
    //document.cookie.clear();

}

const checkAbilityOsStart = () => {
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