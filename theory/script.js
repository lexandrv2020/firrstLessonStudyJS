'use strict';
/*
/////////////////////////////////////////////////////////
///     ОДНОПОТОЧНОСТЬ JS            /////////////////////////////////
/////////////////////////////////////////////////////////
*/
/*
const mult = (x, y) => {
    return x * y;
};

const square = (num) => {
    return mult(num, num);
};

const showSquare = (n) => {
    const res = square(n);
    console.log('res: ', res);
};
debugger;
showSquare(2);
*/
/*const foo1 = () => {
    console.log('Загрузили стиральную машину белье');
    foo2(foo3);
    foo4();
}

const foo2 = (callback) => {
    setTimeout(() => {
        console.log('...Закончиласьт стирка');
        callback();
    }, 5000); //JS загрузил операцию в BOM
}

const foo3 = () => {
    console.log('Развешать белье');
}

const foo4 = () => {
    setTimeout(() => {
        console.log('помыли пол');
    }, 3000);
}

foo1();
*/

// либо   >>>>>>>>>>>>>>>>>>>>> call stack (нет таймера - d dsgjkytybt) >>> очередь задач 

// либо   >>>>>>>>>>>>>>>>>>>>> call stack (есть таймер)> web API (отложенные задачи) > очередь задач > call stack (timer = 0)
/*
console.log('a');
setTimeout(() => {
    console.log(1);
}, 0);

console.log('b');
setTimeout(() => {
    console.log(2);
}, 0);

console.log('c');
setTimeout(() => {
    console.log(3);
}, 0);

console.log('d');
setTimeout(() => {
    console.log(4);
}, 0);

//a b c d 1 2 3 4

*/
//////////////////////////////////////////////////////////////////////////////////////////
///             PROMISES                    //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const doUnivercity = (docs) => {
    const promise = new Promise((resolve, reject) => {
        if (docs) {
            console.log('Проходит рассморение документов');
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    let result = 'Принят в институт';
                    resolve(result); //.then(*, x)
                } else {
                    reject('Отказано'); //.then(x, *)
                }
            }, 3000)
        } else {
            reject('Отказано, не хватает документов');
        };
    });
    return promise;
};

const doArmy = (docs) => {
    const promise = new Promise((resolve, reject) => {
        if (docs) {
            console.log('Военком думает....');
            setTimeout(() => {
                if (docs === 'Принят в институт') {
                    resolve('Отсрочка...');
                    console.log('Отсрочка...');
                } else {
                    reject('Повестка...');

                }
            }, 1000);
        } else {
            reject('Повестка...');
        };
    });
    return promise;
};

const doWork = (docs) => {
    return new Promise((resolve, reject) => { //можно без переменной сразу на возврат
        console.log('Директор Google думает');
        console.log('Предоставил документы от военкомата: ' + docs);
        setTimeout(() => {
            if (Math.random() > 0.3) {
                let result = 'Приглашен на собеседование в Google в Понедельник';
                console.log(result);
                resolve(result)
            } else {
                reject('Отказано, иди в Яндекс');
            }
        }, 1000)
    });
}

const dance = (docs) => {
    console.log('Потанцевали...');
    //  return Promise.reject(docs); //по умолчанию ОТРИЦАТЕЛЬНЫЙ ответ отправляем
    //  return Promise.resolve(docs); //по умолчанию ПОЛОЖИТЕЛЬНЫЙ ответ отправляем
    return docs; //(в нашем случае - положительный ответ (resolve))
}

const documents = ['Паспорт', 'Аттестат'];
/*
doUnivercity(documents, (result) => {
    console.log('result: ', result);
    doArmy(result,
        (militaryDocs) => {
            console.log('militaryDocs: ', militaryDocs);
            doWork(militaryDocs,
                (data) => { console.log(data) },
                (reason) => { console.error(reason) }
            );
        },
        (reason) => {
            console.error(reason);
        });
}, (reason) => {
    console.error(reason);
});
*/


//у Promise есть метод then -последствия обещания (если выполнено / если не выполнено)
doUnivercity(documents)
    .then( //цепочка then
        (result) => { //resolve
            console.log('result: ', result);
            return result;
        },
        (reason) => { //reject
            console.error(reason);
        },
    )
    //цепочка then - выполняется при успешном предыдущем
    .then(doArmy)
    .then(dance)
    .then(doWork)
    //    .catch = (reason) => {
    //        console.log(reason)
    .catch(reason => console.error(reason))
    .finally(() => console.warn('Выполнится в ЛЮБОМ случае')) //выполяется в любом случае!! (даже после да/нет в промисах)
;

///!!!!!!!!!!!!!! 
const doWorking = (company) => {
    return new Promise((resolve, reject) => {
        const time = Math.ceil(Math.random() * 5000);
        setTimeout(() => {
            if (time % 5) {
                console.log('company: ', company);
                resolve(company);
            } else {
                reject(company);
            }
        }, time);
    })
}

const hh = doWorking('HH'),
    ya = doWorking('Yandex'),
    ozon = doWorking('Ozon'),
    pikabu = doWorking('Pikabu'),
    politics = doWorking('Гос.дума');

///!!!!!!!!!!!!!!  если нужно дождаться выполнения ВСЕХ промисов в ПОЛОЖИТЕЛЬНЫЕ  
Promise.all([hh, ya, ozon, pikabu, politics]) //в
    .then(result => console.log(`1.Тебя пригласили на собеседование в: ${result}`)) //список всех отработанных промисов
    .catch(result => console.error(`1. Компания ${result} нам отказада`));

///!!!!!!!!!!!!!!  если нужно дождаться выполнения ПЕРВОГО положительного промиса 
// далее прерывается выполнение 
Promise.race([hh, ya, ozon, pikabu, politics]) //в
    .then(result => console.log(`2.Тебя пригласили на собеседование в: ${result}`)) //список всех отработанных промисов
    .catch(result => console.error(`2.Компания ${result} нам отказада`));