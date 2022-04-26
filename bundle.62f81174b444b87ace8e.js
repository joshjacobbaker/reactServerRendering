!function(){"use strict";var e,n,r,t,o,i,a,s,c={5579:function(e,n,r){r(7294);var t=r(745),o=r(9704),i=r(8072),a=r(915),s=r(4569),c=r(7705),d=(r(7862),r(5893));i.Z.dispatch((0,a.uh)()),t.s(document.getElementById("root")).render((0,d.jsxs)(o.zt,{store:i.Z,children:[(0,d.jsx)(c.Z,{}),(0,d.jsx)(s.Z,{})]})),e.hot.accept()},4569:function(e,n,r){r.d(n,{Z:function(){return ue}});var t,o,i,a,s,c,d,u,l,f,p,h,m,v=r(8152),g=r(7294),x=r(8804),j=r(9711),b=r(6974),y=(r(7705),{baseTheme:{fg:"palevioletred",bg:"white",color:"orange",backgroundColor:"orange"},darkTheme:{fg:"white",bg:"palevioletred",color:"purple",backgroundColor:"green"}}),w=r(168),k={mobileL:"(max-width: ".concat("425px",")"),laptop:"(max-width: ".concat("1024px",")"),desktop:"(max-width: ".concat("2560px",")")},Z=x.ZP.main(t||(t=(0,w.Z)(["\n  @media ",' {\n    display: grid;\n    grid-template-rows: 20vh repeat(2, 500px) 20vh;\n    grid-template-columns: 1fr 132px;\n    /* grid-gap: 1rem; */\n    height: 100vh;\n    width: 100vw;\n    grid-template-areas:\n      "header header header header right"\n      "hero hero hero hero right"\n      "main main main main right"\n      "footer footer footer footer right";\n  }\n\n  @media ',' {\n    display: grid;\n    grid-template-rows: 20vh repeat(2, 500px) 20vh;\n    grid-template-columns: 1fr 132px;\n    grid-template-areas:\n      "header header header header right"\n      "hero hero hero hero right"\n      "main main main main right"\n      "footer footer footer footer right";\n  }\n\n  @media ',' {\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 20vh 1fr 20vh;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main"\n      "footer";\n  }\n'])),k.desktop,k.laptop,k.mobileL),E=x.ZP.header(o||(o=(0,w.Z)(["\n  width: 100vw;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 2fr 8fr;\n  justify-items: center;\n  align-items: center;\n\n  /* border: 1px solid white; */\n  background-color: black;\n  grid-area: header;\n\n  &__item {\n    // background-color: red;\n    width: 100%;\n  }\n\n  ul {\n    // background-color: blue;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: 1fr;\n    // margin-left: 30px;\n    justify-content: space-around;\n    justify-items: center;\n  }\n\n  li {\n    font-size: 1.8rem;\n    &:hover {\n      transform: scale(1.2);\n      font-style: bold;\n      color: #fff;\n    }\n    list-style: none;\n\n    & > * {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n}\n@media "," {}\n@media "," {\n\n} \n\n@media ","  {\n  .header {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n\n    /* border: 1px solid $color-white; */\n    background-color: $color-black;\n    grid-area: header;\n\n    &__item {\n      // background-color: red;\n      width: 80%;\n    }\n\n    ul {\n      // background-color: blue;\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: repeat(3, 1fr);\n    }\n\n    li {\n      font-size: 1.2rem;\n      &:hover {\n        transform: scale(1.2);\n      }\n      list-style: none;\n\n      & > * {\n        text-decoration: none;\n        color: inherit;\n      }\n    }\n  }\n\n"])),k.desktop,k.laptop,k.mobileL),I=r(5893),_=function(){return(0,I.jsx)("div",{className:"you",children:(0,I.jsx)("i",{className:"fa",children:"Y.O.U. Salon"})})},C=(0,x.ZP)(j.OL)(i||(i=(0,w.Z)(["\n  background-color: purple;\n  font-weight: bold;\n"]))),P=function(e){return(0,I.jsx)(C,{to:"/",children:e.children})},A=function(e){return(0,I.jsxs)(E,{children:[(0,I.jsx)("div",{className:"header__item",children:(0,I.jsx)(_,{})}),(0,I.jsx)("div",{className:"header__item",children:(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:(0,I.jsx)(P,{to:"/",children:"Home"})}),(0,I.jsx)("li",{children:(0,I.jsx)(j.OL,{to:"/counter",children:"Counter"})})]})})]})},O=function(){var e=(0,g.useRef)(null);return(0,I.jsx)("div",{className:"typing-body",children:(0,I.jsx)("div",{onClick:function(n){console.log("click event: "+n),e.current.classList.remove("animate"),setTimeout((function(){return e.current.classList.add("animate")}),1)},ref:e,className:"typing animate"})})},N=function(){return(0,I.jsxs)("div",{children:[(0,I.jsx)("i",{className:"fa fa-apple",id:"apple"}),(0,I.jsx)("i",{className:"fa fa-twitter",id:"twitter"}),(0,I.jsx)("i",{className:"fa fa-github-square github",id:"github"}),(0,I.jsx)("i",{className:"fa fa-facebook-square",id:"facebook"})]})},S=x.ZP.footer(a||(a=(0,w.Z)(["\n  width: 100vw;\n  /* border: 1px solid white; */\n  /* background: "," */\n  ","\n  grid-area: footer;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n\n  @media "," {\n  }\n\n  @media "," {\n    /* border: 1px solid white; */\n    grid-area: footer;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    /* background: black; */\n    align-items: center;\n    justify-items: center;\n    ","\n  }\n\n  @media "," {\n    grid-area: footer;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 50vw 50vw;\n    align-items: center;\n    justify-content: center;\n    ","\n  }\n"])),(function(e){return e.theme.primary}),(function(e){return(0,x.iv)(s||(s=(0,w.Z)(["\n      background: linear-gradient(red, ",");\n    "])),e.theme.color)}),k.desktop,k.laptop,(function(e){return e.color&&(0,x.iv)(c||(c=(0,w.Z)(["\n        background-color: ",";\n      "])),(function(e){return e.theme[e.color]}))}),k.mobileL,(function(e){return e.color&&(0,x.iv)(d||(d=(0,w.Z)(["\n        background-color: ",";\n      "])),(function(e){return e.theme[e.color]}))})),T=function(){return(0,I.jsxs)(S,{color:"secondary",children:[(0,I.jsx)(O,{}),(0,I.jsx)(N,{})]})},D=(x.ZP.div(u||(u=(0,w.Z)(["\n  width: 100vw;\n  /* border: 1px solid $color-white; */\n  background-color: #1696b2;\n  grid-area: hero;\n  background: $color-black;\n"]))),r(9422),x.ZP.div(l||(l=(0,w.Z)(["\n  /* width: 100vw; */\n  grid-area: right;\n  overflow: hidden;\n\n  @media "," {\n  }\n  @media "," {\n  }\n  @media "," {\n  }\n"])),k.desktop,k.laptop,k.mobileL),r(2773),x.ZP.main(f||(f=(0,w.Z)(["\n  height: 100%;\n  width: 100vw;\n  /* border: 1px solid white; */\n  background-color: linear-gradient(to-bottom, black, white)\n  grid-area: main;\n  overflow: scroll;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n"])))),H=function(e){return(0,I.jsx)(D,{children:e.children})},L=r(9704),B=r(8232),U=x.ZP.div(p||(p=(0,w.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: gold;\n"]))),q=function(){var e=(0,L.v9)(B.Hm),n=(0,L.I0)(),r=(0,g.useState)("2"),t=(0,v.Z)(r,2),o=t[0],i=t[1];return(0,I.jsxs)(U,{children:[(0,I.jsx)("h2",{children:"Counter"}),(0,I.jsx)("input",{"aria-label":"Set increment amount",value:o,onChange:function(e){return i(e.target.value)}}),(0,I.jsx)("button",{onClick:function(){return n((0,B.ds)(Number(o)||0))},children:"IncrementByAmount"}),(0,I.jsxs)("div",{children:[(0,I.jsx)("button",{"aria-label":"Increment value",onClick:function(){return n((0,B.nP)())},children:"+"}),(0,I.jsx)("span",{children:e}),(0,I.jsx)("button",{"aria-label":"Decrement value",onClick:function(){return n((0,B.Mj)())},children:"-"})]})]})},M=function(e){var n=e.text,r=void 0===n?"":n,t=e.size,o=void 0===t?"5em":t,i=r?(0,I.jsx)("h4",{children:r}):null;return console.log("Spinner Mounted"),(0,I.jsxs)("div",{className:"spinner",children:[i,(0,I.jsx)("div",{className:"loader",style:{height:o,width:o}})]})},F=function(e){var n=e.userId,r=(0,L.v9)((function(e){return e.users.find((function(e){return e.id===n}))}));return(0,I.jsxs)("span",{children:["by ",r?r.name:"Unknown author"]})},W=r(4220),z=r(6996),$=function(e){var n=e.timestamp,r="";if(n){var t=(0,W.Z)(n),o=(0,z.Z)(t);r="".concat(o," ago")}return console.log("TimeAgo Mounted"),(0,I.jsxs)("span",{title:n,children:["  ",(0,I.jsxs)("i",{children:["Posted: ",r]})]})},R=r(1670),G={thumbsUp:"👍",hooray:"🎉",heart:"❤️",rocket:"🚀",eyes:"👀"},V=function(e){var n=e.post,r=(0,L.I0)(),t=Object.entries(G).map((function(e){var t=(0,v.Z)(e,2),o=t[0],i=t[1];return(0,I.jsxs)("button",{type:"button",className:"",onClick:function(){r((0,R.Vr)({postId:n.id,reaction:o}))},children:[i," ",n.reactions[o]]},o)}));return(0,I.jsx)("div",{children:t})},J=function(e){var n=e.post;return(0,I.jsxs)("article",{className:"post-excerpt",children:[(0,I.jsx)("h3",{children:n.title}),(0,I.jsxs)("div",{children:[(0,I.jsx)(F,{userId:n.user}),(0,I.jsx)($,{timestamp:n.date})]}),(0,I.jsx)("p",{className:"post-body",children:n.body.substring(0,100)}),(0,I.jsx)(V,{post:n}),(0,I.jsx)(j.OL,{to:"/posts/".concat(n.id),className:"button muted-button",children:"View Post"})]},n.id)},K=function(){var e,n=(0,L.I0)(),r=(0,L.v9)(R.Co),t=(0,L.v9)((function(e){return e.posts.status})),o=(0,L.v9)((function(e){return e.posts.error}));return(0,g.useEffect)((function(){"idle"===t&&n((0,R.T6)())}),[t,n]),"loading"===t?e=(0,I.jsx)(M,{text:"Loading..."}):"succeeded"===t?e=r.slice().sort((function(e,n){return n.date.localeCompare(e.date)})).map((function(e){return(0,I.jsx)(J,{post:e},e.id)})):"failed"===t&&(e=(0,I.jsx)("div",{children:o})),(0,I.jsxs)("section",{className:"posts-list",children:[(0,I.jsx)("h2",{children:"Posts..."}),e||(0,I.jsx)("p",{children:"No Body..."})]})},Y=r(5861),Q=r(7757),X=r.n(Q),ee=function(){var e=(0,g.useState)(""),n=(0,v.Z)(e,2),r=n[0],t=n[1],o=(0,g.useState)(""),i=(0,v.Z)(o,2),a=i[0],s=i[1],c=(0,g.useState)(""),d=(0,v.Z)(c,2),u=d[0],l=d[1],f=(0,g.useState)("idle"),p=(0,v.Z)(f,2),h=p[0],m=p[1],x=(0,L.I0)(),j=(0,b.s0)(),y=(0,L.v9)((function(e){return e.users})),w=[r,a,u].every(Boolean)&&"idle"===h,k=function(){var e=(0,Y.Z)(X().mark((function e(){return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=17;break}return e.prev=1,m("pending"),e.next=5,x((0,R.z4)({title:r,body:a,userId:u})).unwrap();case 5:t(""),s(""),l(""),j("/postslist"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Failed to save the post: ",e.t0);case 14:return e.prev=14,m("idle"),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),Z=y.map((function(e){return(0,I.jsx)("option",{value:e.id,children:e.username},e.id)}));return(0,I.jsxs)("section",{children:[(0,I.jsx)("h2",{children:"Add a New Post"}),(0,I.jsxs)("form",{children:[(0,I.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),(0,I.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",value:r,onChange:function(e){return t(e.target.value)}}),(0,I.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),(0,I.jsxs)("select",{id:"postAuthor",value:u,onChange:function(e){return l(e.target.value)},children:[(0,I.jsx)("option",{value:""}),Z]}),(0,I.jsx)("label",{htmlFor:"postBody",children:"Body:"}),(0,I.jsx)("textarea",{id:"postBody",name:"postBody",value:a,onChange:function(e){return s(e.target.value)}}),(0,I.jsx)("button",{type:"button",onClick:k,disabled:!w,children:"Save Post"})]})]})},ne=function(){var e=(0,b.UO)().postId;console.log(e);var n=(0,L.v9)((function(n){return(0,R.G1)(n,e)}));return console.log("SinglePostPage Mounted"),n?(0,I.jsx)("section",{children:(0,I.jsxs)("article",{className:"post",children:[(0,I.jsx)("h2",{children:n.title}),(0,I.jsx)($,{timestamp:n.date}),(0,I.jsx)(F,{userId:n.user}),(0,I.jsx)("p",{className:"post-body",children:n.body}),(0,I.jsx)(V,{post:n}),(0,I.jsx)(j.OL,{to:"/editpost/".concat(n.id),className:"button",children:"Edit Post"})]})}):(0,I.jsx)("section",{children:(0,I.jsx)("h2",{children:"Post not found!"})})},re=function(){var e=(0,b.UO)().postId,n=(0,L.v9)((function(n){return(0,R.G1)(n,e)})),r=(0,g.useState)(n.title),t=(0,v.Z)(r,2),o=t[0],i=t[1],a=(0,g.useState)(n.body),s=(0,v.Z)(a,2),c=s[0],d=s[1],u=(0,L.I0)(),l=(0,b.s0)();return(0,I.jsxs)("section",{children:[(0,I.jsx)("h2",{children:"Edit Post"}),(0,I.jsx)($,{timestamp:n.date}),(0,I.jsx)(F,{userId:n.user}),(0,I.jsxs)("form",{children:[(0,I.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),(0,I.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:o,onChange:function(e){return i(e.target.value)}}),(0,I.jsx)("label",{htmlFor:"postBody",children:"Body:"}),(0,I.jsx)("textarea",{id:"postBody",name:"postBody",value:c,onChange:function(e){return d(e.target.value)}})]}),(0,I.jsx)("button",{type:"button",onClick:function(){o&&c&&(u((0,R.c_)({id:e,title:o,body:c})),l("/posts/".concat(e)))},children:"Save Post"})]})},te=r(915),oe=function(){var e=(0,L.v9)(te.yw).map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)(j.OL,{to:"/users/".concat(e.id),children:e.name})},e.id)}));return(0,I.jsxs)("section",{children:[(0,I.jsx)("h2",{children:"Users"}),(0,I.jsx)("ul",{children:e})]})},ie=function(){var e=(0,b.UO)().userId,n=(0,L.v9)((function(n){return(0,te.Ls)(n,e)})),r=(0,L.v9)((function(n){return(0,R.Co)(n).filter((function(n){return n.user===e}))})).map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)(j.OL,{to:"/posts/".concat(e.id),children:e.title})},e.id)}));return(0,I.jsxs)("section",{children:[(0,I.jsx)("h2",{children:n.name}),(0,I.jsx)("ul",{children:r})]})},ae=x.ZP.button(h||(h=(0,w.Z)(["\n  width: 120px;\n  height: 40px;\n  text-align: center;\n  color: black;\n  background-color: pink;\n\n  @media "," {\n    background-color: blue;\n  }\n\n  @media "," {\n    background-color: black;\n  }\n\n  @media "," {\n    background-color: red;\n  }\n"])),k.desktop,k.laptop,k.mobileL),se=function(e){var n=(0,g.useState)(0),r=(0,v.Z)(n,2),t=r[0];return r[1],(0,I.jsxs)(Z,{children:[(0,I.jsx)(A,{number:t}),(0,I.jsxs)(H,{children:[(0,I.jsxs)(b.Z5,{children:[(0,I.jsx)(b.AW,{path:"counter",element:(0,I.jsx)(q,{})}),(0,I.jsx)(b.AW,{path:"postslist",element:(0,I.jsx)(K,{})}),(0,I.jsx)(b.AW,{path:"addpostform",element:(0,I.jsx)(ee,{})}),(0,I.jsx)(b.AW,{path:"posts/:postId",element:(0,I.jsx)(ne,{})}),(0,I.jsx)(b.AW,{path:"editpost/:postId",element:(0,I.jsx)(re,{})}),(0,I.jsx)(b.AW,{path:"card",element:(0,I.jsx)(ae,{children:"Button"})}),(0,I.jsx)(b.AW,{exact:!0,path:"users",element:(0,I.jsx)(oe,{})}),(0,I.jsx)(b.AW,{exact:!0,path:"users/:userId",element:(0,I.jsx)(ie,{})}),(0,I.jsx)(b.AW,{path:"*",element:(0,I.jsx)("main",{style:{},children:(0,I.jsx)("p",{children:"There's nothing here!"})})})]}),(0,I.jsx)(b.j3,{}),(0,I.jsx)("button",{onClick:function(n){e.setSwitchTheme((function(e){return!e})),console.log("theme button clicked")},children:"Switch Theme? CLick me!"})]}),(0,I.jsx)(T,{})]})},ce=x.ZP.main(m||(m=(0,w.Z)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: green;\n"]))),de=function(){return(0,I.jsx)(ce,{})},ue=function(){var e=(0,g.useState)(!1),n=(0,v.Z)(e,2),r=n[0],t=n[1];return(0,I.jsx)(x.f6,{theme:r?y.baseTheme:y.darkTheme,children:(0,I.jsx)(j.UT,{children:(0,I.jsxs)(b.Z5,{children:[(0,I.jsx)(b.AW,{path:"/*",element:(0,I.jsx)(se,{switchTheme:r,setSwitchTheme:t})}),(0,I.jsx)(b.AW,{exact:!0,path:"/admin",element:(0,I.jsx)(de,{})})]})})})}},7705:function(e,n,r){var t,o,i=r(168),a=r(8804),s=(0,a.vJ)(t||(t=(0,i.Z)(["\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*Percentage is better for Browser/User Accessibility */\nhtml {\n  //This defines what 1 rem is\n  font-size: 62.5%;\n}\n\n// Reset List Styles\nli {\n  list-style: none;\n\n  & > * {\n    text-decoration: none;\n    color: inherit;\n  }\n}\n  \nbody {\n  ","\n}\n\n","\n\n"])),"","");a.ZP.div(o||(o=(0,i.Z)([""]))),n.Z=s},8232:function(e,n,r){r.d(n,{Hm:function(){return c},Mj:function(){return a},ds:function(){return s},nP:function(){return i}}),r(7757);var t=(0,r(4399).oM)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}}}),o=t.actions,i=o.increment,a=o.decrement,s=o.incrementByAmount;n.ZP=t.reducer;var c=function(e){return e.counter.value}},1670:function(e,n,r){r.d(n,{Co:function(){return h},G1:function(){return m},T6:function(){return d},Vr:function(){return f},c_:function(){return l},z4:function(){return u}});var t=r(5861),o=r(7757),i=r.n(o),a=r(4399),s=r(9669),c=r.n(s),d=(0,a.hg)("posts/fetchPosts",(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("http://localhost:8080/posts");case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error during GET request: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),u=(0,a.hg)("posts/addNewPost",function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("http://localhost:8080/posts",n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),l=(0,a.hg)("posts/postUpdated",function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,c().put("http://localhost:8080/posts/".concat(r),n);case 3:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f=(0,a.hg)("posts/reactionAdded",function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.postId,e.next=3,c().put("http://localhost:8080/posts/reactions/".concat(r),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),p=(0,a.oM)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e,n){e.status="loaded"})).addCase(u.fulfilled,(function(e,n){e.status="succeeded",e.posts.push(n.payload)})).addCase(d.pending,(function(e,n){e.status="loading"})).addCase(d.fulfilled,(function(e,n){e.status="succeeded",e.posts=e.posts.concat(n.payload)})).addCase(d.rejected,(function(e,n){e.status="failed",e.error=n.error.message})).addCase(l.fulfilled,(function(e,n){var r=n.payload,t=r.id,o=r.title,i=r.body,a=e.posts.find((function(e){return e.id===t}));a&&(a.title=o,a.body=i)})).addCase(f.fulfilled,(function(e,n){console.log(n.payload);var r=n.payload,t=r.postId,o=r.reactions,i=JSON.parse(o),a=e.posts.find((function(e){return e.id===t}));a&&(a.reactions=i)}))}});n.ZP=p.reducer;var h=function(e){return e.posts.posts},m=function(e,n){return e.posts.posts.find((function(e){return e.id===n}))}},915:function(e,n,r){r.d(n,{Ls:function(){return f},uh:function(){return d},yw:function(){return l}});var t=r(5861),o=r(7757),i=r.n(o),a=r(4399),s=r(9669),c=r.n(s),d=(0,a.hg)("users/fetchUsers",(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("http://localhost:8080/users");case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))),u=(0,a.oM)({name:"users",initialState:[],reducers:{},extraReducers:function(e){e.addCase(d.fulfilled,(function(e,n){return n.payload}))}});n.ZP=u.reducer;var l=function(e){return e.users},f=function(e,n){return e.users.find((function(e){return e.id===n}))}},8072:function(e,n,r){var t=r(4399),o=r(8232),i=r(1670),a=r(915),s=(0,t.xC)({reducer:{counter:o.ZP,posts:i.ZP,users:a.ZP}});n.Z=s},9422:function(e,n,r){var t=r(4783)(e.id,{locals:!0});e.hot.dispose(t)},7862:function(e,n,r){var t=r(4783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)},2773:function(e,n,r){e.exports=r.p+"images/dog.311e51dc649e52092c23.jpg"}},d={};function u(e){var n=d[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var r=d[e]={id:e,exports:{}};try{var t={id:e,module:r,factory:c[e],require:u};u.i.forEach((function(e){e(t)})),r=t.module,t.factory.call(r.exports,r,r.exports,t.require)}catch(e){throw r.error=e,e}return r.exports}u.m=c,u.c=d,u.i=[],e=[],u.O=function(n,r,t,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],t=e[d][1],o=e[d][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<i&&(i=o));if(a){e.splice(d--,1);var c=t();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,t,o]},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,{a:n}),n},u.d=function(e,n){for(var r in n)u.o(n,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},u.hu=function(e){return e+"."+u.h()+".hot-update.js"},u.miniCssF=function(e){},u.hmrF=function(){return"bundle."+u.h()+".hot-update.json"},u.h=function(){return"e3763859c5491a99e02c"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},r="reactserversiderendering:",u.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",r+o),a.src=e),n[e]=[t];var f=function(r,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},function(){var e,n,r,t,o={},i=u.c,a=[],s=[],c="idle";function d(e){c=e;for(var n=[],r=0;r<s.length;r++)n[r]=s[r].call(null,e);return Promise.all(n)}function l(e){if(0===n.length)return e();var r=n;return n=[],Promise.all(r).then((function(){return l(e)}))}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return d("check").then(u.hmrM).then((function(t){return t?d("prepare").then((function(){var o=[];return n=[],r=[],Promise.all(Object.keys(u.hmrC).reduce((function(e,n){return u.hmrC[n](t.c,t.r,t.m,e,r,o),e}),[])).then((function(){return l((function(){return e?h(e):d("ready").then((function(){return o}))}))}))})):d(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var n=r.map((function(n){return n(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return d("abort").then((function(){throw o[0]}));var i=d("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var a,s=d("apply"),c=function(e){a||(a=e)},u=[];return n.forEach((function(e){if(e.apply){var n=e.apply(c);if(n)for(var r=0;r<n.length;r++)u.push(n[r])}})),Promise.all([i,s]).then((function(){return a?d("fail").then((function(){throw a})):t?h(e).then((function(e){return u.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):d("idle").then((function(){return u}))}))}function m(){if(t)return r||(r=[]),Object.keys(u.hmrI).forEach((function(e){t.forEach((function(n){u.hmrI[e](n,r)}))})),t=void 0,!0}u.hmrD=o,u.i.push((function(h){var m,v,g,x,j=h.module,b=function(r,t){var o=i[t];if(!o)return r;var s=function(n){if(o.hot.active){if(i[n]){var s=i[n].parents;-1===s.indexOf(t)&&s.push(t)}else a=[t],e=n;-1===o.children.indexOf(n)&&o.children.push(n)}else console.warn("[HMR] unexpected require("+n+") from disposed module "+t),a=[];return r(n)},u=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(s,f,u(f));return s.e=function(e){return function(e){switch(c){case"ready":return d("prepare"),n.push(e),l((function(){return d("ready")})),e;case"prepare":return n.push(e),e;default:return e}}(r.e(e))},s}(h.require,h.id);j.hot=(m=h.id,v=j,x={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,u(m)},active:!0,accept:function(e,n,r){if(void 0===e)x._selfAccepted=!0;else if("function"==typeof e)x._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)x._acceptedDependencies[e[t]]=n||function(){},x._acceptedErrorHandlers[e[t]]=r;else x._acceptedDependencies[e]=n||function(){},x._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)x._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)x._declinedDependencies[e[n]]=!0;else x._declinedDependencies[e]=!0},dispose:function(e){x._disposeHandlers.push(e)},addDisposeHandler:function(e){x._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=x._disposeHandlers.indexOf(e);n>=0&&x._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](m,r)})),d("ready");break;case"ready":Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:o[m]},e=void 0,x),j.parents=a,j.children=[],a=[],h.require=b})),u.hmrC={},u.hmrI={}}(),function(){var e;u.g.importScripts&&(e=u.g.location+"");var n=u.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e}(),t=function(e,n,r,t){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),t(c)}},o.href=n,document.head.appendChild(o),o},o=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=(a=r[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===n)return a}},i=[],a=[],s=function(e){return{dispose:function(){for(var e=0;e<i.length;e++){var n=i[e];n.parentNode&&n.parentNode.removeChild(n)}i.length=0},apply:function(){for(var e=0;e<a.length;e++)a[e].rel="stylesheet";a.length=0}}},u.hmrC.miniCss=function(e,n,r,c,d,l){d.push(s),e.forEach((function(e){var n=u.miniCssF(e),r=u.p+n,s=o(n,r);s&&c.push(new Promise((function(n,o){var c=t(e,r,(function(){c.as="style",c.rel="preload",n()}),o);i.push(s),a.push(c)})))}))},function(){var e,n,r,t,o=u.hmrS_jsonp=u.hmrS_jsonp||{296:0},i={};function a(e){return new Promise((function(n,r){i[e]=n;var t=u.p+u.hu(e),o=new Error;u.l(t,(function(n){if(i[e]){i[e]=void 0;var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,r(o)}}))}))}function s(i){function a(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,c=u.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var d=0;d<c.parents.length;d++){var l=c.parents[d],f=u.c[l];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(f.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),s(r[l],[i])):(delete r[l],n.push(l),t.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}u.f&&delete u.f.jsonpHmr,e=void 0;var c={},d=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(u.o(n,p)){var h,m=n[p],v=!1,g=!1,x=!1,j="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(j="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+j));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+j));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+j));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),x=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in l[p]=m,s(d,h.outdatedModules),h.outdatedDependencies)u.o(h.outdatedDependencies,p)&&(c[p]||(c[p]=[]),s(c[p],h.outdatedDependencies[p]));x&&(s(d,[h.moduleId]),l[p]=f)}n=void 0;for(var b,y=[],w=0;w<d.length;w++){var k=d[w],Z=u.c[k];Z&&(Z.hot._selfAccepted||Z.hot._main)&&l[k]!==f&&!Z.hot._selfInvalidated&&y.push({module:k,require:Z.hot._requireSelf,errorHandler:Z.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var n,t=d.slice();t.length>0;){var i=t.pop(),a=u.c[i];if(a){var s={},l=a.hot._disposeHandlers;for(w=0;w<l.length;w++)l[w].call(null,s);for(u.hmrD[i]=s,a.hot.active=!1,delete u.c[i],delete c[i],w=0;w<a.children.length;w++){var f=u.c[a.children[w]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in c)if(u.o(c,p)&&(a=u.c[p]))for(b=c[p],w=0;w<b.length;w++)n=b[w],(e=a.children.indexOf(n))>=0&&a.children.splice(e,1)},apply:function(e){for(var n in l)u.o(l,n)&&(u.m[n]=l[n]);for(var r=0;r<t.length;r++)t[r](u);for(var o in c)if(u.o(c,o)){var a=u.c[o];if(a){b=c[o];for(var s=[],f=[],p=[],h=0;h<b.length;h++){var m=b[h],v=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==s.indexOf(v))continue;s.push(v),f.push(g),p.push(m)}}for(var x=0;x<s.length;x++)try{s[x].call(null,b)}catch(n){if("function"==typeof f[x])try{f[x](n,{moduleId:o,dependencyId:p[x]})}catch(r){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[x],error:r,originalError:n}),i.ignoreErrored||(e(r),e(n))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[x],error:n}),i.ignoreErrored||e(n)}}}for(var j=0;j<y.length;j++){var w=y[j],k=w.module;try{w.require(k)}catch(n){if("function"==typeof w.errorHandler)try{w.errorHandler(n,{moduleId:k,module:u.c[k]})}catch(r){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:r,originalError:n}),i.ignoreErrored||(e(r),e(n))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:k,error:n}),i.ignoreErrored||e(n)}}return d}}}self.webpackHotUpdatereactserversiderendering=function(e,r,o){for(var a in r)u.o(r,a)&&(n[a]=r[a]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},u.hmrI.jsonp=function(e,o){n||(n={},t=[],r=[],o.push(s)),u.o(n,e)||(n[e]=u.m[e])},u.hmrC.jsonp=function(i,c,d,l,f,p){f.push(s),e={},r=c,n=d.reduce((function(e,n){return e[n]=!1,e}),{}),t=[],i.forEach((function(n){u.o(o,n)&&void 0!==o[n]&&(l.push(a(n)),e[n]=!0)})),u.f&&(u.f.jsonpHmr=function(n,r){e&&!u.o(e,n)&&u.o(o,n)&&void 0!==o[n]&&(r.push(a(n)),e[n]=!0)})},u.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(u.p+u.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},u.O.j=function(e){return 0===o[e]};var c=function(e,n){var r,t,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(e){return 0!==o[e]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(s)var d=s(u)}for(e&&e(n);c<i.length;c++)t=i[c],u.o(o,t)&&o[t]&&o[t][0](),o[t]=0;return u.O(d)},d=self.webpackChunkreactserversiderendering=self.webpackChunkreactserversiderendering||[];d.forEach(c.bind(null,0)),d.push=c.bind(null,d.push.bind(d))}();var l=u.O(void 0,[235],(function(){return u(5579)}));l=u.O(l)}();
//# sourceMappingURL=bundle.62f81174b444b87ace8e.js.map