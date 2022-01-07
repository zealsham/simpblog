(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),c=n.n(a),u=n(2),s=n.n(u),i=n(5),o=n(3),l=(n(22),n(6)),j=n.n(l),b="/api/blog",d=null,p={getAll:function(){var e={headers:{Authorization:d}};return j.a.get(b,e).then((function(e){return e.data}))},setToken:function(e){d="bearer ".concat(e)},create:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:d}},e.next=3,j.a.post(b,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:d}},a="".concat(b,"/").concat(n),e.next=4,j.a.put(a,t,r);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:d}},r="".concat(b,"/").concat(t),e.next=4,j.a.delete(r,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=n(0),h=function(e){var t=e.blog,n=e.stateSetter,a=e.blogState,c=e.currentUser,u=Object(r.useState)(!1),l=Object(o.a)(u,2),j=l[0],b=l[1],d=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:t.title,url:t.url,author:t.author,user:t.user.id,likes:t.likes+1},e.next=3,p.update(r,t.id);case 3:c=e.sent,console.log(a),u=a.map((function(e){return e.id!==c.id?e:c})),n(u);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("do you want to delete this blog ")){e.next=6;break}return e.next=3,p.remove(t.id);case 3:r=e.sent,c=a.filter((function(e){return e.id!==r.id})),n(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={display:j?"":"none"},v=j?"hide":"view";return Object(f.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5,borderRadius:5},children:[Object(f.jsx)("button",{onClick:function(){b(!j)},children:v}),Object(f.jsx)("div",{children:Object(f.jsx)("h5",{children:t.title})}),Object(f.jsxs)("div",{style:O,children:[Object(f.jsx)("p",{children:t.url}),Object(f.jsx)("p",{children:t.author}),Object(f.jsx)("span",{children:"Likes: "}),t.likes," ",Object(f.jsx)("button",{onClick:function(){d(t)},children:"like"}),t.user.username===c.username?Object(f.jsx)("button",{onClick:function(){h(t)},children:"remove"}):null]})]})},O={login:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){var t=e.username,n=e.password,r=e.onSubmit,a=e.usernameSetter,c=e.passwordSetter;return Object(f.jsxs)("form",{onSubmit:r,children:[Object(f.jsxs)("div",{children:["username: ",Object(f.jsx)("input",{value:t,name:"username",onChange:function(e){a(e.target.value)}})]}),Object(f.jsxs)("div",{children:["passowrd: ",Object(f.jsx)("input",{value:n,name:"password",onChange:function(e){c(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",children:"Login"})]})},x=function(e){var t=e.createBlog,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],u=a[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(r.useState)(""),d=Object(o.a)(b,2),p=d[0],h=d[1];return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:l,url:p,likes:0}),u(""),h(""),j("")},children:[Object(f.jsxs)("div",{children:["title: ",Object(f.jsx)("input",{name:"title",value:c,onChange:function(e){return u(e.target.value)}})]}),Object(f.jsxs)("div",{children:["author: ",Object(f.jsx)("input",{name:"author",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(f.jsxs)("div",{children:["url: ",Object(f.jsx)("input",{name:"url",value:p,onChange:function(e){return h(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",children:"create"})]})},m=function(e){var t=e.msg;return Object(f.jsx)("p",{className:"error",children:t})},g=function(e){var t=e.msg;return Object(f.jsx)("p",{className:"sucess",children:t})},w=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],u=function(){c(!a)},s={display:a?"none":""},i={display:a?"":"none"};return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:s,children:Object(f.jsx)("button",{onClick:u,children:e.buttonName})}),Object(f.jsxs)("div",{style:i,children:[e.children,Object(f.jsx)("button",{onClick:u,children:"cancel"})]})]})},k=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),u=Object(o.a)(c,2),l=u[0],j=u[1],b=Object(r.useState)(""),d=Object(o.a)(b,2),k=d[0],S=d[1],y=Object(r.useState)(""),C=Object(o.a)(y,2),A=C[0],T=C[1],N=Object(r.useState)(null),U=Object(o.a)(N,2),z=U[0],B=U[1],I=Object(r.useState)(null),J=Object(o.a)(I,2),L=J[0],D=J[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedinUser");if(e){var t=JSON.parse(e);j(t),p.setToken(t.token),p.getAll().then((function(e){return a(e)}))}}),[]);var E=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:A,password:k},e.prev=2,e.next=5,O.login(n);case 5:return r=e.sent,window.localStorage.setItem("loggedinUser",JSON.stringify(r)),p.setToken(r.token),j(r),e.next=11,p.getAll();case 11:c=e.sent,a(c),T(""),S(""),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),B("Wrong username or password"),setTimeout((function(){B(null)}),5e3);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.create(t);case 3:r=e.sent,a(n.concat(r)),D(r.title),setTimeout((function(){D(null)}),5e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),B(e.t0),setTimeout((function(){B(null)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=n.sort((function(e,t){return t.likes-e.likes}));return null===l?Object(f.jsxs)(f.Fragment,{children:[null===z?null:Object(f.jsx)(m,{msg:z}),Object(f.jsx)(v,{username:A,password:k,usernameSetter:T,passwordSetter:S,onSubmit:E})]}):Object(f.jsxs)("div",{children:[null===L?null:Object(f.jsx)(g,{msg:L}),null===z?null:Object(f.jsx)(m,{}),Object(f.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedinUser"),j(null)},children:"logout"}),Object(f.jsxs)("h1",{children:["logged as ",l.username]}),Object(f.jsx)(w,{buttonName:"create blog",children:Object(f.jsx)(x,{createBlog:W})}),Object(f.jsx)("h2",{children:"blogs"}),F.map((function(e){return Object(f.jsx)(h,{blog:e,stateSetter:a,blogState:n,currentUser:l},e.id)}))]})};c.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2a896f9c.chunk.js.map