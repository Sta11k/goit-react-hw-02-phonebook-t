(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),c=a.n(i),o=(a(16),a(17),a(11)),r=a(2),l=a(3),d=a(5),h=a(4),b=(a(18),a(9)),u=a(6),m=a.n(u),j=a(22),O=a(0),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={id:"",name:"",number:"",association:"Other"},e.contactId=Object(j.a)(),e.contactIdName=Object(j.a)(),e.contactIdNumber=Object(j.a)(),e.handleChange=function(t){console.log(t.currentTarget.value);var a=t.currentTarget,n=a.name,s=a.value;e.setState(Object(b.a)({},n,s)),e.setState({id:e.contactId})},e.handleSabmit=function(t){t.preventDefault();var a=e.state,n={id:a.id,name:a.name,number:a.number,association:a.association};e.setState({contactPhone:n}),e.props.propOnSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({id:" ",name:" ",number:" ",association:" "})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSabmit,children:[Object(O.jsxs)("label",{htmlFor:this.contactIdName,className:m.a.form__name,children:["Name",Object(O.jsx)("input",{id:this.contactIdName,onChange:this.handleChange,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{htmlFor:this.contactIdNumber,className:m.a.form__number,children:["Number",Object(O.jsx)("input",{id:this.contactIdNumber,onChange:this.handleChange,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsxs)("div",{className:m.a.radio__btn,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:this.handleChange,checked:"Work"===this.state.association}),"Work"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:this.handleChange,checked:"Family"===this.state.association}),"Family"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:this.handleChange,checked:"Friends"===this.state.association}),"Friends"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Last",onChange:this.handleChange,checked:"Last"===this.state.association}),"Last"]})]}),Object(O.jsx)("button",{type:"submit",children:"Add"})]})}}]),a}(n.Component),f=p,g=a(10),v=a.n(g);var x=function(e){return e.contactsOll,Object(O.jsx)("ul",{className:v.a.contacts__list})},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={contactsOll:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",association:"Other"},{id:"id-2",name:"Hermione Kline",number:"443-89-12",association:"Other"},{id:"id-3",name:"Eden Clements",number:"645-17-79",association:"Other"},{id:"id-4",name:"Annie Copeland",number:"227-91-26",association:"Other"}]},e.hendlerSubmitForm=function(t){console.log(t),e.setState((function(e){return{contactsOll:[].concat(Object(o.a)(e.contactsOll),[t])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(f,{propOnSubmit:this.hendlerSubmitForm}),Object(O.jsx)(x,{})]})}}]),a}(n.Component),y=C;c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={radio__btn:"Form_radio__btn__kA5pH"}}},[[20,1,2]]]);
//# sourceMappingURL=main.1ac46c7a.chunk.js.map