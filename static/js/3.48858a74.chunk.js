(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{360:function(e,t,s){e.exports={profile:"ProfileInfo_profile__1Jaem",descriptionBlock:"ProfileInfo_descriptionBlock__2gyzB",mainPhoto:"ProfileInfo_mainPhoto__1nLwb",contact:"ProfileInfo_contact__2JW-A",contactValue:"ProfileInfo_contactValue__7_F_p",btn:"ProfileInfo_btn__35r8e"}},361:function(e,t,s){"use strict";function n(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}s.d(t,"a",(function(){return n}))},362:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2BACy",posts:"MyPosts_posts__2x3M3",btn:"MyPosts_btn__16twG"}},363:function(e,t,s){e.exports={item:"Post_item__1nQ7J"}},364:function(e,t,s){"use strict";s.r(t);var n=s(5),o=s(361),c=s(90),r=s(91),a=s(95),i=s(94),l=s(0),j=s(15),u=s(28),b=s(360),d=s.n(b),f=s(155),p=s(1),h=function(e){var t=Object(l.useState)(!1),s=Object(u.a)(t,2),n=s[0],o=s[1],c=Object(l.useState)(e.status),r=Object(u.a)(c,2),a=r[0],i=r[1];Object(l.useEffect)((function(){i(e.status)}),[e.status]);return Object(p.jsx)(p.Fragment,{children:n?Object(p.jsx)("span",{children:Object(p.jsx)("input",{value:a,onChange:function(e){i(e.target.value)},onBlur:function(){o(!1),e.updateStatus(a)},autoFocus:!0})}):Object(p.jsx)("span",{children:Object(p.jsx)("span",{onDoubleClick:function(){o(!0)},children:a||"-----"})})})},O=s(156),x=s(157),m=s(86),v=s(66),P=s.n(v),g=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",Object(p.jsx)(O.a,{name:"fullName",placeholder:"Full name",component:m.a,validate:[]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",Object(p.jsx)(O.a,{name:"lookingForAJob",component:"input",type:"checkbox",validate:[]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",Object(p.jsx)(O.a,{name:"lookingForAJobDescription",placeholder:"My professional skills",component:m.b,validate:[]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",Object(p.jsx)(O.a,{name:"aboutMe",placeholder:"About me",component:m.b,validate:[]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(e){return Object(p.jsxs)("div",{className:d.a.contact,children:[Object(p.jsx)("b",{children:e}),": ",Object(p.jsx)(O.a,{name:"contacts."+e,placeholder:e,component:m.a,validate:[]})]},e)}))]}),n&&Object(p.jsx)("div",{className:P.a.formSummaryError,children:n}),Object(p.jsx)("button",{className:d.a.btn,children:"save"})]})})),k=function(e){var t=e.profile,s=e.isOwner,n=e.activateEditMode;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"FullName"}),": ",t.fullName&&t.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription&&t.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",t.aboutMe&&t.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(p.jsx)(_,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),s&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:d.a.btn,onClick:n,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})},_=function(e){var t=e.contactTitle,s=e.contactValue;return Object(p.jsxs)("div",{className:d.a.contact,children:[Object(p.jsx)("b",{children:t}),": ",Object(p.jsx)("a",{className:d.a.contactValue,href:s,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:s})})]})},y=function(e){var t=e.profile,s=e.status,n=e.updateStatus,o=e.isOwner,c=e.savePhoto,r=e.saveProfile,a=Object(l.useState)(!1),i=Object(u.a)(a,2),j=i[0],b=i[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(p.jsx)("img",{src:t.photos.large||f.a,alt:"",className:d.a.mainPhoto}),o&&Object(p.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&c(e.target.files[0])}}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status"}),": ",Object(p.jsx)(h,{status:s,updateStatus:n})]}),j?Object(p.jsx)(g,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){return b(!1)}))}}):Object(p.jsx)(k,{profile:t,isOwner:o,activateEditMode:function(){return b(!0)}})]})]})]})},S=s(362),w=s.n(S),N=s(363),A=s.n(N),I=function(e){var t=e.message,s=e.likeCount;return Object(p.jsxs)("div",{className:A.a.item,children:[Object(p.jsx)("img",{src:"https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg",alt:""}),t,Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:[s,"\u2665"]})})]})},M=s(92),F=Object(M.a)(10),C=Object(x.a)({form:"addPost"})((function(e){var t=e.handleSubmit;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(O.a,{name:"newPostText",component:m.b,validate:[M.b,F]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:w.a.btn,type:"submit",children:"Add post"})})]})})),J=Object(l.memo)((function(e){var t=e.posts,s=e.addPost;return Object(p.jsxs)("div",{className:w.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)("div",{children:Object(p.jsx)(C,{onSubmit:function(e){s(e.newPostText)}})}),Object(p.jsx)("div",{className:w.a.posts,children:t.map((function(e){return Object(p.jsx)(I,{message:e.message,likeCount:e.likeCount},e.id)}))})]})})),B=s(125),D=function(e){return e.profilePage.posts},T=function(e){return e.profilePage.newPostText},V=Object(j.b)((function(e){return{posts:D(e),newPostText:T(e)}}),{addPost:B.a.addPostActionCreator})(J),E=s(71),U=function(e){var t=e.profile,s=e.status,n=e.updateStatus,o=e.isOwner,c=e.savePhoto,r=e.saveProfile;return t?Object(p.jsxs)("div",{className:d.a.profile,children:[Object(p.jsx)(y,{profile:t,isOwner:o,status:s,updateStatus:n,savePhoto:c,saveProfile:r}),Object(p.jsx)(V,{})]}):Object(p.jsx)(E.a,{})},z=s(18),L=s(17),G=["profile","status","updateStatus","savePhoto","saveProfile"],Q=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var e=this.props,t=e.profile,s=e.status,c=e.updateStatus,r=e.savePhoto,a=e.saveProfile,i=Object(o.a)(e,G);return Object(p.jsx)(U,Object(n.a)({profile:t,status:s,updateStatus:c,isOwner:!this.props.match.params.userId,savePhoto:r,saveProfile:a},i))}}]),s}(l.Component);t.default=Object(L.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:B.d,getStatus:B.c,updateStatus:B.g,savePhoto:B.e,saveProfile:B.f}),z.h)(Q)}}]);
//# sourceMappingURL=3.48858a74.chunk.js.map