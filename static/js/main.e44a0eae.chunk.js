(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(37),s=n.n(c),i=(n(164),n.p,n(165),n(1));var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,274)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},o=n(46),j=n(27),u=(n(89),n(254)),d=u.a.Header,b=u.a.Footer;var h=function(e){return Object(i.jsxs)(u.a,{children:[Object(i.jsx)(d,{children:Object(i.jsx)("h1",{style:{textAlign:"center",backgroundColor:"#FFFFFF"},children:"NOTE IT"})}),Object(i.jsx)(u.a,{style:{marginLeft:"auto",marginRight:"auto",marginTop:150,marginBottom:100},children:e.display}),Object(i.jsx)(b,{children:Object(i.jsx)("p",{style:{textAlign:"center",color:"red"},children:"This Note Taking app is under development."})})]})},x=n(25),m=n.n(x),O=n(39),p=n(6),g=n(262),f=n(256),y=n(257),v=n(260),w=n(79),N=n(255),k=n(265),P=n(266),I=n(147),C=(n(167),I.a.initializeApp({apiKey:"AIzaSyDtR1kUBlAroc34Qi19hyPjHeBSqqhI-5o",authDomain:"noteit-7b9bc.firebaseapp.com",projectId:"noteit-7b9bc",storageBucket:"noteit-7b9bc.appspot.com",messagingSenderId:"286838997483",appId:"1:286838997483:web:8e0059023e273fc96119ae"})),F=C.auth(),S=a.a.createContext();function E(){return Object(r.useContext)(S)}function A(e){var t=e.children,n=a.a.useState(),c=Object(p.a)(n,2),s=c[0],l=c[1],o=a.a.useState(!0),j=Object(p.a)(o,2),u=j[0],d=j[1],b={currentUser:s,signUp:function(e,t,n){return F.createUserWithEmailAndPassword(e,t).then((function(e){e.displayName=n}))},login:function(e,t){return F.signInWithEmailAndPassword(e,t)},logout:function(){return F.signOut()},resetPassword:function(e){return F.sendPasswordResetEmail(e)}};return Object(r.useEffect)((function(){return F.onAuthStateChanged((function(e){l(e),d(!1)}))}),[]),Object(i.jsx)(S.Provider,{value:b,children:!u&&t})}var T=function(e){var t=E(),n=(t.currentUser,t.login),a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],l=c[1],u=Object(r.useState)(!1),d=Object(p.a)(u,2),b=d[0],h=d[1],x=Object(j.f)();function I(){return(I=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),console.log("Form Values received: ",t),e.prev=2,e.next=5,n(t.email,t.password);case 5:l(""),x.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l("Invalid Username or Password");case 12:h(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{style:{minWidth:"300px"},children:[Object(i.jsx)("h2",{style:{textAlign:"center",marginBottom:"60"},children:"Log In"}),s&&Object(i.jsx)(g.a,{type:"error",message:s}),Object(i.jsxs)(f.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){return I.apply(this,arguments)},children:[Object(i.jsx)(f.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(i.jsx)(y.a,{prefix:Object(i.jsx)(k.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(i.jsx)(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(i.jsx)(y.a,{prefix:Object(i.jsx)(P.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",minLength:"6"})}),Object(i.jsxs)(f.a.Item,{children:[Object(i.jsx)(f.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(i.jsx)(v.a,{children:"Remember me"})}),Object(i.jsx)(o.b,{className:"login-form-forgot",to:"/forgot-password",style:{float:"right"},children:"Forgot password"})]}),Object(i.jsxs)(f.a.Item,{children:[Object(i.jsx)(w.a,{type:"primary",htmlType:"submit",className:"login-form-button",disabled:b,children:b?Object(i.jsx)(N.a,{}):Object(i.jsx)(i.Fragment,{children:"Log In"})}),"Or ",Object(i.jsx)(o.b,{to:"/signUp",children:"register now!"})]})]})]})},U=n(5);var R=function(e){var t=E().signUp,n=Object(r.useState)(null),a=Object(p.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)(!1),u=Object(p.a)(l,2),d=u[0],b=u[1],h=Object(j.f)(),x={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function k(){return(k=Object(O.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Received values of form: ",n),b(!0),e.prev=2,e.next=5,t(n.email,n.password,n.nickname);case 5:s(null),h.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),s("Error creating account");case 12:b(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{style:{minWidth:"500px"},children:[Object(i.jsx)("h2",{style:{textAlign:"center",marginBottom:"60"},children:"Sign Up"}),c&&Object(i.jsx)(g.a,{type:"error",message:c,style:{textAlign:"center"}}),Object(i.jsxs)(f.a,Object(U.a)(Object(U.a)({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),{},{name:"register",onFinish:function(e){return k.apply(this,arguments)},initialValues:{prefix:"86"},scrollToFirstError:!0,children:[Object(i.jsx)(f.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(i.jsx)(y.a,{})}),Object(i.jsx)(f.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"The password should be at least 6 characters long!"}],hasFeedback:!0,children:Object(i.jsx)(y.a.Password,{})}),Object(i.jsx)(f.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}},{min:6,message:"Password must be at least 6 characters long!"}],children:Object(i.jsx)(y.a.Password,{})}),Object(i.jsx)(f.a.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(i.jsx)(y.a,{})}),Object(i.jsx)(f.a.Item,Object(U.a)(Object(U.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},x),{},{children:Object(i.jsxs)(v.a,{children:["I have read the ",Object(i.jsx)("a",{href:"",children:"agreement"})]})})),Object(i.jsx)(f.a.Item,Object(U.a)(Object(U.a)({},x),{},{children:Object(i.jsx)(w.a,{type:"primary",htmlType:"submit",disabled:d,children:d?Object(i.jsx)(N.a,{}):Object(i.jsx)(i.Fragment,{children:"Register"})})})),Object(i.jsx)(f.a.Item,{children:Object(i.jsxs)("p",{children:["Already have an account? ",Object(i.jsx)(o.b,{to:"/login",children:"Log In"})]})})]}))]})},L=n(259),B=n(264),W=n(258),q=n(267),D=n(268),V=(n(139),n(250),n(159));var z=function(e){var t=y.a.TextArea,n=M(),r=n.currentNote,a=n.setCurrentDisplayPage,c=n.saveNote,s=n.onCancelClick;return Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h2",{children:"Editor"}),Object(i.jsx)(y.a,{id:"notetitle",defaultValue:r&&r[0].title,placeholder:"Note Title",style:{maxWidth:"200px",textAlign:"center",marginBottom:"5px"},maxLength:20,minLength:1}),Object(i.jsx)(t,{id:"notetext",minLength:1,rows:10,defaultValue:r&&r[0].text,placeholder:"Note description",allowClear:!0}),Object(i.jsxs)(B.b,{style:{marginTop:"10px"},children:[Object(i.jsx)(w.a,{style:{marginRight:"10px"},type:"primary",onClick:s,children:"Cancel"}),Object(i.jsx)(w.a,{style:{marginRight:"10px"},type:"primary",onClick:function(){return function(){var e=document.getElementById("notetitle").value,t=document.getElementById("notetext").value;""!=e&&""!=t?c({title:e,text:t},!!r)?(V.b.success("Note Saved"),a(Object(i.jsx)(J,{}),"1")):V.b.error("File name already exists!"):V.b.error("Please fill in all the fields")}()},children:"Save"})]})]})},K=a.a.createContext();function M(){return Object(r.useContext)(K)}function H(e){var t=e.children,n=Object(r.useState)([{title:"Welcome",text:"Welcome to NoteIt"},{title:"Edit Me",text:"Try editing me"}]),a=Object(p.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)([]),o=Object(p.a)(l,2),j=o[0],u=o[1],d=Object(r.useState)(null),b=Object(p.a)(d,2),h=b[0],x=b[1],m=Object(r.useState)(),O=Object(p.a)(m,2),g=O[0],f=O[1],y=Object(r.useState)("1"),v=Object(p.a)(y,2),w=v[0],N=v[1],k=Object(r.useState)(null),P=Object(p.a)(k,2),I=P[0],C=P[1],F={Notes:c,currentNote:h,deletedNotes:j,currentPage:g,siderKey:w,error:I,setCurrentDisplayPage:function(e,t){f(e),N(t)},setChosenNote:function(e){x([c[e],e])},saveNote:function(e,t){var n=c.slice();try{if(t){if(n.filter((function(t,n){return t.title===e.title&&n!=h[1]})).length>0)return C("File name already exists"),!1;n[h[1]]=e}else{if(n.filter((function(t){return t.title===e.title})).length>0)return C("File name already exists"),!1;n.push(e)}return s(n),x(null),!0}catch(r){return C("Error saving file"),!1}},editNote:function(e,t){x([c[t],t]),f(Object(i.jsx)(z,{})),N("2"),e.stopPropagation()},deleteNote:function(e,t){var n=c.slice(),r=n[t];n.splice(t,1),s(n);var a=j.slice();a.push(r),u(a),e.stopPropagation()},newNote:function(){x(null),f(Object(i.jsx)(z,{})),N("2")},onCancelClick:function(){x(null),f(Object(i.jsx)(J,{})),N("1")}};return Object(i.jsx)(K.Provider,{value:F,children:t})}var _=function(e){var t=M(),n=t.Notes,a=t.editNote,c=t.deleteNote,s=L.a.Panel,l=Object(r.useState)(!1),o=Object(p.a)(l,2),j=o[0],u=o[1];if(Object(r.useEffect)((function(){u(!0),u(!1)}),[]),n.length>0)var d=n.map((function(e,t){return Object(i.jsx)(i.Fragment,{children:j?Object(i.jsx)(W.a,{}):Object(i.jsx)(s,{header:e.title,extra:(n=t,Object(i.jsxs)(B.b,{size:"large",children:[j?Object(i.jsx)(N.a,{}):Object(i.jsx)(q.a,{onClick:function(e){return a(e,n)}}),j?Object(i.jsx)(N.a,{}):Object(i.jsx)(D.a,{onClick:function(e){return c(e,n)}})]})),children:Object(i.jsx)("div",{children:e.text})},t)});var n}));else d=Object(i.jsx)("h2",{style:{textAlign:"center"},children:"Make new note to get started!"});return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(L.a,{style:{maxWidth:"600px",margin:"0px auto"},children:d})})};var J=function(e){var t=M().newNote;return Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)("h3",{style:{textAlign:"center"},children:"My Notes"}),Object(i.jsx)(w.a,{type:"primary",onClick:function(){return t()},style:{float:"left"},children:"New Note"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(_,{style:{marginTop:"10px",marginLeft:"auto",marginRight:"auto"}})]})},Q=n(261),Y=n(272),G=n(111),X=n(273),Z=n(263),$=n(269),ee=n(270),te=n(271);n(140);var ne=function(e){var t=E(),n=t.currentUser,r=t.logout,a=Object(j.f)();function c(){return(c=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r();case 3:a.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),V.b.error("Error occured while logging out!");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var s=Object(i.jsxs)(Q.a,{children:[Object(i.jsx)(Q.a.Item,{disabled:!0,children:Object(i.jsx)(o.b,{target:"_blank",rel:"noopener noreferrer",to:"/profile",children:"Profile"})}),Object(i.jsx)(Q.a.Item,{icon:Object(i.jsx)($.a,{}),disabled:!0,children:Object(i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"",children:"Settings"})}),Object(i.jsx)(Q.a.Item,{danger:!0,onClick:function(){return function(){return c.apply(this,arguments)}()},children:"Log out"})]});return Object(i.jsx)(Z.a,{overlay:s,icon:Object(i.jsx)(ee.a,{}),children:Object(i.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},style:{color:"white",float:"right"},children:[Object(i.jsx)(te.a,{}),"Welcome ",n&&n.username]})})};var re=function(){return Object(i.jsx)("h2",{children:"About Us"})};n(251);var ae=function(e){var t=M().deletedNotes,n=L.a.Panel,a=Object(r.useState)(!1),c=Object(p.a)(a,2),s=c[0],l=c[1];if(Object(r.useEffect)((function(){l(!0),l(!1)}),[]),t.length>0)var o=t.map((function(e,t){return Object(i.jsx)(i.Fragment,{children:s?Object(i.jsx)(W.a,{}):Object(i.jsx)(n,{header:e.title,children:Object(i.jsx)("div",{children:e.text})},t)})}));else o=Object(i.jsx)("h2",{style:{textAlign:"center"},children:"You dont have any deleted Notes"});return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{style:{textAlign:"center"},children:"Deleted Notes"}),Object(i.jsx)(L.a,{style:{maxWidth:"600px",margin:"0px auto"},children:o})]})},ce=u.a.Header,se=u.a.Sider,ie=u.a.Content,le=u.a.Footer;var oe=function(e){var t=M(),n=t.siderKey,a=t.currentPage,c=t.setCurrentDisplayPage,s=E().currentUser,l=Object(j.f)();return Object(r.useEffect)((function(){null==s&&l.push("/login"),c(Object(i.jsx)(J,{}),"1")}),[]),Object(i.jsxs)(u.a,{children:[Object(i.jsx)(ce,{className:"header",style:{textAlign:"center"},children:Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h2",{style:{color:"white",display:"inline"},children:"Note It"}),Object(i.jsx)(ne,{})]})}),Object(i.jsxs)(u.a,{children:[Object(i.jsx)(se,{width:200,className:"site-layout-background",children:Object(i.jsxs)(Q.a,{mode:"inline",theme:"dark",openKeys:[n],selectedKeys:[n],style:{height:"100%",borderRight:0},children:[Object(i.jsx)(Q.a.Item,{onClick:function(){return c(Object(i.jsx)(J,{}),"1")},icon:Object(i.jsx)(Y.a,{}),children:"My Notes"},"1"),Object(i.jsx)(Q.a.Item,{onClick:function(){return c(Object(i.jsx)(z,{}),"2")},icon:Object(i.jsx)(q.a,{}),children:"Editor"},"2"),Object(i.jsx)(Q.a.Item,{onClick:function(){return c(Object(i.jsx)(re,{}),"3")},icon:Object(i.jsx)(G.a,{}),children:"About"},"3"),Object(i.jsx)(Q.a.Item,{onClick:function(){return c(Object(i.jsx)(ae,{}),"4")},icon:Object(i.jsx)(X.a,{}),children:"Deleted Notes"},"4")]})}),Object(i.jsx)(u.a,{style:{padding:"0 24px 24px"},children:Object(i.jsxs)(ie,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:600},children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"User email:"})," ",s&&s.email]}),a]})})]}),Object(i.jsx)(le,{style:{fontSize:"30px",color:"red",textAlign:"center"},children:"This is under development!"})]})};var je=function(e){var t=E(),n=(t.currentUser,t.resetPassword),a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],l=c[1],j=Object(r.useState)(""),u=Object(p.a)(j,2),d=u[0],b=u[1],h=Object(r.useState)(!1),x=Object(p.a)(h,2),v=x[0],P=x[1];function I(){return(I=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,n(t.email);case 4:l(""),b("Check your email for the password reset link."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l("Failed to send email!");case 11:P(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{style:{minWidth:"300px"},children:[Object(i.jsx)("h2",{style:{textAlign:"center",marginBottom:"60"},children:"Reset Password"}),s&&Object(i.jsx)(g.a,{type:"error",message:s}),d&&Object(i.jsx)(g.a,{type:"success",message:d}),Object(i.jsxs)(f.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){return I.apply(this,arguments)},children:[Object(i.jsx)(f.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(i.jsx)(y.a,{prefix:Object(i.jsx)(k.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(i.jsxs)(f.a.Item,{children:[Object(i.jsx)(w.a,{type:"primary",htmlType:"submit",className:"login-form-button",disabled:v,children:v?Object(i.jsx)(N.a,{}):Object(i.jsx)(i.Fragment,{children:"Send Email"})}),Object(i.jsx)(o.b,{to:"/login",style:{fontSize:"15px"},children:"Log in"})]})]})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(A,{children:Object(i.jsx)(H,{children:Object(i.jsx)(o.a,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(oe,{page:Object(i.jsx)(J,{})})}),Object(i.jsx)(j.a,{path:"/login",children:Object(i.jsx)(h,{display:Object(i.jsx)(T,{})})}),Object(i.jsx)(j.a,{exact:!0,path:"/signUp",children:Object(i.jsx)(h,{display:Object(i.jsx)(R,{})})}),Object(i.jsx)(j.a,{path:"/forgot-password",children:Object(i.jsx)(h,{display:Object(i.jsx)(je,{})})}),Object(i.jsx)(j.a,{path:"/",children:"ERROR 404 Page not found"})]})})})})}),document.getElementById("root")),l()},89:function(e,t,n){}},[[252,1,2]]]);
//# sourceMappingURL=main.e44a0eae.chunk.js.map