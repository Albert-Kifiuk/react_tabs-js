(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),o=n(0),l=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.onTabSelected;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:n.map((function(t){return Object(o.jsx)("li",{className:b()({"is-active":t.id===c}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return a(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"tabContent",children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t,e=Object(s.useState)("tab-1"),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",null===(t=r.find((function(t){return t.id===c})))||void 0===t?void 0:t.title]}),Object(o.jsx)(l,{tabs:r,selectedTabId:c,onTabSelected:function(t){a(t.id)}})]})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.02b9b882.chunk.js.map