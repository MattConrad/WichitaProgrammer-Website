(this.webpackJsonpgameoflife=this.webpackJsonpgameoflife||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),u=(n(14),n(1)),c=n(2),l=function(e,t,n,r){return{pattern:e,rows:t,columns:n,wraparound:r,generation:0,board:f(e,t,n)}},f=function(e,t,n){if(!e.every((function(t){return t.length===e[0].length})))throw new Error("Pattern array must be rectangular.");var r=e.length,a=e[0].length;if(r>t||a>n)throw new Error("Pattern must be smaller in width and height than board.");for(var o=Math.floor((t-r)/2),i=Math.floor((n-a)/2),u=Array(t).fill(!1).map((function(){return new Array(n).fill(!1)})),c=0;c<e.length;c++)for(var l=0;l<e[0].length;l++)u[o+c][i+l]=e[c][l];return u},s=function(e,t){return e.map((function(n,r){return n.map((function(n,a){return function(e,t,n,r,a){var o=function(e,t,n,r){for(var a=0,o=-1;o<=1;o++)for(var i=-1;i<=1;i++)if(0!==o||0!==i){var u=t+o,c=n+i;if(r)u<0&&(u+=e.length),c<0&&(c+=e[0].length),u>e.length-1&&(u-=e.length),c>e[0].length-1&&(c-=e[0].length);else{if(u<0||u>e.length-1)continue;if(c<0||c>e[0].length-1)continue}e[u][c]&&a++}return a}(e,n,r,a);return 3===o||t&&2===o}(e,n,r,a,t)}))}))},d=Math.pow(1990,2),h=function(e){return 2e3-Math.pow(e,.5)},m=.8*d,b=h(m),p=function(e,t,n){var r,a;return"10px"===window.getComputedStyle(e.current).getPropertyValue("font-size")?(r=Math.floor(n/11),a=Math.floor(.98*t/6)):(r=Math.floor(n/20),a=Math.floor(.98*t/10.8)),{rows:r,columns:a}},v=function(e){var t=e.boardRef,n=e.board;return a.a.createElement("div",{ref:t,id:"board"},n.map((function(e,t){return e.reduce((function(e,t){return e+(t?"\u25cf":" ")}),"")+"\n"})))},g=n(3),E=n.n(g),w=n(6),O=n(7),j=n.n(O),y=function(){var e=Object(w.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.a).then((function(e){return e.text()}));case 2:return t=e.sent,n=t.split("\r\n\r\n"),r={},n.forEach((function(e){var t=e.split("\r\n"),n=t[0],a=t.slice(1).map((function(e){return e.split("").map((function(e){return"*"===e}))}));r[n]=a})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),k=function(e){var t=e.setGameIsRunning,n=e.reloadGame,o=Object(r.useState)(),i=Object(u.a)(o,2),c=i[0],l=i[1];Object(r.useEffect)((function(){y.then((function(e){l(e)}))}),[]),Object(r.useEffect)((function(){if(c){var e=Object.keys(c)[0];f(e)}}),[c]);var f=function(e){t(!1),"("===e[0]?n(function(e){for(var t=e.replace(/\D/g,""),n=parseFloat(t)/100,r=[],a=0;a<10;a++){for(var o=[],i=0;i<10;i++){var u=Math.random()<n;o.push(u)}r.push(o)}return r}(e)):n(c[e])};return c?a.a.createElement("div",null,"Pattern: ",a.a.createElement("select",{onChange:function(e){return f(e.target.value)}},Object.keys(c).map((function(e){return a.a.createElement("option",{key:e},e)})))):a.a.createElement("div",null,"loading . . .")},S=n(8),C=(n(16),function(e,t,n,r){try{return l(e,t,n,r)}catch(a){return alert(a),alert("Attempting to restart with an empty board. You may need to choose a different pattern or increase your browser's size."),l([[]],t,n,r)}});var G=function(){var e=Object(r.useState)(m),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)({width:0,height:0}),l=Object(u.a)(i,2),g=l[0],E=l[1],w=Object(r.useState)(),O=Object(u.a)(w,2),j=O[0],y=O[1],G=Object(r.useState)(b),M=Object(u.a)(G,2),x=M[0],R=M[1],z=Object(r.useState)(!1),A=Object(u.a)(z,2),L=A[0],P=A[1],W=Object(r.useState)(!0),_=Object(u.a)(W,2),I=_[0],B=_[1],D=Object(r.useRef)(),F=function(){y(function(e){return Object(c.a)({},e,{generation:e.generation+1,board:s(e.board,e.wraparound)})}(j))},J=function(e){P(!1),y(function(e,t){for(var n=f(e.pattern,e.rows,e.columns),r=0;r<t;r++)n=s(n,e.wraparound);return Object(c.a)({},e,{generation:t,board:n})}(j,Math.max(e,0)))},T=function(e){var t=Object(r.useState)({width:0,height:0}),n=Object(S.a)(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){var t=function(){return{width:e.current.offsetWidth,height:e.current.offsetHeight}},n=function(){o(t())};return e.current&&o(t()),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e]),a}(D),H=T.width,V=T.height;return Object(r.useEffect)((function(){if(L){var e=setTimeout(F,x);return function(){clearTimeout(e)}}})),Object(r.useEffect)((function(){if(g.width!==H||g.height!==V){E({width:H,height:V});var e=p(D,H,V),t=j?j.pattern:[[]];y(C(t,e.rows,e.columns,I))}}),[g.width,g.height,H,V,j,I]),a.a.createElement("div",{id:"main"},a.a.createElement("div",{id:"sidebar"},a.a.createElement("div",{id:"sidebar-group-1"},a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",rel:"noopener noreferrer",target:"_blank"},"Conway's Game Of Life"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(k,{setGameIsRunning:P,reloadGame:function(e){var t=p(D,g.width,g.height);y(C(e,t.rows,t.columns,I))}}),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",onChange:function(e){B(e.target.checked),y(function(e,t){return Object(c.a)({},e,{wraparound:t})}(j,e.target.checked))},checked:I})," Wraparound Edges"),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("input",{type:"button",onClick:function(){return P(!L)},value:L?"Stop":"Start"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"speed-slider"},"Speed \xa0"),a.a.createElement("input",{id:"speed-slider",type:"range",min:"0",max:d,value:n,onChange:function(e){return t=e.target.value,o(t),void R(h(t));var t}})),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement("div",{id:"sidebar-group-2"},a.a.createElement("div",null,"Generation: ",j?j.generation:0),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("input",{type:"button",onClick:F,disabled:L,value:"Advance 1 Generation"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("input",{type:"button",onClick:function(){return J(j.generation-10)},value:"Rewind 10 Generations"})),a.a.createElement("div",null,a.a.createElement("input",{type:"button",onClick:function(){return J(j.generation-100)},value:"Rewind 100 Generations"})),a.a.createElement("div",null,a.a.createElement("input",{type:"button",onClick:function(){return J(0)},value:"Reset to Generation 0"})),a.a.createElement("br",null),a.a.createElement("br",null))),a.a.createElement("div",{id:"board-container"},a.a.createElement(v,{boardRef:D,board:j?j.board:[]})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n.p+"static/media/patternData.bf904ba6.txt"},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.dade0c2b.chunk.js.map