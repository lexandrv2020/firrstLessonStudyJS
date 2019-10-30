'use strict';
//(a)
let buttonCalc = document.getElementById('start');
//(b)
let buttonIncome_add = document.getElementsByTagName('button')[0],
    buttonExpenses_add = document.getElementsByTagName('button')[1];
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
let sallary = document.querySelector('.salary-amount'),
    income_title = document.querySelector('.income-title'),
    income_amount = document.querySelector('.income-amount'),
    expenses_title = document.querySelector('.expenses-title'),
    expenses_amount = document.querySelector('.expenses-amount'),
    additional_expenses_item = document.querySelector('.additional_expenses-item'),
    deposit_amount = document.querySelector('.deposit-amount'),
    deposit_percent = document.querySelector('.deposit-percent'),
    target_amount = document.querySelector('.target-amount'),
    period_select = document.querySelector('.period-select'),
    period_amount = document.querySelector('.period-amount');