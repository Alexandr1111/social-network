(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,,,,function(e,s,t){e.exports={nav:"Navbar_nav__2t6jB",item:"Navbar_item__1WmbN",active:"Navbar_active__3R5Tk"}},,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3W1mq",dialogsItems:"Dialogs_dialogsItems__3nTdQ",dialog:"Dialogs_dialog__T8HSM",active:"Dialogs_active__ijEmk",messages:"Dialogs_messages__1akpd",message:"Dialogs_message__3dNHj"}},,,,,,,function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__3W8Xp",posts:"MyPosts_posts__3bcBe"}},,,function(e,s,t){e.exports={header:"Header_header__2v4Ub"}},,function(e,s,t){e.exports={item:"Post_item__1tGbM"}},function(e,s,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3Fzxi"}},,,,,function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),c=t(18),n=t.n(c),r="ADD-POST",o="UPDATE-NEW-POST-TEXT",l="ADD-MESSAGE",d="UPDATE-MESSAGE-TEXT",j={_state:{profilePage:{posts:[{id:1,message:"\u0425\u0430\u0439, \u044d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likeCount:4},{id:2,message:"\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f, \u0436\u0434\u0438 \u043c\u0435\u043d\u044f!\u2665",likeCount:18}],newPostText:"it-kamasutra"},dialogsPage:{messages:[{id:1,message:"Hi how are you?"},{id:2,message:"What did you do yesterday?"},{id:3,message:"Yes, sure"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Sveta"},{id:3,name:"Vika"},{id:4,name:"Masha"}],newMessageText:"test"},sideBar:{friends:[{id:1,name:"Sveta"},{id:2,name:"Vika"},{id:3,name:"Masha"}]}},_callSubscriber:function(){console.log("no subscribers")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){if(e.type===r){var s={id:5,message:this._state.profilePage.newPostText,likeCount:0};this._state.profilePage.posts.push(s),this._state.profilePage.newPostText="",this._callSubscriber(this._state)}else if(e.type===o)this._state.profilePage.newPostText=e.newText,this._callSubscriber(this._state);else if(e.type===l){var t={id:4,message:this._state.dialogsPage.newMessageText};this._state.dialogsPage.messages.push(t),this._state.dialogsPage.newMessageText="",this._callSubscriber(this._state)}else e.type===d&&(this._state.dialogsPage.newMessageText=e.newText,this._callSubscriber(this._state))}},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),a(e),i(e),c(e),n(e)}))},u=(t(27),t.p+"static/media/logo.6ce24c58.svg"),g=t(19),h=t.n(g),m=t(0),p=function(){return Object(m.jsx)("header",{className:h.a.header,children:Object(m.jsx)("img",{src:u,alt:"logo"})})},x=t(7),v=t.n(x),O=t(8),f=function(){return Object(m.jsxs)("nav",{className:v.a.nav,children:[Object(m.jsx)("div",{className:v.a.item,children:Object(m.jsx)(O.b,{to:"/profile",activeClassName:v.a.active,children:"Profile"})}),Object(m.jsx)("div",{className:v.a.item,children:Object(m.jsx)(O.b,{to:"/dialogs",activeClassName:v.a.active,children:"Messages"})}),Object(m.jsx)("div",{className:v.a.item,children:Object(m.jsx)(O.b,{to:"/news",activeClassName:v.a.active,children:"News"})}),Object(m.jsx)("div",{className:v.a.item,children:Object(m.jsx)(O.b,{to:"/music",activeClassName:v.a.active,children:"Music"})}),Object(m.jsx)("div",{className:v.a.item,children:Object(m.jsx)(O.b,{to:"/settings",activeClassName:v.a.active,children:"Settings"})})]})},_=t(16),w=t.n(_),P=t(21),T=t.n(P),N=function(e){var s=e.message,t=e.likeCount;return Object(m.jsxs)("div",{className:T.a.item,children:[Object(m.jsx)("img",{src:"https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg",alt:""}),s,Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:[t,"\u2665"]})})]})},k=function(e){var s=e.posts,t=e.newPostText,i=e.dispatch,c=Object(a.createRef)();return Object(m.jsxs)("div",{className:w.a.postsBlock,children:[Object(m.jsx)("h3",{children:"My posts"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("textarea",{ref:c,onChange:function(){var e=c.current.value;i(function(e){return{type:o,newText:e}}(e))},value:t})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){i({type:r})},children:"Add post"})})]}),Object(m.jsx)("div",{className:w.a.posts,children:s.map((function(e){return Object(m.jsx)(N,{message:e.message,likeCount:e.likeCount})}))})]})},S=t(22),M=t.n(S),y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",alt:""})}),Object(m.jsx)("div",{className:M.a.descriptionBlock,children:"ava + description"})]})},C=function(e){var s=e.posts,t=e.newPostText,a=e.dispatch;return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)(k,{posts:s,dispatch:a,newPostText:t})]})},D=t(9),B=t.n(D),E=function(e){var s=e.name,t=e.id;return Object(m.jsxs)("div",{className:B.a.dialog,children:[Object(m.jsx)("img",{src:"https://topmsg.ru/wp-content/uploads/whatsapp-avatar-1.png",alt:""}),Object(m.jsx)(O.b,{to:"/dialogs/".concat(t),children:s})]})},A=function(e){var s=e.message;return Object(m.jsx)("div",{className:B.a.message,children:s})},I=function(e){var s=e.data,t=e.dispatch,i=Object(a.createRef)();return Object(m.jsxs)("div",{className:B.a.dialogs,children:[Object(m.jsx)("div",{className:B.a.dialogsItems,children:s.dialogs.map((function(e){return Object(m.jsx)(E,{name:e.name,id:e.id})}))}),Object(m.jsx)("div",{className:B.a.messages,children:s.messages.map((function(e){return Object(m.jsx)(A,{message:e.message})}))}),Object(m.jsx)("div",{children:Object(m.jsx)("textarea",{ref:i,onChange:function(){var e;t((e=i.current.value,{type:d,newText:e}))},value:s.newMessageText})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){t({type:l})},children:"Add post"})})]})},F=t(2),W=(t(34),function(){return Object(m.jsx)("div",{children:"music"})}),H=(t(35),function(){return Object(m.jsx)("div",{children:"news"})}),G=function(e){var s=e.state,t=e.dispatch;return Object(m.jsx)(O.a,{children:Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsx)(p,{}),Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:"app-wrapper-content",children:[Object(m.jsx)(F.a,{exact:!0,path:"/dialogs",render:function(){return Object(m.jsx)(I,{data:s.dialogsPage,newMessageText:s.dialogsPage.newMessageText,dispatch:t})}}),Object(m.jsx)(F.a,{path:"/profile",render:function(){return Object(m.jsx)(C,{posts:s.profilePage.posts,dispatch:t,newPostText:s.profilePage.newPostText})}}),Object(m.jsx)(F.a,{path:"/news",component:H}),Object(m.jsx)(F.a,{path:"/music",component:W})]})]})})},R=function(e){n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(G,{state:e,dispatch:j.dispatch.bind(j)})}),document.getElementById("root"))};R(j.getState()),j.subscribe(R),b()}],[[36,1,2]]]);
//# sourceMappingURL=main.0e8638c6.chunk.js.map