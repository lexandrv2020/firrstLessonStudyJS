'use strict';

let elem = document.getElementById('a'),
    btn = document.getElementById('сhange'),
    res = document.getElementById('res');

const reverseString = (str) => {
    let toArr = str.split('');
    let reverseArr = toArr.reverse();
    let toStr = reverseArr.join('');
    return toStr;
}

function getResult() {
    let strElem = '' + elem.value;
    let strLenght = strElem.length;
    let palin = '';
    let revstr = '';
    let lenRev = 0;
    for (let a = 0; a < strLenght; a++) {
        for (let z = 0; z < strLenght; z++) {
            let substr = strElem.substring(a, z);
            if (substr.length > 1) {
                revstr = reverseString(substr);
                let lenRevstr = revstr.length;
                if (revstr === substr && lenRevstr > lenRev) {
                    //console.log('revstr === substr: ', revstr);
                    palin = substr;
                    lenRev = lenRevstr;
                }
            }
        }

    }
    res.value = palin;
}



btn.addEventListener('click', getResult);