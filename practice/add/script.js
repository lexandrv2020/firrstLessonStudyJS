'use strict';

let btnStart = document.querySelector('.start'),
    btnCancel = document.querySelector('.cancel'),
    mosq = document.querySelector('#mosq'),
    count = 0,
    flying = false;

let moveInterval;

let animeMosq = function() {

    moveInterval = requestAnimationFrame(animeMosq);

    count++;
    if (count < 500) {
        mosq.style.right = count + 'px';
    } else {
        cancelAnimationFrame(moveInterval);
    }
}

let resetAll = function() {
    count = 0;
    mosq.style.right = count + 'px';
    flying = false;
    cancelAnimationFrame(moveInterval);
}

function startMove() {
    if (flying === false) {
        moveInterval = requestAnimationFrame(animeMosq);
        flying = true;
    } else {
        flying = false;
        cancelAnimationFrame(moveInterval);
    }

}

btnStart.addEventListener('click', startMove);
btnCancel.addEventListener('click', resetAll);