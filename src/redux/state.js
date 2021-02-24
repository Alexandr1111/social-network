const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [{id: 1, message: "Hi how are you?"}, {id: 2, message: "What did you do yesterday?"}, {id: 3, message: "Yes, sure"}],
            dialogs: [{id: 1, name: "Dima"}, {id: 2, name: "Sveta"}, {id: 3, name: "Vika"}, {id: 4, name: "Masha"}],
            newMessageText: 'test'
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
        if (action.type === ADD_POST) {
            const newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            // вызываем subscriber,если subscriber не был переопределён вызовется console.log('no subscribers'), но если кто-то
            // подписался и отдал своего обсервера(rerenderEntireTree из index.js) и получается мы вызываем rerenderEntireTree из index.js как-будто
            this._callSubscriber(this._state);  // уведомить подписчка
        }
        else if (action.type === ADD_MESSAGE) {
            const newMessage = {id:4, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = text => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateMessageTextActionCreator = text => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
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
//     // подписался и отдал своего обсервера(rerenderEntireTree из index.js) и получается мы вызываем rerenderEntireTree из index.js как-будто
//     rerenderEntireTree(state);
// }
//
// export const subscribe = observer => {
//     rerenderEntireTree = observer;
// }

export default store;
