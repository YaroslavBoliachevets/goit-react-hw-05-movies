"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[146],{8146:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r,a,u=n(885),c=n(470),i=n(2791),s=n(4390),p=n(168),o=n(6444),d=o.ZP.ul(r||(r=(0,p.Z)(["\ndisplay:flex;\nflex-wrap:wrap;\nlist-style:none;\ngap:30px;\n"]))),f=o.ZP.li(a||(a=(0,p.Z)(["\ngap: 20px;\n"]))),h=n(184),l=function(){var t=(0,i.useState)(null),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,i.useState)("https://image.tmdb.org/t/p/w500"),p=(0,u.Z)(a,1)[0],o=(0,c.UO)();return(0,i.useEffect)((function(){(0,s.M1)(o.movieId).then((function(t){var e=t.cast;r(e)}))}),[o]),(0,i.useEffect)((function(){}),[n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{children:n&&n.map((function(t){var e=t.name,n=t.character,r=t.profile_path;return(0,h.jsxs)(f,{children:[(0,h.jsx)("img",{src:r?p+r:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930",alt:"Actor",width:"150px"}),(0,h.jsx)("p",{children:e}),(0,h.jsx)("p",{children:n})]},e)}))})})}},4390:function(t,e,n){n.d(e,{Jh:function(){return f},M1:function(){return o},Q2:function(){return s},TP:function(){return m},zi:function(){return l}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c);function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=5692dca6012d3660a336300872bd664c&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=1"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&query=".concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=5692dca6012d3660a336300872bd664c&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=146.56fdcebf.chunk.js.map