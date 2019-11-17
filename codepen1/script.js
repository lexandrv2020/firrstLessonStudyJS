//1.
let div = document.getElementById('task1'),
    textDiv = div.innerHTML,
    body = document.querySelector('body'),
    bodyInner = body.innerHTML;
//console.log('bodyInner: ', bodyInner);

let func = textDiv.replace(/функци./g, result => {
    newResult = `<strong>функция</strong>`;
    return newResult;
});
div.innerHTML = func;

//2.
let div2 = document.getElementById('task2'),
    textDiv2 = div2.innerHTML;
let dates = textDiv2.replace(/\d\d:\d\d/g, result => {
    newResult = `<b>${result}</b>`;
    return newResult;
});
div2.innerHTML = dates;

//3.
let mark1 = document.getElementById('task1'),
    textMark1 = mark1.innerHTML;
let marks_div1 = textMark1.replace(/(«.*» |«.*».)/g, result => {
    newResult = `<mark> ${result} </mark>`;
    //   console.log('result: ', result);
    return newResult;
});
mark1.innerHTML = marks_div1;

let mark2 = document.getElementById('task2'),
    textMark2 = mark2.innerHTML;
let marks_div2 = textMark2.replace(/«.*»|".*"/g, result => {
    newResult = `<mark> ${result} </mark>`;
    //   console.log('result: ', result);
    return newResult;
});
mark2.innerHTML = marks_div2;

//4. http://site.ru
let site1 = document.getElementById('task1'),
    textSite1 = site1.innerHTML;
let site_div1 = textSite1.replace(/(http:\/\/|https:\/\/)(\w+)(.ru|.com)$/g, (result, val1, val2, val3) => {
    newResult = `<a href="${result}">${val2}${val3}</a>`;
    return newResult;
});
site1.innerHTML = site_div1;

let site2 = document.getElementById('task2'),
    textSite2 = site2.innerHTML;
let site_div2 = textSite2.replace(/(http:\/\/|https:\/\/)(\w+)(.ru|.com)/g, (result, val1, val2, val3) => {
    newResult = `<a href="${result}">${val2}${val3}</a>`;
    return newResult;
});
site2.innerHTML = site_div2;

//5. #ABCDEF
let color = bodyInner.replace(/#(\S{6}|\S{3})/gi, (result) => {
    console.log('color: ', result);
});

//6. http://site.ru
let site4 = document.getElementById('task2'),
    textSite4 = site4.innerHTML;
console.log('site4: ', site4);

let site_div4 = textSite4.replace(/http:\/\/(www.(\S*).ru)(\S*)/g, (result, val2, val3) => {
    console.log('result4: ', result, val2, val3);
    newResult = `<a href="${result}">${val2}</a>`;
    return newResult;
});
site4.innerHTML = site_div4;