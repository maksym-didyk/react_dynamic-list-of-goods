(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),r=o.n(e),c=o(4),i=o(1),u=(o(9),o(0)),s=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.ok?t.json():Promise.reject(new Error("Something was wrong"))}))}var d=function(){return a().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},l=function(){return a().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},f=function(){var t=Object(i.useState)([]),n=Object(c.a)(t,2),o=n[0],e=n[1],r=function(t){t().then((function(t){return e(t)}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r(a)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r(d)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r(l)},children:"Load red goods"}),Object(u.jsx)(s,{goods:o})]})};r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.9ee76281.chunk.js.map