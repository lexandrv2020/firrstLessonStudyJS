let num = 266219;

numToStr = num.toString(); //преобразовали число в строку
strToArr = numToStr.split([]); //преобразовали строку в массив по символу

let reducer = (acc, currentValue) => acc * currentValue; //создаем функцию произведения элементов массива
multiNum = strToArr.reduce(reducer); //исполняем функцию 

newNumber = multiNum ** 3; //возводим результат произведения в степень 3
console.log(newNumber); //в консоль результат
alert(String(newNumber).substr(0, 2)); //вывели на экран первые 2 цифры результата