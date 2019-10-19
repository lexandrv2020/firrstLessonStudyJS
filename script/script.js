let money = 149000,
    income = '140000',
    addExpenses = 'Аренда квартиры, банковский кредит, одежда, питание, обучение, расходы на семью',
    deposit = false,
    mission = 2500000,
    period = 72;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период месяцев: ' + period);
console.log('Цель заработать: ' + mission + ' руб.');
console.log(addExpenses.toLowerCase().split(', '));

let budgetMonth = (money + Number(income)); //бюджет на месяц
let budgetDay = budgetMonth / 30; //бюджет на день
let restOfDivision = (budgetMonth % 30); //остаток от деления

//выводим в консоль дневной заработок и остаток от деления 'доход в месяц' / 'количество дней' 
console.log(budgetDay.toFixed(2));
console.log(restOfDivision);