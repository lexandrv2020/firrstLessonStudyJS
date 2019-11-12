const persons = {
    'Уитни Хьюстон': { born: 1963, died: 2012 },
    'Оскар Уайльд': { born: 1854, died: 1900 },
    'Коко Шанель': { born: 1869, died: 1971 },
    'Джими Хендрикс': { born: 1942, died: 1970 },
};

let ages = (persons) => {
    let personAge = {};
    for (let man in persons) {
        personAge[man] = persons[man].died - persons[man].born;
    }
    return personAge;
}
console.log(ages(persons));