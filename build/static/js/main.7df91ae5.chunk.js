(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(16),a=n.n(r),o=n(3),u=n(4),i=n.n(u),d="/api/persons",s=function(){return i.a.get(d).then((function(e){return e.data}))},l=function(e){return i.a.post(d,e).then((function(e){return e.data}))},b=function(e,t){return i.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},j=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=n(0),f=function(e){var t=e.contacts,n=e.handleDelete;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsxs)("p",{children:[e.name," ",e.number,"  ",Object(h.jsx)("button",{onClick:function(){return n(e.id,e.name)},children:"Delete"})]},e.name)}))})},m=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e.addName,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},O=function(e){var t=e.filterContacts;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:t})]})},p=function(e){var t=e.message,n=e.type;return null===t?null:"error"===n?(console.log("Error!"),Object(h.jsx)("div",{style:{color:"red",borderStyle:"solid",borderRadius:5,font:25,padding:5,margin:5},children:t})):Object(h.jsx)("div",{style:{color:"green",borderStyle:"solid",borderRadius:5,font:25,padding:5,margin:5},children:t})},v=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),i=u[0],d=u[1],v=Object(c.useState)(""),x=Object(o.a)(v,2),g=x[0],w=x[1],C=Object(c.useState)(n),y=Object(o.a)(C,2),N=y[0],S=y[1],k=Object(c.useState)(null),D=Object(o.a)(k,2),E=D[0],U=D[1],A=Object(c.useState)(),J=Object(o.a)(A,2),R=J[0],B=J[1],I=function(){s().then((function(e){r(e),S(e),d(""),w("")})).catch((function(e){B("error"),U("Error: couldn't retrieve phonenbook",e)}))},P=function(e,t,n){if("success"===e)switch(B("success"),t){case"add":U("Added ".concat(n));break;case"update":U("Updated ".concat(n,"'s number"));break;case"delete":U("Deleted ".concat(n))}else B("error"),U("Error: ".concat(n," has already been deleted from server"));setTimeout((function(){U(null),B(null)}),5e3)};Object(c.useEffect)((function(){I()}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{message:E,type:R}),Object(h.jsx)(O,{filterContacts:function(e){var t;t=e.target.value,S(n.filter((function(e){return e.name.toUpperCase().indexOf(t.toUpperCase())>-1})))}}),Object(h.jsx)("h2",{children:"Add a new contact"}),Object(h.jsx)(m,{addName:function(e){e.preventDefault();var t=n[n.length-1].id,c=n.find((function(e){return e.name===i}));void 0!==c?window.confirm("Contact ".concat(i," exists already,\n       replace the old number with a new one?"))&&b(c.id,{name:i,number:g,id:c.id}).then((function(){I(),d(""),w(""),P("success","update",i)})).catch((function(e){P("error","update",i),I()})):l({name:i,number:g,id:t+1}).then((function(e){var t=n.concat(e);r(t),S(t),d(""),w(""),P("success","add",i)})).catch((function(e){P("error","add",i),I()}))},newName:i,newNumber:g,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(f,{contacts:N,handleDelete:function(e,t){window.confirm("Delete ".concat(t,"?"))&&j(e).then((function(){s().then((function(e){var n=e;r(n),S(n),P("success","delete",t)}))})).catch((function(e){P("error","delete",t),I()}))}})]})};a.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7df91ae5.chunk.js.map