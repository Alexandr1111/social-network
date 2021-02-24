const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = ( state, action ) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: 5, message: state.newPostText, likeCount: 0 };
            state.posts.push(newPost);
            state.newPostText = '';
            // this._callSubscriber(this._state);  // хочу сообщить внешнему миру что стейт изменился
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        // вызываем subscriber,если subscriber не был переопределён вызовется console.log('no subscribers'), но если кто-то
        // подписался и отдал своего обсервера(rerenderEntireTree из index.js) и получается мы вызываем rerenderEntireTree из index.js как-будто
        // this._callSubscriber(this._state);  // уведомить подписчка
            return state;
        default:
            return state;
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

export default profileReducer;
