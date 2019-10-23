'use script';
/*
//РЕКУРСИЯ - вызов функции из самой себе
function changeTires(snowTires) {

    //демонтаж, разбортовка, забортовка, давление, 
    //балансировка, монтаж
    
    snowTires--;
    console.log('snowTires: ', snowTires);
    if (snowTires > 0) {
        changeTires(snowTires);
    }
}

changeTires(4);
*/
//ЦИКЛЫ

let n = 1;
/*
while (n < 5) {
   console.log('n: ', n);
    n++;
}*/
/*
//первая проходит обяхательно
do {
    console.log('n: ', n);
    n++;
}
while (n < 5);*/

for (i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log('i: ', i);

}