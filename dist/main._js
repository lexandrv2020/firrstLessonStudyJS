!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");function i(){if(document.documentElement.clientWidth,document.documentElement.clientWidth>768){e.style.opacity="0",e.style.display="block";let t=0,n=setInterval(()=>{let i=t/100;e.style.opacity=""+i,100===++t&&clearInterval(n)},30)}else e.style.display="block"}e.classList.add("showBlock");let o=function(e){return function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2}}((function(e){for(let t=0,n=1;;t+=n,n/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)}));function r(){!function({timing:e,draw:t,duration:n}){let i=performance.now();requestAnimationFrame((function o(r){let s=(r-i)/n;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(o)}))}({duration:3e3,timing:o,draw:function(e){t.style.left=500*e+"px"}})}n.forEach(e=>{e.addEventListener("click",i),e.addEventListener("click",r)}),e.addEventListener("click",t=>{let n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".popup-content"))||(e.style.display="none")})};var o=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let i=e.target;(i=i.closest(".service-header-tab"))&&t.forEach((e,o)=>{e===i&&(e=>{for(let i=0;i<n.length;i++)e===i?(t[i].classList.add("active"),n[i].classList.remove("d-none")):(t[i].classList.remove("active"),n[i].classList.add("d-none"))})(o)})})};var r=()=>{let e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots"));t.forEach((e,t)=>{let i=document.createElement("li");0===t?i.setAttribute("class","dot dot-active"):i.setAttribute("class","dot"),n.appendChild(i)});let i=document.querySelectorAll(".dot");const o=(e,t,n)=>{e[t].classList.remove(n)},r=(e,t,n)=>{e[t].classList.add(n)};let s,a=0;const l=()=>{o(t,a,"portfolio-item-active"),o(i,a,"dot-active"),++a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(i,a,"dot-active")},c=(e=1500)=>{s=setInterval(l,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(o(t,a,"portfolio-item-active"),o(i,a,"dot-active"),n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&i.forEach((e,t)=>{e===n&&(a=t)}),a>=t.length&&(a=0),a<0&&(a=t.length-1),r(t,a,"portfolio-item-active"),r(i,a,"dot-active"))}),e.addEventListener("mouseover",e=>{e.target.matches(".portfolio-btn, .dot ")&&clearInterval(s)}),e.addEventListener("mouseout",e=>{e.target.matches(".portfolio-btn, .dot")&&c()}),c(1500)};var s=()=>{document.querySelectorAll(".command__photo").forEach(e=>{e.addEventListener("mouseenter",e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}),e.addEventListener("mouseleave",e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t})})};var a=(e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),i=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),s=document.getElementById("total"),a=document.querySelectorAll(".calc-item");a.forEach(e=>{"1"===e.getAttribute("min")&&e.removeAttribute("type")}),a.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9]/,"")})});t.addEventListener("change",t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,l=1;const c=+n.options[n.selectedIndex].value,d=+i.value;if(o.value>1&&(a+=(o.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),c&&d){t=e*c*d*a*l;let n=0,i=setInterval((function(){s.textContent=Math.min(n+=25,t),n>t&&clearInterval(i)}),1)}})()})};var l=class{constructor({main:e,wrap:t,next:n,prev:i,infinity:o=!1,position:r=0,slidesToShow:s=5,responsive:a=[]}){e&&t||console.warn('slider-carusel: Необходимо 2 свойства: "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.prev=document.querySelector(i),this.next=document.querySelector(n),this.slidesToShow=s,this.options={position:r,infinity:o,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=a}init(){this.addGloClasses(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responseInit&&this.responseInit()}addGloClasses(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){const e=document.createElement("style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n                .glo-slider{\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap{\n                    display: flex !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                }\n                .glo-slider__item{\n                    display: flex !important;\n                    align-items: center  !important;\n                    justify-content: center  !important;\n                    flex: 0 0 ${this.options.widthSlide}% !important;\n                    margin: auto 0 !important;\n                    }\n                \n                .glo-slider__prev,\n                .glo-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                }\n                .glo-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .glo-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .glo-slider__next:hover,\n                .glo-slider__next:focus,\n                .glo-slider__prev:hover,\n                .glo-slider__prev:focus{\n                    background: transparent;\n                    outline: transparent;\n                    }\n                    #statusDone, \n                    #statusError{\n                        position:relative;\n                        width:58px;\n                        height:58px;\n                        margin: auto;\n                    }\n                    \n                    #circularG{\n                        position:relative;\n                        width:58px;\n                        height:58px;\n                        margin: auto;\n                    }\n                    .circularG{\n                        position:absolute;\n                        background-color:rgb(0,0,0);\n                        width:14px;\n                        height:14px;\n                        border-radius:9px;\n                            -moz-border-radius:9px;\n                        animation-name:bounce_circularG;\n                            -moz-animation-name:bounce_circularG;\n                        animation-duration:1.1s;\n                            -moz-animation-duration:1.1s;\n                        animation-iteration-count:infinite;\n                            -moz-animation-iteration-count:infinite;\n                        animation-direction:normal;\n                            -moz-animation-direction:normal;\n                    }\n                    \n                    #circularG_1{\n                        left:0;\n                        top:23px;\n                        animation-delay:0.41s;\n                            -moz-animation-delay:0.41s;\n                    }\n                    \n                    #circularG_2{\n                        left:6px;\n                        top:6px;\n                        animation-delay:0.55s;\n                            -moz-animation-delay:0.55s;\n                    }\n                    \n                    #circularG_3{\n                        top:0;\n                        left:23px;\n                        animation-delay:0.69s;\n                            -moz-animation-delay:0.69s;\n                    }\n                    \n                    #circularG_4{\n                        right:6px;\n                        top:6px;\n                        animation-delay:0.83s;\n                            -moz-animation-delay:0.83s;\n                    }\n                    \n                    #circularG_5{\n                        right:0;\n                        top:23px;\n                        animation-delay:0.97s;\n                            -moz-animation-delay:0.97s;\n                    }\n                    \n                    #circularG_6{\n                        right:6px;\n                        bottom:6px;\n                        animation-delay:1.1s;\n                            -moz-animation-delay:1.1s;\n                    }\n                    \n                    #circularG_7{\n                        left:23px;\n                        bottom:0;\n                        animation-delay:1.24s;\n                            -moz-animation-delay:1.24s;\n                    }\n                    \n                    #circularG_8{\n                        left:6px;\n                        bottom:6px;\n                        animation-delay:1.38s;\n                            -moz-animation-delay:1.38s;\n                    }\n                    \n                    @keyframes bounce_circularG{\n                        0%{\n                            transform:scale(1);\n                        }\n                        100%{\n                            transform:scale(.3);\n                        }\n                    }\n                    \n                    @-moz-keyframes bounce_circularG{\n                        0%{\n                            -moz-transform:scale(1);\n                        }\n                        100%{\n                            -moz-transform:scale(.3);\n                        }\n                    }\n                `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),i=()=>{const i=document.documentElement.clientWidth;if(i<n)for(let e=0;e<t.length;e++)i<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};i(),window.addEventListener("resize",i)}};const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});var d=()=>{form.forEach(e=>{const t=document.getElementById(e.id),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("img"),h=document.createElement("img");i.setAttribute("id","circularG"),o.setAttribute("id","circularG_1"),r.setAttribute("id","circularG_2"),s.setAttribute("id","circularG_3"),a.setAttribute("id","circularG_4"),l.setAttribute("id","circularG_5"),d.setAttribute("id","circularG_6"),u.setAttribute("id","circularG_7"),p.setAttribute("id","circularG_8"),o.setAttribute("class","circularG"),r.setAttribute("class","circularG"),s.setAttribute("class","circularG"),a.setAttribute("class","circularG"),l.setAttribute("class","circularG"),d.setAttribute("class","circularG"),u.setAttribute("class","circularG"),p.setAttribute("class","circularG"),m.setAttribute("id","statusDone"),h.setAttribute("id","statusError"),m.setAttribute("src","./images/statuses/mark-done.png"),h.setAttribute("src","./images/statuses/mark-warning.png"),i.appendChild(o),i.appendChild(r),i.appendChild(s),i.appendChild(a),i.appendChild(l),i.appendChild(d),i.appendChild(u),i.appendChild(p),i.style.display="none",h.style.display="none",m.style.display="none",i.style.display="none",n.style.cssText="font-size: 2rem; color: #fff;text-shadow: 0 1px 0 rgba(255, 255, 255, .5);";const y=t.querySelectorAll("input");y.forEach(e=>{!e.name||"user_name"!==e.name&&"user_email"!==e.name&&"user_phone"!==e.name||e.removeAttribute("type")}),y.forEach(e=>{e.addEventListener("input",()=>{"user_name"===e.name||"user_message"===e.name?e.value=e.value.replace(/[^а-яА-Я\s]/,""):"user_phone"===e.name&&(e.value=e.value.replace(/[^0-9\\+]/,""))})}),t.appendChild(n),t.appendChild(i),t.appendChild(h),t.appendChild(m),t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(n),t.appendChild(i),t.appendChild(h),t.appendChild(m),i.style.display="block",h.style.display="none",m.style.display="none",n.textContent="Выполняется отправка....";const o=new FormData(t);let r={};o.forEach((e,t)=>{r[t]=e});c(r).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Спасибо! Мы скоро с Вами свяжемся!",t.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success"),m.style.display="block",h.style.display="none"}),i.style.display="none"}).catch(e=>{console.error(e),n.textContent="Спасибо! Мы скоро с Вами свяжемся!",t.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success"),m.style.display="block",h.style.display="none"}),i.style.display="none"})})})};(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector("body"),i=t.querySelectorAll("ul>li"),o=document.querySelectorAll("a"),r=e=>{t.classList.toggle("active-menu")},s=e=>{let n=document.querySelector(".active-menu");!e.target.classList.contains("active-menu")&&!!n&&"img"!==e.target.localName&&t.classList.toggle("active-menu")},a=(e,t)=>"actionMenu"===e?r:"mouseclick"===e?s:((e,t)=>{e.preventDefault();const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})})(e,t);e.addEventListener("click",r),i.forEach(e=>{e.addEventListener("click",a("actionMenu",e))}),n.addEventListener("click",a("mouseclick",n)),o.forEach(e=>{e.classList.contains("close-btn")?e.addEventListener("click",a("actionMenu",e)):(e.closest("li")||e.closest("main"))&&e.addEventListener("click",(function(t){a(t,e)}))})})(),i(),o(),r(),s();a(100);new l({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),d()}]);