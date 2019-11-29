'use strict';

const canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');

const angle = (degree = 360) => { //по умолчанию круг
    let radians = (Math.PI / 180) * degree;
    return radians;
}

//1 круг - синий
ctx.beginPath();
ctx.moveTo(75, 50); //идем в точку (центр)
ctx.arc(50, 50, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#0088f8';
ctx.stroke();
ctx.closePath();

//2 круг - желтый
ctx.beginPath();
ctx.moveTo(100, 75); //идем в точку (центр)
ctx.arc(75, 75, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#faf600';
ctx.stroke();
ctx.closePath();

//3 круг - черный
ctx.beginPath();
ctx.moveTo(135, 50); //идем в точку (центр)
ctx.arc(110, 50, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.closePath();

///5 круг - красный
ctx.beginPath();
ctx.moveTo(195, 50); //идем в точку (центр)
ctx.arc(170, 50, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();

//4 круг - зеленый
ctx.beginPath();
ctx.moveTo(160, 75); //идем в точку (центр)
ctx.arc(135, 75, 25, 0, angle(), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();


//вставим разрывы - пересечения
/*синий*/
ctx.beginPath();
ctx.moveTo(77, 50); //идем в точку (центр)
ctx.arc(50, 50, 25, -0.04, angle(80), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#0088f8';
ctx.stroke();
ctx.closePath();

//круг - желтый
ctx.beginPath();
ctx.moveTo(100, 75); //идем в точку (центр)
ctx.arc(75, 75, 25, 0, angle(280), true) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#faf600';
ctx.stroke();
ctx.closePath();
///круг - черный
ctx.beginPath();
ctx.moveTo(135, 50); //идем в точку (центр)
ctx.arc(110, 50, 25, -0.2, angle(160), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.closePath();
//круг - зеленый
ctx.beginPath();
ctx.moveTo(160, 75); //идем в точку (центр)
ctx.arc(135, 75, 25, -0.2, angle(200), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

///5 круг - красный
ctx.beginPath();
ctx.moveTo(195, 50); //идем в точку (центр)
ctx.arc(170, 50, 25, 0, angle(140), false) // (x,y, радиус, угол нач отрисовки дуги(0 = "15мин"), угол кон отрисовки, против час.стрелки или по)
ctx.lineWidth = '5';
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();