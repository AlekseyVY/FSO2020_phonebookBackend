(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),u=t.n(r),l=t(2),o=function(e){return c.a.createElement(c.a.Fragment,null,"filter shown with: ",c.a.createElement("input",{value:e.search,onChange:e.handleSearchFilter}))},i=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"add a new"),c.a.createElement("form",{onSubmit:e.handleInputEvent},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleChange})),c.a.createElement("div",null,"phone: ",c.a.createElement("input",{value:e.newPhone,onChange:e.handlePhoneChange})),c.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.id,t=e.handleDelete,a=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return t(n,a)}},"delete"))},h=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Numbers"),e.filtered.map((function(n,t){return c.a.createElement("p",{key:t},n.name," ",n.number," ",c.a.createElement(m,{id:n.id,handleDelete:e.handleDelete,name:n.name}))})))},f=t(3),d=t.n(f),s="/api/persons",E=function(e){return d.a.post(s,e).then((function(e){return e.data}))},b=function(){return d.a.get(s).then((function(e){return e.data}))},p=function(e,n){try{return d.a.put("".concat(s,"/").concat(e[0].id),n).then((function(e){return e.data}))}catch(t){return t}},g=function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e}))},v=(t(36),function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:"notification"},c.a.createElement("h2",null,n))}),w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),f=m[0],d=m[1],s=Object(a.useState)(""),w=Object(l.a)(s,2),j=w[0],O=w[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),D=C[0],S=C[1],F=Object(a.useState)(null),y=Object(l.a)(F,2),P=y[0],N=y[1];Object(a.useEffect)((function(){b().then((function(e){return r(t.concat(e))}))}),[]);var I=!1,T=t.filter((function(e){if(e.name.includes(D))return e.name}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(v,{message:P}),c.a.createElement(o,{search:D,handleSearchFilter:function(e){S(e.target.value)}}),c.a.createElement(i,{handleChange:function(e){d(e.target.value)},handlePhoneChange:function(e){O(e.target.value)},handleInputEvent:function(e){e.preventDefault();var n={name:f,number:j};t.map((function(e){e.name===f&&(I=!0)})),I?window.confirm("".concat(f," is aready added to phonebook, replace the old number with new one?"))?p(t.filter((function(e){if(e.name===f)return e.id})),n).then((function(e){r(e),N("phone of ".concat(f," has been updated")),setTimeout((function(){N(null)}),5e3)})):console.log("no"):E(n).then((function(e){r(t.concat(e)),N("added ".concat(f)),setTimeout((function(){N(null)}),5e3)})),d(""),O("")},newName:f,newPhone:j}),c.a.createElement(h,{filtered:T,handleDelete:function(e,n){window.confirm("Delete ".concat(n," ?"))?g(e).then((function(e){N("".concat(n," has been successfully DELETED!")),b().then((function(e){return r(e)}))})):console.log("remove canceled")}}))};u.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bc5f3f95.chunk.js.map