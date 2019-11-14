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
    let strElem = '' + elem.value.replace(/\s/g, '');;
    let strLenght = strElem.length;
    let palin = '';
    let revstr = '';
    let lenRev = 0;
    for (let a = 0; a < strLenght; a++) {
        for (let z = 0; z <= strLenght; z++) {
            let substr = strElem.substring(a, z);
            console.log('substr: ', substr);
            if (substr.length > 1) {
                revstr = reverseString(substr);
                let lenRevstr = revstr.length;
                if (revstr.toLowerCase() === substr.toLowerCase() && lenRevstr > lenRev) {
                    //palin = substr;    
                    palin = substr.toLowerCase();
                    lenRev = lenRevstr;
                }
            }
        }

    }
    res.value = palin;
}



btn.addEventListener('click', getResult);
/*
var sun = new Image();
var moon = new Image();
var earth = new Image();

function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();*/