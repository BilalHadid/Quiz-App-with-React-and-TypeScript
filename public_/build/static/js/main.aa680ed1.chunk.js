(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{12:function(e,n,t){e.exports=t.p+"static/media/quiz-logo.a8cdf8d1.png"},15:function(e,n,t){},21:function(e,n,t){e.exports=t(34)},26:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(16),c=t.n(o),i=(t(26),t(5)),s=t.n(i),l=t(9),u=t(3),p=t(17),f=(t(15),t(20)),m=function(){var e=Object(l.a)(s.a.mark((function e(n,t){var a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(n,"&category=21&difficulty=").concat(t,"&type=multiple"));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,o=r.results,c=o.map((function(e){return{question:e.question,answer:e.correct_answer,option:(n=e.incorrect_answers.concat(e.correct_answer),Object(f.a)(n).sort((function(){return Math.random()-.5})))};var n})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(e){var n=e.options,t=e.question,o=e.callback,c=(e.answer,e.quesIncre),i=Object(a.useState)(""),s=Object(u.a)(i,2),l=s[0],p=s[1],f=function(e){p(e.target.value)};return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Parag"},r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("b",null,"Questions ",c))),r.a.createElement("p",null,t," ")),r.a.createElement("form",{onSubmit:function(e){return o(e,l)}},n.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("label",null,r.a.createElement("input",{required:!0,type:"radio",name:"opt",value:e,checked:l===e,onChange:f}),e))}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"sub-main"},r.a.createElement("button",{className:"button-two",onClick:function(e){return o(e,l)}},r.a.createElement("span",null,"Submit"))))},v=t(12),h=t.n(v),b=t(11),g=t(19),w=t.n(g),E=t(13);t(35);E.initializeApp({apiKey:"AIzaSyDH368OCf9UFlh_n0nzL7gWfuW71aG1RYc",authDomain:"pwa-quiz-app.firebaseapp.com",databaseURL:"https://pwa-quiz-app.firebaseio.com",projectId:"pwa-quiz-app",storageBucket:"pwa-quiz-app.appspot.com",messagingSenderId:"489006275593",appId:"1:489006275593:web:a38cf81f7afb3e61e2acd8"});var j=E;function k(){var e=Object(p.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return k=function(){return e},e}var O=Object(b.css)(k());var y=function(){var e=j.messaging();e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("token",e)}));var n=Object(a.useState)([]),t=Object(u.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(0),p=Object(u.a)(i,2),f=p[0],v=p[1],b=Object(a.useState)(0),g=Object(u.a)(b,2),E=g[0],k=g[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),q=S[0],z=S[1],N=Object(a.useState)(1),W=Object(u.a)(N,2),A=W[0],x=W[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(5,"easy");case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.length?q?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:h.a,alt:"heading"})),r.a.createElement("h1",null,"Your Total Score is ",E),r.a.createElement("h2",null,E>=3?"Congratulation You are Passed":"You aren't passed")):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:h.a,alt:"heading"})),r.a.createElement("h1",null,"Score : ",E),r.a.createElement("div",{className:"Quiz"},r.a.createElement(d,{options:o[f].option,question:o[f].question,answer:o[f].answer,callback:function(e,n){e.preventDefault(),n===o[f].answer&&k(++E),f!==o.length-1?(v(++f),x(++A)):z(!0)},quesIncre:A}))):r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(w.a,{css:O,size:50,color:"#123abc",loading:!0}))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(){var e="".concat("","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.log("result",e)}))}(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.aa680ed1.chunk.js.map