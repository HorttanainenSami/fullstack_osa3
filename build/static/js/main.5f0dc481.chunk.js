(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(15),a=t.n(c),o=t(5),i=t(3),u=t(0),d=function(e){var n=e.person,t=e.handleDelete;return Object(u.jsxs)("p",{children:[n.name," ",n.number," ",Object(u.jsx)("button",{onClick:function(){return t(n.id)},children:"delete "})]})},l=function(e){var n=e.persons,t=e.handleDelete;return Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsx)(d,{person:e,handleDelete:t},e.name)}))})},s=function(e){var n=e.onSubmit,t=e.handleNameChange,r=e.newName,c=e.handleNumberChange,a=e.newNumber;return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{onChange:t,value:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{onChange:c,value:a})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},b=function(e){var n=e.filter,t=e.handleFilter;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[" filter shown with ",Object(u.jsx)("input",{onChange:t,value:n})]})})},h=t(4),j=t.n(h),f="/api/persons",m={getAll:function(){var e=j.a.get(f),n={name:"Not on server",number:"12345",id:1e4};return e.then((function(e){return e.data.concat(n)}))},create:function(e){return j.a.post(f,e).then((function(e){return e.data}))},remove:function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return j.a.put("".concat(f,"/").concat(n),e).then((function(e){return e.data}))}},O=function(e){var n=e.message;if(null===n)return null;var t={color:"green",fontStyle:"italic",fontSize:32,borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return n.includes("error")&&(t.color="red"),Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:t,children:n})})},v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),d=Object(i.a)(a,2),h=d[0],j=d[1],f=Object(r.useState)(""),v=Object(i.a)(f,2),p=v[0],x=v[1],g=Object(r.useState)(""),w=Object(i.a)(g,2),C=w[0],S=w[1],N=Object(r.useState)(null),y=Object(i.a)(N,2),k=y[0],D=y[1];Object(r.useEffect)((function(){m.getAll().then((function(e){return c(e)}))}),[]);var A=function(e){D(e),setTimeout((function(){D(null)}),5e3)},L=0===C.length?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook "}),Object(u.jsx)(O,{message:k}),Object(u.jsx)(b,{filter:C,handleFilter:function(e){return S(e.target.value)},header:"Phonebook"}),Object(u.jsx)("h3",{children:" Add a new"}),Object(u.jsx)(s,{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}))){if(window.confirm("".concat(h,", is already added to phonebook, replace the old number with a new one?"))){var n=Object(o.a)(Object(o.a)({},t.find((function(e){return e.name===h}))),{},{number:p});m.update(n,n.id).then((function(e){A("Change ".concat(e.name," number")),c(t.map((function(t){return t.id===n.id?e:t}))),j(""),x("")})).catch((function(e){A("error:".concat(n.name," has already removed from server")),c(t.filter((function(e){return e.id!==n.id})))}))}}else{var r={name:h,number:p};m.create(r).then((function(e){A("Add ".concat(e.name," to phonebook")),c(t.concat(e)),j(""),x("")})).catch((function(e){A(e.response.data.error)}))}},handleNameChange:function(e){return j(e.target.value)},newName:h,handleNumberChange:function(e){return x(e.target.value)},newNumber:p}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(l,{persons:L,handleDelete:function(e){var n=Object(o.a)({},t.find((function(n){return n.id===e})));window.confirm("Delete ".concat(n.name))&&m.remove(e).then((function(r){c(t.filter((function(n){return n.id!==e}))),A("".concat(n.name," deleted from server"))})).catch((function(e){A("error:".concat(n.name," has already removed from server")),c(t.filter((function(e){return e.id!==n.id})))}))}})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5f0dc481.chunk.js.map