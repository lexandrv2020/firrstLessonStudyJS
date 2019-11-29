'use strict';

const canvas = document.getElementById('cnv');

const canvas2 = document.getElementById('cnv2');
const ctx2 = canvas2.getContext('2d');
//console.dir(canvas);
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');
color.addEventListener('input', () => ctx.strokeStyle = color.value);
//заливка
//ctx.fillStyle = 'green'; 
//ctx.fillStyle = 'rgba(50, 255, 50, 0.4)'; //заливка 
//ctx.fillStyle = 'hsl(200, 70%,80%)'; //заливка 

//градиент
/*
const gradient = ctx.createLinearGradient(20, 20, 120, 120); //(координаты)
gradient.addColorStop(0, 'hsl(250,70%,70%)'); //первый цвет
gradient.addColorStop(1, 'hsl(0,70%,70%)'); //следующий цвет

const gradient = ctx.createRadialGradient(70, 70, 0, 70, 70, 70); //(координаты: x,y,радиус,координаты )
gradient.addColorStop(0, 'hsl(250,70%,70%)'); //первый цвет
gradient.addColorStop(1, 'hsl(0,70%,70%)'); //следующий цвет

console.log(ctx);
console.log(gradient);
//фигура
//ctx.fillStyle = gradient;  //закрашенный прямоугольник
ctx.fillRect(20, 20, 100, 100); //закрашенный прямоугольник



ctx.strokeStyle = 'rgb(50,155,50)'; //стиль обводки
ctx.strokeRect(10, 10, 120, 120); //незакрашенный прямоугольник



ctx.clearRect(45, 45, 50, 50); //прозрачный квадрат
*/

/*ctx.beginPath();
ctx.moveTo(150, 0); //устанавливаем нач точку (x.y)
ctx.lineTo(175, 125); //перемещаемся до координат (x,y)
ctx.lineTo(300, 150); //перемещаемся до координат (x,y)
ctx.lineTo(175, 175); //перемещаемся до координат (x,y)
ctx.lineTo(150, 300); //перемещаемся до координат (x,y)
ctx.lineTo(125, 175); //перемещаемся до координат (x,y)
ctx.lineTo(0, 150); //перемещаемся до координат (x,y)
ctx.lineTo(125, 125); //перемещаемся до координат (x,y)
ctx.lineTo(150, 0); //перемещаемся до координат (x,y)
ctx.stroke();
*/

ctx.beginPath();
ctx.moveTo(175, 125); //устанавливаем нач точку (x.y)
ctx.lineTo(300, 150); //перемещаемся до координат (x,y)
ctx.lineTo(175, 175); //перемещаемся до координат (x,y)
ctx.moveTo(125, 175); //перемещаемся до координат (x,y)
ctx.lineTo(0, 150); //перемещаемся до координат (x,y)
ctx.lineTo(125, 125); //перемещаемся до координат (x,y)

//ОКРУЖНОСТИ И ДУГИ

const angle = (degree = 360) => { //по умолчанию круг
    let radians = (Math.PI / 180) * degree;
    return radians;
}

ctx.moveTo(150, 150); //идем в точку (центр)
ctx.moveTo(175, 150); //идем в точку
//ctx.arc(150, 150, 25, 0, Math.PI * 2, false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.arc(150, 150, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
    //ctx.arc(150, 150, 25, 0, angel(270), true) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
    //Math.PI = 180 градусов
    //ширина линий px
ctx.lineWidth = '2';
//ctx.strokeStyle = '#008800';

//Math.PI = 180 градусов
//ширина линий px
ctx.moveTo(125, 125);
// 1-я точка: x,y; 2-я точка: x,y; радиус
ctx.arcTo(150, 100, 175, 125, 30);
ctx.lineTo(175, 125);

ctx.stroke();


ctx.shadowOffsetX = 5; //тень по Х
ctx.shadowOffsetY = 5; //тень по У
ctx.shadowBlur = 7; // размытость
ctx.shadowColor = 'red'; //цвет тени

ctx.font = '30px Sans-Serif';
ctx.fillStyle = 'green'; //цвет  

ctx.save(); //сохраняем свойство (из выше)

ctx.fillText('JavaScript', 40, 50, 200) //text, x, y, ширина блока текста (максимальная)

ctx.shadowColor = 'orange'; //цвет тени
ctx.fillStyle = 'blue'; //цвет 
ctx.rotate(angle(10)); //повернуть
ctx.fillText('GloAcademy', 200, 50, 200) //text, x, y, ширина блока текста (максимальная)

ctx.restore(); //восстанавливаем свойство (из выше)

ctx.fillText('Freelance', 125, 100, 200) //text, x, y, ширина блока текста (максимальная)


//animation
let tick = 0;

const animation = () => {
    ctx2.clearRect(0, 0, canvas2.clientWidth, canvas2.height);
    //console.log('canvas2.clientWidth, canvas2.height: ', canvas2.clientWidth, canvas2.height);
    //debugger;
    ctx2.fillStyle = 'green'
    ctx2.fillRect(tick, tick, 50, 50);
    tick++;
    //console.log(tick);
    if (tick < 300) {
        requestAnimationFrame(animation);
    } else {
        reverse();
    }
};

const reverse = () => {
    ctx2.clearRect(0, 0, canvas2.clientWidth, canvas2.height);
    //debugger;
    ctx2.fillStyle = 'green'
    ctx2.fillRect(tick, tick, 50, 50);
    tick--;
    //console.log(tick);
    if (tick > 0) {
        requestAnimationFrame(reverse);
    } else {
        animation();
    }


};
animation();

//paint

canvas.addEventListener('mousemove', (event) => {
    const x = event.offsetX,
        y = event.offsetY,
        mx = event.movementX,
        my = event.movementY;

    if (event.buttons > 0) { //если нажата

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - mx, y - my);
        ctx.stroke();

        ctx.closePath();
    }
})