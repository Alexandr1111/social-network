(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(43),a=n(3),c="SN/DIALOGS/SEND-MESSAGE",s={messages:[{id:1,message:"Hi how are you?"},{id:2,message:"What did you do yesterday?"},{id:3,message:"Yes, sure"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Sveta"},{id:3,name:"Vika"},{id:4,name:"Masha"}]},o={sendMessage:function(e){return{type:c,newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type===c){var n={id:4,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])})}return e}},115:function(e,t,n){"use strict";t.a=n.p+"static/media/user.43e64566.png"},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3Tunq",selectedPage:"Users_selectedPage__1dWid"}},19:function(e,t,n){e.exports={nav:"Navbar_nav__25szF",item:"Navbar_item__DmRP0",active:"Navbar_active__1Vami"}},291:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(65),s=n.n(c),o=n(11),i=n(94),u=n(103),f=n(10),l=n.n(f),j=n(15),d=n(43),p=n(3),b=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),r):e}))},h=n(8),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return h.b.get("users/?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},O=function(e){return h.b.post("follow/".concat(e)).then((function(e){return e.data}))},x=function(e){return h.b.delete("follow/".concat(e)).then((function(e){return e.data}))},g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:"FOLLOW",userId:e}},w=function(e){return{type:"UNFOLLOW",userId:e}},P=function(e){return{type:"SET_USERS",users:e}},m=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},D=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},C=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},y=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},I=n(33),L=function(){return h.b.get("auth/me").then((function(e){return e.data}))},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.b.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},R=function(){return h.b.delete("auth/login").then((function(e){return e.data}))},H=function(){return h.b.get("security/get-captcha-url").then((function(e){return e.data}))},T="SN/AUTH/SET_USER_DATA",N="SN/AUTH/GET_CAPTCHA_URL_SUCCESS",U={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},M=function(e,t,n,r){return{type:T,payload:{userId:e,email:t,login:n,isAuth:r}}},X=function(e){return{type:N,captchaUrl:e}},B=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:(n=e.sent).resultCode===h.a.Success&&(r=n.data,a=r.id,c=r.email,s=r.login,t(M(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n=e.sent,r=n.url,t(X(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(p.a)(Object(p.a)({},e),t.payload);case N:return Object(p.a)(Object(p.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},W="SN/APP/SET-INITIALIZED-SUCCESS",F={initialized:!1},V=function(){return{type:W}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return t.type===W?Object(p.a)(Object(p.a)({},e),{},{initialized:!0}):e},K=n(132),q=n(128),Q=Object(o.c)({profilePage:i.b,dialogsPage:u.b,usersPage:S,auth:k,app:G,form:q.a}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Z=Object(o.e)(Q,Y(Object(o.a)(K.a))),_=n(35),J=n(36),$=n(38),ee=n(37),te=n(19),ne=n.n(te),re=n(14),ae=n(1),ce=function(){return Object(ae.jsxs)("nav",{className:ne.a.nav,children:[Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/profile",activeClassName:ne.a.active,children:"Profile"})}),Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/dialogs",activeClassName:ne.a.active,children:"Messages"})}),Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/users",activeClassName:ne.a.active,children:"Users"})}),Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/news",activeClassName:ne.a.active,children:"News"})}),Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/music",activeClassName:ne.a.active,children:"Music"})}),Object(ae.jsx)("div",{className:ne.a.item,children:Object(ae.jsx)(re.b,{to:"/settings",activeClassName:ne.a.active,children:"Settings"})})]})},se=n(12),oe=function(){return Object(ae.jsx)("div",{children:"music"})},ie=function(){return Object(ae.jsx)("div",{children:"news"})},ue=n(16),fe=n(93),le=n(71),je=n.n(le),de=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],f=1;f<=i;f++)u.push(f);var l=Math.ceil(i/o),j=Object(r.useState)(1),d=Object(fe.a)(j,2),p=d[0],b=d[1],h=(p-1)*o+1,A=p*o;return Object(ae.jsxs)("div",{className:je.a.paginator,children:[p>1&&Object(ae.jsx)("button",{onClick:function(){return b(p-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=A})).map((function(e){return Object(ae.jsx)("span",{className:"".concat(je.a.page," ").concat(a===e&&je.a.selectedPage),onClick:function(){return c(e)},children:e})})),l>p&&Object(ae.jsx)("button",{onClick:function(){return b(p+1)},children:"NEXT"})]})},pe=n(135),be=n.n(pe),he=n(115),Ae=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(ae.jsxs)("div",{children:[Object(ae.jsxs)("span",{children:[Object(ae.jsx)("div",{children:Object(ae.jsx)(re.b,{to:"/profile/".concat(t.id),children:Object(ae.jsx)("img",{src:t.photos.small?t.photos.small:he.a,alt:"",className:be.a.userPhoto})})}),Object(ae.jsx)("div",{children:t.followed?Object(ae.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},children:"Unfollow"}):Object(ae.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},children:"Follow"})})]}),Object(ae.jsxs)("span",{children:[Object(ae.jsxs)("span",{children:[Object(ae.jsx)("div",{children:t.name}),Object(ae.jsx)("div",{children:t.status})]}),Object(ae.jsxs)("span",{children:[Object(ae.jsx)("div",{children:"user.location.country"}),Object(ae.jsx)("div",{children:"user.location.city"})]})]})]})},Oe=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.users,s=e.follow,o=e.unfollow,i=e.followingInProgress;return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(de,{currentPage:r,onPageChanged:a,totalItemsCount:t,pageSize:n}),c.map((function(e){return Object(ae.jsx)(Ae,{user:e,followingInProgress:i,follow:s,unfollow:o},e.id)}))]})},xe=n(50),ge=n(136),ve=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},De=function(e){return e.usersPage.isFetching},Ce=function(e){return e.usersPage.followingInProgress},ye=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(_.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.totalUsersCount,r=e.pageSize,a=e.currentPage,c=e.isFetching,s=e.followingInProgress,o=e.follow,i=e.unfollow;return Object(ae.jsxs)(ae.Fragment,{children:[c?Object(ae.jsx)(xe.a,{}):null,Object(ae.jsx)(Oe,{totalUsersCount:n,pageSize:r,currentPage:a,users:t,onPageChanged:this.onPageChanged,isFetching:c,followingInProgress:s,follow:o,unfollow:i})]})}}]),n}(r.Component),Se=Object(o.d)(Object(ue.b)((function(e){return{users:ve(e),pageSize:we(e),totalUsersCount:Pe(e),currentPage:me(e),isFetching:De(e),followingInProgress:Ce(e)}}),{getUsers:function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(r,a){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C(!0)),r(m(e)),n.next=4,A(e,t);case 4:c=n.sent,r(C(!1)),r(P(c.items)),r(D(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y(!0,e)),t.prev=1,t.next=4,O(e);case 4:t.sent.resultCode===h.a.Success&&n(v(e)),n(y(!1,e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),alert("error");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y(!0,e)),t.next=3,x(e);case 3:t.sent.resultCode===h.a.Success&&n(w(e)),n(y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ye),Ie=n(55),Le=n.n(Ie),Ee=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(ae.jsxs)("header",{className:Le.a.header,children:[Object(ae.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"logo"}),Object(ae.jsx)("div",{className:Le.a.loginBlock,children:t?Object(ae.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[n,Object(ae.jsx)("input",{type:"button",className:Le.a.btn,onClick:r,value:"Log out"})]}):Object(ae.jsx)(re.b,{to:"/login",className:Le.a.btn,children:"Login"})})]})},Re=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(ae.jsx)(Ee,Object(p.a)({},this.props))}}]),n}(r.Component),He=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:e.sent.resultCode===h.a.Success&&t(M(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Re),Te=n(126),Ne=n(127),Ue=n(63),Me=n(67),Xe=n(47),Be=n.n(Xe),ze=Object(Ne.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(ae.jsxs)("form",{onSubmit:t,children:["    ",Object(ae.jsx)("div",{children:Object(ae.jsx)(Te.a,{name:"email",placeholder:"Email",component:Ue.a,validate:[Me.b]})}),Object(ae.jsx)("div",{children:Object(ae.jsx)(Te.a,{name:"password",placeholder:"Password",component:Ue.a,validate:[Me.b]})}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)(Te.a,{name:"rememberMe",component:"input",type:"checkbox"})," remember me"]}),r&&Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("img",{src:r,alt:""}),Object(ae.jsx)(Te.a,{name:"captcha",placeholder:"input captcha...",component:Ue.a,validate:[Me.b]})]}),n&&Object(ae.jsx)("div",{className:Be.a.formSummaryError,children:n}),Object(ae.jsx)("div",{children:Object(ae.jsx)("button",{children:"Login"})})]})})),ke=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(j.a)(l.a.mark((function a(c){var s,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E(e,t,n,r);case 2:if((s=a.sent).resultCode!==h.a.Success){a.next=8;break}return a.next=6,c(B());case 6:a.next=13;break;case 8:if(s.resultCode!==h.a.CaptchaIsRequired){a.next=11;break}return a.next=11,c(z());case 11:o=s.messages.length?s.messages[0]:"Some error",c(Object(I.a)("login",{_error:o}));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,r=e.captchaUrl;return n?Object(ae.jsx)(se.a,{to:"/profile"}):Object(ae.jsxs)("div",{children:[Object(ae.jsx)("h1",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(ae.jsx)(ze,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r})]})})),We=(n(291),a.a.Suspense),Fe=a.a.lazy,Ve=Fe((function(){return n.e(4).then(n.bind(null,299))})),Ge=Fe((function(){return n.e(3).then(n.bind(null,298))})),Ke=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ae.jsxs)("div",{className:"app-wrapper",children:[Object(ae.jsx)(He,{}),Object(ae.jsx)(ce,{}),Object(ae.jsxs)("div",{className:"app-wrapper-content",children:[Object(ae.jsxs)(We,{fallback:Object(ae.jsx)(xe.a,{}),children:[Object(ae.jsx)(se.b,{path:"/profile/:userId?",render:function(){return Object(ae.jsx)(Ge,{})}}),Object(ae.jsx)(se.b,{exact:!0,path:"/dialogs",render:function(){return Object(ae.jsx)(Ve,{})}})]}),Object(ae.jsx)(se.b,{path:"/users",render:function(){return Object(ae.jsx)(Se,{})}}),Object(ae.jsx)(se.b,{path:"/news",component:ie}),Object(ae.jsx)(se.b,{path:"/music",component:oe}),Object(ae.jsx)(se.b,{path:"/login",component:ke})]})]}):Object(ae.jsx)(xe.a,{})}}]),n}(r.Component),qe=Object(o.d)(se.f,Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e(V())}))}}}))(Ke);s.a.render(Object(ae.jsx)(re.a,{children:Object(ae.jsx)(ue.a,{store:Z,children:Object(ae.jsx)(qe,{})})}),document.getElementById("root"))},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__E9CiO",error:"FormsControls_error__2cgCt",formSummaryError:"FormsControls_formSummaryError__gtRpS"}},50:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.30e900c6.gif",a=n(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"preloader"})})}},55:function(e,t,n){e.exports={header:"Header_header__1MZ7r",loginBlock:"Header_loginBlock__3BN1t",btn:"Header_btn__1enWH"}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(3),a=(n(0),n(47)),c=n.n(a),s=n(1),o=function(e){var t=e.meta.error&&e.meta.touched;return Object(s.jsxs)("div",{className:"".concat(c.a.formControl," ").concat(t?c.a.error:""),children:[Object(s.jsx)("div",{children:e.children}),t&&Object(s.jsx)("span",{children:e.meta.error})]})},i=function(e){var t=e.input,n=(e.meta,e.restProps);return Object(s.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)(Object(r.a)({},t),e),n))}))},u=function(e){var t=e.input,n=(e.meta,e.restProps);return Object(s.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},t),e),n))}))}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__3lYu0",page:"Paginator_page__3bLuB",selectedPage:"Paginator_selectedPage__LaTfF"}},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var r,a=n(130),c=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"97f1d028-7518-43ef-85bd-dd2bcb1ec8e1"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return D})),n.d(t,"g",(function(){return C})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return S}));var r=n(69),a=n(129),c=n(10),s=n.n(c),o=n(15),i=n(43),u=n(3),f=n(33),l=n(8),j=function(e){return l.b.get("profile/".concat(e)).then((function(e){return e.data}))},d=function(e){return l.b.get("profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.b.put("profile/status/",{status:e}).then((function(e){return e.data}))},b=function(e){var t=new FormData;return t.append("image ",e),l.b.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},h=function(e){return l.b.put("profile/",e).then((function(e){return e.data}))},A="SN/PROFILE/ADD_POST",O="SN/PROFILE/SET_USER_PROFILE",x="SN/PROFILE/SET_STATUS",g="SN/PROFILE/DELETE_POST",v="SN/PROFILE/SAVE_PHOTO_SUCCESS",w={posts:[{id:1,message:"\u0425\u0430\u0439, \u044d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likeCount:4},{id:2,message:"\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f, \u0436\u0434\u0438 \u043c\u0435\u043d\u044f!\u2665",likeCount:18}],profile:null,status:"",newPostText:""},P={addPostActionCreator:function(e){return{type:A,newPostText:e}},setUserProfile:function(e){return{type:O,profile:e}},setStatus:function(e){return{type:x,status:e}},deletePost:function(e){return{type:g,postId:e}},savePhotoSuccess:function(e){return{type:v,photos:e}}},m=function(e){return function(){var t=Object(o.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:r=t.sent,n(P.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(o.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(P.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(o.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:t.sent.resultCode===l.a.Success&&n(P.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(o.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:(r=t.sent).resultCode===l.a.Success&&n(P.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(s.a.mark((function t(n,c){var o,i,u,j,d,p,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c().auth.userId,t.next=3,h(e);case 3:if((i=t.sent).resultCode!==l.a.Success){t.next=13;break}if(null==o){t.next=10;break}return t.next=8,n(m(o));case 8:t.next=11;break;case 10:throw new Error('userId can"t be null');case 11:t.next=17;break;case 13:u=i.messages,j=Object(a.a)(u);try{for(j.s();!(d=j.n()).done;)p=d.value,b=p.slice(0,-1).toLowerCase().split("(")[1].split("->")[1],n(Object(f.a)("edit-profile",{contacts:Object(r.a)({},b,p.toLowerCase().includes(b)&&p)}))}catch(s){j.e(s)}finally{j.f()}return t.abrupt("return",Promise.reject("reject"));case 17:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n={id:5,message:t.newPostText,likeCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case O:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case x:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case g:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case v:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[292,1,2]]]);
//# sourceMappingURL=main.5e911288.chunk.js.map