import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [{id: 1, message: "Hi how are you?"}, {id: 2, message: "What did you do yesterday?"}, {id: 3, message: "Yes, sure"}],
            dialogs: [{id: 1, name: "Dima"}, {id: 2, name: "Sveta"}, {id: 3, name: "Vika"}, {id: 4, name: "Masha"}],
            newMessageBody: 'test'
        },
        sideBar: {
            friends: [{id: 1, name: "Sveta"}, {id: 2, name: "Vika"}, {id: 3, name: "Masha"}]
        }
    },
    _callSubscriber() {
        console.log('no subscribers');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {  // action-объект { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }
}

// export const addPost = () => {
//     const newPost = {id: 5, message: state.profilePage.newPostText, likeCount: 0};
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = newText => {   // сидит текущее значение инпута
//     state.profilePage.newPostText = newText;
//     // вызываем subscriber,если subscriber не был переопределён вызовется console.log('no subscribers'), но если кто-то
//     // подписался и отдал своего обсервера(rerenderEntireTree из validators.js) и получается мы вызываем rerenderEntireTree из validators.js как-будто
//     rerenderEntireTree(state);
// }
//
// export const subscribe = observer => {
//     rerenderEntireTree = observer;
// }

export default store;
