(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"FT/Q":function(e,t,a){},NSxh:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{role:"button",tabIndex:"0","aria-label":"Toggle Background Contacts",onKeyDown:function(){return a(!1)},onClick:function(){return a(!1)},className:"w-full h-screen fixed top-0 left-0 z-20 "+(t?"block":"hidden")}),l.a.createElement("div",{className:"absolute right-20 bottom-40"},l.a.createElement("div",{role:"button",tabIndex:"0","aria-label":"Toggle Contacts",onKeyDown:function(e){return 67===e.keyCode?a((function(e){return!e})):""},onClick:function(){return a((function(e){return!e}))},className:"z-10 fixed border-black p-2 border border rounded-full shadow-md bg-blue-300 "+(t?"hidden":"block")},l.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 25",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2}",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})))),l.a.createElement("div",{className:"absolute right-20 bottom-40"},l.a.createElement("div",{className:"fixed z-30 bottom-40"},l.a.createElement("a",{className:"pb-3 "+(t?"block":"hidden"),href:"https://twitter.com/messages/compose?recipient_id=963052414264688640&text=Hello%20Andrel"},l.a.createElement("svg",{width:"40",height:"40",fill:"rgba(29,161,242,1.00)",viewBox:"0 0 25 25"},l.a.createElement("g",null,l.a.createElement("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))),l.a.createElement("a",{className:"pb-3 "+(t?"block":"hidden"),href:"https://m.facebook.com/messages/compose?ids=100011595496988"},l.a.createElement("svg",{viewBox:"0 0 36 36",fill:"url(#jsc_s_2)",height:"40",width:"40"},l.a.createElement("defs",null,l.a.createElement("linearGradient",{x1:"50%",x2:"50%",y1:"97.0782153%",y2:"0%",id:"jsc_s_2"},l.a.createElement("stop",{offset:"0%","stop-color":"#0062E0"}),l.a.createElement("stop",{offset:"100%","stop-color":"#19AFFF"}))),l.a.createElement("path",{d:"M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"}),l.a.createElement("path",{fill:"white",d:"M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"}))),l.a.createElement("a",{className:t?"block":"hidden",href:"https://mail.google.com/mail/?view=cm&fs=1&to=andrel.sitanggang@gmail.com&su=Hello%20Andrel"},l.a.createElement("img",{class:"w-10",src:"https://img.icons8.com/color/2x/gmail.png",alt:"Email andrel"})))))},c=[{url:"/projects/",tabName:"projects",d:"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"},{url:"/",tabName:"home",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},{url:"/profile/",tabName:"profile",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}];t.a=function(e){var t=e.isActive;return l.a.createElement("footer",{className:"flex fixed bottom-0 justify-between w-full md:w-container left-0 right-0 mx-auto"},l.a.createElement(o,null),c.map((function(e,a){return l.a.createElement("div",{key:a,className:"w-4/12 py-4"},l.a.createElement(r.Link,{to:e.url,key:a},l.a.createElement("svg",{className:"mx-auto "+(t!==e.tabName?"opacity-25":""),xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",fill:"none",viewBox:"0 0 27 27",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e.d}))))})))}},Rb52:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("waaq"),o=[{name:"Javascript Logo",src:a.n(r).a}];t.a=function(){return l.a.createElement("nav",{className:"fixed top-0 left-0 right-0 mx-auto flex bg-white h-10 items-center w-full md:w-container justify-center shadow-bottom-default"},l.a.createElement("span",null,"Andrel Karunia Sitanggang "),l.a.createElement("span",{className:"w-1 h-1 bg-black rounded-full mx-2"}),l.a.createElement("div",{className:"flex items-center"},o.map((function(e,t){return l.a.createElement("img",{className:"w-6 h-6 rounded-full m-0 mx-1",key:t,src:e.src,alt:e.name})}))))}},hoZb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Rb52"),o=function(){return l.a.createElement("div",{className:"pt-10"},"Open source",l.a.createElement("br",null),"DuckDuckGo",l.a.createElement("br",null),"Translations - Indonesian Language",l.a.createElement("br",null),"ReactJS ID",l.a.createElement("br",null),"Translations - Indonesian Language",l.a.createElement("br",null),"Vest",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/ealush/vest/issues/310"},"Add __DEV__ = true to development build"),l.a.createElement("br",null),l.a.createElement("br",null),"Frontend web developer",l.a.createElement("br",null),"Oktober 2018 - Maret 2019",l.a.createElement("br",null),"kuismilioner.com",l.a.createElement("br",null),"April 2019 - Now",l.a.createElement("br",null),"PT. Distributor Indonesia Unggul - Jakarta",l.a.createElement("br",null),"Frontend web developer",l.a.createElement("br",null),"Oktober 2018 - Maret 2019",l.a.createElement("br",null),"kuismilioner.com",l.a.createElement("br",null),"Frontend web developer",l.a.createElement("br",null),"November 2016 - Maret 2018",l.a.createElement("br",null),"Gotraining.co.id",l.a.createElement("br",null),"Frontend web developer",l.a.createElement("br",null))},c=a("NSxh"),m=a("vrFN");a("FT/Q"),t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"relative bg-blue-150 w-full md:w-container h-screen mx-auto p-3"},l.a.createElement(m.a,{title:"Projects",description:"My works"}),l.a.createElement(r.a,null),l.a.createElement(o,null),l.a.createElement(c.a,{isActive:"projects"})))}},waaq:function(e,t,a){e.exports=a.p+"static/gatsby-icon-fbfee0f754968171d8731fe6f0427dda.png"}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-fdce862688b059ff5258.js.map