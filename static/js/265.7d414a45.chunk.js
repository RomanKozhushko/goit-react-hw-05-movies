"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[265],{725:function(n,t,e){e.d(t,{s:function(){return c}});var i=e(739),r=e(731),o=e(598),a=e(184),c=function(n){var t=n.filmList,e=(0,i.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.aV,{children:t.map((function(n){var t=n.title,i=n.id,o=n.name,c=n.poster_path;return(0,a.jsx)("li",{style:{width:230},children:(0,a.jsxs)(r.rU,{to:"/movies/".concat(i),state:{from:e},children:[(0,a.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500".concat(c):"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:t||o,width:"230"}),(0,a.jsx)("p",{style:{color:"rgb(255, 121, 62)",paddingLeft:"10px",fontSize:"16px",fontWeight:"bold"},children:t||o})]})},i)}))})})}},265:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var i,r,o,a,c,p=e(885),s=e(791),d=e(168),l=e(444),u=l.ZP.div(i||(i=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: transparent;\n"]))),h=l.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),f=l.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 37px;\n  height: 37px;\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png');\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    background-color: rgb(255, 121, 62);\n    border-color: rgb(255, 121, 62);\n  }\n"]))),g=l.ZP.label(a||(a=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x=l.ZP.input(c||(c=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  padding: 5px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=e(725),b=e(731),w=e(562),v=e(443),y=e(184);function j(){var n=(0,b.lr)(),t=(0,p.Z)(n,2),e=t[0],i=t[1],r=(0,s.useState)(""),o=(0,p.Z)(r,2),a=o[0],c=o[1],d=(0,s.useState)([]),l=(0,p.Z)(d,2),j=l[0],k=l[1];return(0,s.useEffect)((function(){e.get("query")&&(0,v.V0)(e.get("query")).then((function(n){k(n.results)}))}),[e,a]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{children:(0,y.jsxs)(h,{onSubmit:function(n){n.preventDefault(),a.trim()?i({query:a}):w.Notify.failure("Empty query")},children:[(0,y.jsx)(f,{type:"submit",children:(0,y.jsx)(g,{children:"Search"})}),(0,y.jsx)(x,{type:"text",name:"query",value:a,autoComplete:"off",onChange:function(n){c(n.target.value)},autoFocus:!0,placeholder:"Search movie"})]})}),null!==j&&void 0!==j&&j.length?(0,y.jsx)(m.s,{filmList:j}):(0,y.jsx)(y.Fragment,{})]})}}}]);
//# sourceMappingURL=265.7d414a45.chunk.js.map