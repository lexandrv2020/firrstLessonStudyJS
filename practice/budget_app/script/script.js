'use strict';

document.addEventListener("DOMContentLoaded", initial);

function initial() {

    document.getElementById('start').disabled = (document.querySelector('.salary-amount').value === '');

    let dataElements = document.querySelector('.data');
    let textElem = dataElements.querySelectorAll('input');

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

let btnStart = document.getElementById('start');
let btnСancel = document.getElementById('cancel');

let btnIncomePlus = document.getElementsByTagName('button')[0],
    btnExpensesPlus = document.getElementsByTagName('button')[1];

let depositСheck = document.getElementById('deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    depositCheckmark = document.querySelector('deposit-checkmark');

let addIncomeItems = document.querySelectorAll('.additional_income-item'),
    addIncomeItems_01 = addIncomeItems[0],
    addIncomeItems_02 = addIncomeItems[1],
    addIncomeItems_01Value = addIncomeItems[0].value,
    addIncomeItems_02Value = addIncomeItems[1].value;

let budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value');

let sallaryAmount = document.querySelector('.salary-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

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
AppData.prototype.addExpensesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    let inputElem = cloneExpensesItem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.value = '';
    });
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        btnExpensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function(item) {
        let itemExpences = item.querySelector('.expenses-title').value;
        let cashExpences = item.querySelector('.expenses-amount').value;
        if (itemExpences !== '' && cashExpences !== '') {
            _this.expenses[itemExpences] = +cashExpences;
        }
    });
};
AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    let inputElem = cloneIncomeItem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.value = '';
    });
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        btnIncomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function() {
    let this_income = this.income;
    incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            this_income[itemIncome] = +cashIncome;
        }
    });
};
AppData.prototype.getAddExpenses = function() {
    this.addExpenses = [];
    let add_Expenses = additionalExpensesItem.value.split(','); //получае массив из строки с ','
    let this_addExpenses = this.addExpenses;
    add_Expenses.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            this_addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function() {
    this.addIncome = [];
    let this_addIncome = this.addIncome;
    addIncomeItems.forEach(function(item) {
        let itemValue = item.value;
        itemValue = itemValue.trim(); //убираем пробелы
        if (itemValue !== '') {
            this_addIncome.push(itemValue);
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
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit / 12);
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
    //debugger;
    this.period = +periodSelect.value;
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.period * appData.budgetMonth;
};
AppData.prototype.getDisableAllInputs = function() {

    let dataElem = document.querySelector('.data');
    let inputElem = dataElem.querySelectorAll('input');
    inputElem.forEach(function(item) {
        item.setAttribute("readonly", true);
    });
    btnStart.style.display = 'none';
    btnСancel.style.display = 'block';
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

    let allDataElements = document.querySelector('.data');
    let allInputElements = allDataElements.querySelectorAll('input').forEach(function(item) {
        item.value = '';
        item.textContent = '';
    });

    let removeElem = '';
    let quantityIncomes = document.querySelectorAll('.income-items').length - 1;
    let rIt = quantityIncomes;
    for (let i = 1; i <= quantityIncomes; i++) {
        rIt = document.querySelectorAll('.income-items').length;
        removeElem = document.querySelectorAll('.income-items')[rIt - 1];
        removeElem.remove();
    }
    btnIncomePlus.style.display = 'block';

    let quantityExpences = document.querySelectorAll('.expenses-items').length - 1;
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
let checkAbilityOsStart = function() {
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
            let selectIndex = this.options[this.selectedIndex].value;
            if (selectIndex === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
                console.log('selectIndex: ', depositPercent.value);
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