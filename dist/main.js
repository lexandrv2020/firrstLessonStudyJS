!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=e=>{let t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),i=document.querySelector(".timer-numbers");setInterval((function(){let r=(new Date).getTime(),s=Math.floor((e-r)/1e3),a=Math.floor(s%60),l=Math.floor(s/60%60),c=Math.floor(s/60/60%24);!function(e,r,s,a=!1){t.textContent=s<10?"0"+s:s,n.textContent=r<10?"0"+r:r,o.textContent=e<10?"0"+e:e,a&&(i.style.color="#7d0f0f",i.style.fontWeight="700")}(a=a<0?0:a,l=l<0?0:l,c=c<0?0:c,s<=0)}),1e3)};var i=()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector("body"),o=t.querySelectorAll("ul>li"),i=document.querySelectorAll("a"),r=e=>{t.classList.toggle("active-menu")},s=e=>{let n=document.querySelector(".active-menu");!e.target.classList.contains("active-menu")&&!!n&&"img"!==e.target.localName&&t.classList.toggle("active-menu")},a=(e,t)=>"actionMenu"===e?r:"mouseclick"===e?s:((e,t)=>{e.preventDefault();const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})})(e,t);e.addEventListener("click",r),o.forEach(e=>{e.addEventListener("click",a("actionMenu",e))}),n.addEventListener("click",a("mouseclick",n)),i.forEach(e=>{e.classList.contains("close-btn")?e.addEventListener("click",a("actionMenu",e)):(e.closest("li")||e.closest("main"))&&e.addEventListener("click",(function(t){a(t,e)}))})};var r=()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");function o(){if(document.documentElement.clientWidth,document.documentElement.clientWidth>768){e.style.opacity="0",e.style.display="block";let t=0,n=setInterval(()=>{let o=t/100;e.style.opacity=""+o,100===++t&&clearInterval(n)},30)}else e.style.display="block"}e.classList.add("showBlock");let i=function(e){return function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2}}((function(e){for(let t=0,n=1;;t+=n,n/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)}));function r(){!function({timing:e,draw:t,duration:n}){let o=performance.now();requestAnimationFrame((function i(r){let s=(r-o)/n;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(i)}))}({duration:3e3,timing:i,draw:function(e){t.style.left=500*e+"px"}})}n.forEach(e=>{e.addEventListener("click",o),e.addEventListener("click",r)}),e.addEventListener("click",t=>{let n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".popup-content"))||(e.style.display="none")})};var s=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let o=e.target;(o=o.closest(".service-header-tab"))&&t.forEach((e,i)=>{e===o&&(e=>{for(let o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))})(i)})})};var a=()=>{let e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots"));t.forEach((e,t)=>{let o=document.createElement("li");0===t?o.setAttribute("class","dot dot-active"):o.setAttribute("class","dot"),n.appendChild(o)});let o=document.querySelectorAll(".dot");const i=(e,t,n)=>{e[t].classList.remove(n)},r=(e,t,n)=>{e[t].classList.add(n)};let s,a=0;const l=()=>{i(t,a,"portfolio-item-active"),i(o,a,"dot-active"),++a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(o,a,"dot-active")},c=(e=1500)=>{s=setInterval(l,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(i(t,a,"portfolio-item-active"),i(o,a,"dot-active"),n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&o.forEach((e,t)=>{e===n&&(a=t)}),a>=t.length&&(a=0),a<0&&(a=t.length-1),r(t,a,"portfolio-item-active"),r(o,a,"dot-active"))}),e.addEventListener("mouseover",e=>{e.target.matches(".portfolio-btn, .dot ")&&clearInterval(s)}),e.addEventListener("mouseout",e=>{e.target.matches(".portfolio-btn, .dot")&&c()}),c(1500)};var l=()=>{document.querySelectorAll(".command__photo").forEach(e=>{e.addEventListener("mouseenter",e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}),e.addEventListener("mouseleave",e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t})})};var c=(e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),i=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),s=document.getElementById("total"),a=document.querySelectorAll(".calc-item");a.forEach(e=>{"1"===e.getAttribute("min")&&e.removeAttribute("type")}),a.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9]/,"")})});t.addEventListener("change",t=>{const a=t.target;console.log(t),console.log(a),(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,l=1;const c=+n.options[n.selectedIndex].value,d=+o.value;if(i.value>1&&(a+=(i.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),c&&d){t=e*c*d*a*l;let n=0,o=setInterval((function(){s.textContent=Math.min(n+=25,t),n>t&&clearInterval(o)}),1)}})()})};var d=class{constructor({main:e,wrap:t,next:n,prev:o,infinity:i=!1,position:r=0,slidesToShow:s=5,responsive:a=[]}){e&&t||console.warn('slider-carusel: Необходимо 2 свойства: "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.prev=document.querySelector(o),this.next=document.querySelector(n),this.slidesToShow=s,this.options={position:r,infinity:i,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=a}init(){this.addGloClasses(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responseInit&&this.responseInit()}addGloClasses(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){const e=document.createElement("style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n                .glo-slider{\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap{\n                    display: flex !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                }\n                .glo-slider__item{\n                    display: flex !important;\n                    align-items: center  !important;\n                    justify-content: center  !important;\n                    flex: 0 0 ${this.options.widthSlide}% !important;\n                    margin: auto 0 !important;\n                    }\n                \n                .glo-slider__prev,\n                .glo-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                }\n                .glo-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .glo-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .glo-slider__next:hover,\n                .glo-slider__next:focus,\n                .glo-slider__prev:hover,\n                .glo-slider__prev:focus{\n                    background: transparent;\n                    outline: transparent;\n                    }\n                    #statusDone, \n                    #statusError{\n                        position:relative;\n                        width:58px;\n                        height:58px;\n                        margin: auto;\n                    }\n                    \n                    #circularG{\n                        position:relative;\n                        width:58px;\n                        height:58px;\n                        margin: auto;\n                    }\n                    .circularG{\n                        position:absolute;\n                        background-color:rgb(0,0,0);\n                        width:14px;\n                        height:14px;\n                        border-radius:9px;\n                            -moz-border-radius:9px;\n                        animation-name:bounce_circularG;\n                            -moz-animation-name:bounce_circularG;\n                        animation-duration:1.1s;\n                            -moz-animation-duration:1.1s;\n                        animation-iteration-count:infinite;\n                            -moz-animation-iteration-count:infinite;\n                        animation-direction:normal;\n                            -moz-animation-direction:normal;\n                    }\n                    \n                    #circularG_1{\n                        left:0;\n                        top:23px;\n                        animation-delay:0.41s;\n                            -moz-animation-delay:0.41s;\n                    }\n                    \n                    #circularG_2{\n                        left:6px;\n                        top:6px;\n                        animation-delay:0.55s;\n                            -moz-animation-delay:0.55s;\n                    }\n                    \n                    #circularG_3{\n                        top:0;\n                        left:23px;\n                        animation-delay:0.69s;\n                            -moz-animation-delay:0.69s;\n                    }\n                    \n                    #circularG_4{\n                        right:6px;\n                        top:6px;\n                        animation-delay:0.83s;\n                            -moz-animation-delay:0.83s;\n                    }\n                    \n                    #circularG_5{\n                        right:0;\n                        top:23px;\n                        animation-delay:0.97s;\n                            -moz-animation-delay:0.97s;\n                    }\n                    \n                    #circularG_6{\n                        right:6px;\n                        bottom:6px;\n                        animation-delay:1.1s;\n                            -moz-animation-delay:1.1s;\n                    }\n                    \n                    #circularG_7{\n                        left:23px;\n                        bottom:0;\n                        animation-delay:1.24s;\n                            -moz-animation-delay:1.24s;\n                    }\n                    \n                    #circularG_8{\n                        left:6px;\n                        bottom:6px;\n                        animation-delay:1.38s;\n                            -moz-animation-delay:1.38s;\n                    }\n                    \n                    @keyframes bounce_circularG{\n                        0%{\n                            transform:scale(1);\n                        }\n                        100%{\n                            transform:scale(.3);\n                        }\n                    }\n                    \n                    @-moz-keyframes bounce_circularG{\n                        0%{\n                            -moz-transform:scale(1);\n                        }\n                        100%{\n                            -moz-transform:scale(.3);\n                        }\n                    }\n                `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}};var m=()=>{const e=document.querySelectorAll("form");e.forEach(e=>{const t=document.getElementById(e.id),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),m=document.createElement("div"),u=document.createElement("img"),p=document.createElement("img");o.setAttribute("id","circularG"),i.setAttribute("id","circularG_1"),r.setAttribute("id","circularG_2"),s.setAttribute("id","circularG_3"),a.setAttribute("id","circularG_4"),l.setAttribute("id","circularG_5"),c.setAttribute("id","circularG_6"),d.setAttribute("id","circularG_7"),m.setAttribute("id","circularG_8"),i.setAttribute("class","circularG"),r.setAttribute("class","circularG"),s.setAttribute("class","circularG"),a.setAttribute("class","circularG"),l.setAttribute("class","circularG"),c.setAttribute("class","circularG"),d.setAttribute("class","circularG"),m.setAttribute("class","circularG"),u.setAttribute("id","statusDone"),p.setAttribute("id","statusError"),u.setAttribute("src","./images/statuses/mark-done.png"),p.setAttribute("src","./images/statuses/mark-warning.png"),o.appendChild(i),o.appendChild(r),o.appendChild(s),o.appendChild(a),o.appendChild(l),o.appendChild(c),o.appendChild(d),o.appendChild(m),o.style.display="none",p.style.display="none",u.style.display="none",o.style.display="none",n.style.cssText="font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);";const h=t.querySelectorAll("input");h.forEach(e=>{!e.name||"user_name"!==e.name&&"user_email"!==e.name&&"user_phone"!==e.name||e.removeAttribute("type")}),h.forEach(e=>{e.addEventListener("input",()=>{"user_name"===e.name||"user_message"===e.name?e.value=e.value.replace(/[^а-яА-Я\s]/,""):"user_phone"===e.name&&(e.value=e.value.replace(/[^0-9\\+]/,""))})}),t.appendChild(n),t.appendChild(o),t.appendChild(p),t.appendChild(u),t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(n),t.appendChild(o),t.appendChild(p),t.appendChild(u),o.style.display="block",p.style.display="none",u.style.display="none",n.textContent="Выполняется отправка....";const i=new FormData(t);let r={};i.forEach((e,t)=>{r[t]=e});f(r).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Спасибо! Мы скоро с Вами свяжемся!",t.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success"),u.style.display="block",p.style.display="none"}),o.style.display="none"}).catch(e=>{console.error(e),n.textContent="Спасибо! Мы скоро с Вами свяжемся!",t.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success"),u.style.display="block",p.style.display="none"}),o.style.display="none"})});const f=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})};var u=class{constructor({selector:e,pattern:t={},method:n}){this.form=document.querySelector(e),this.pattern=t,this.method=n,this.elementsForm=[...this.form.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach(e=>e.addEventListener("change",this.checkIt.bind(this))),this.form.addEventListener("submit",e=>{this.elementsForm.forEach(e=>this.checkIt({target:e})),this.error.size&&e.preventDefault()})}isValid(e){const t={notEmpty:e=>""!==e.value,pattern:(e,t)=>t.test(e.value)};if(this.method){let n=e.id.replace(/[123]/,"");const o=this.method[n];if(o)return o.every(n=>t[n[0]](e,this.pattern[n[1]]))}else console.warn("Необходимо передать id полей ввода и методы проверки эти полей!");return!0}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}showError(e){if(e.classList.remove("success"),e.classList.add("error"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error"))return;const t=document.createElement("div");t.classList.add("validator-error"),t.textContent="Ошибка в этом поле","form1-email"!==e.id&&"form1-name"!==e.id&&"form1-phone"!==e.id||(console.log("elem.id: ",e.id),t.style.marginTop="-10px"),e.insertAdjacentElement("afterend",t)}showSuccess(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}applyStyle(){const e=document.createElement("style");e.textContent="\n            input.success {\n                border: 2px solid green !important;\n                \n            }\n            input.error {\n                border: 2px solid red !important;\n            }\n            .validator-error-form1{\n                font-size: 12px;\n                font-family: sans-serif;\n                margin: -20px;\n                color: red\n            }\n            .validator-error{\n                font-size: 12px;\n                font-family: sans-serif;\n                margin: 0px;\n                color: red\n            }\n        ",document.head.appendChild(e)}setPattern(){this.pattern["form-phone"]||(this.pattern["form-phone"]=/^\+?[78]([-()]*\d){10}$/),this.pattern["form-email"]||(this.pattern["form-email"]=/^\w+(\.\w+)*@\w+\.\w{2,}$/),this.pattern["form-name"]||(this.pattern["form-name"]=/^[А-Яа-я ]+$/),this.pattern["form-message"]||(this.pattern["form-message"]=/^[А-Яа-я ]+$/)}};let p=new Date;p.setDate(p.getDate()+1),p.setHours(0,0,0,0),o(p),i(),r(),s(),a(),l();c(100);new d({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),m();new u({selector:"#form1",pattern:{zip:/\d{5,6}/},method:{"form-phone":[["notEmpty"],["pattern","form-phone"]],"form-name":[["notEmpty"],["pattern","form-name"]],"form-message":[["notEmpty"],["pattern","form-message"]],"form-email":[["notEmpty"],["pattern","form-email"]]}}).init();new u({selector:"#form2",pattern:{zip:/\d{5,6}/},method:{"form-phone":[["notEmpty"],["pattern","form-phone"]],"form-name":[["notEmpty"],["pattern","form-name"]],"form-message":[["notEmpty"],["pattern","form-message"]],"form-email":[["notEmpty"],["pattern","form-email"]]}}).init();new u({selector:"#form3",pattern:{zip:/\d{5,6}/},method:{"form-phone":[["notEmpty"],["pattern","form-phone"]],"form-name":[["notEmpty"],["pattern","form-name"]],"form-message":[["notEmpty"],["pattern","form-message"]],"form-email":[["notEmpty"],["pattern","form-email"]]}}).init()}]);