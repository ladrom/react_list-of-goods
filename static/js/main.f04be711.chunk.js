(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(2),h=s.n(b),d=(s(14),s(15),s(1)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={sortType:n.NONE,isReversed:!1},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.sortInReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetSorting=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);switch(s){case n.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return r?o.reverse():o}(y,{sortType:s,isReversed:e});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{onClick:this.sortAlphabetically,type:"button",className:p()("button","is-info",{"is-light":s!==n.ALPHABET}),children:"Sort alphabetically"}),Object(j.jsx)("button",{onClick:this.sortByLength,type:"button",className:p()("button","is-success",{"is-light":s!==n.LENGTH}),children:"Sort by length"}),Object(j.jsx)("button",{onClick:this.sortInReverse,type:"button",className:p()("button","is-warning",{"is-light":!e}),children:"Reverse"}),(s!==n.NONE||e)&&Object(j.jsx)("button",{onClick:this.resetSorting,type:"button",className:p()("button","is-danger","is-light"),children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:r.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f04be711.chunk.js.map