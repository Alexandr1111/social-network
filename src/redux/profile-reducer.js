const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}],
    newPostText: 'it-kamasutra',
    profile: null
}

const profileReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: 5, message: state.newPostText, likeCount: 0 };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        case UPDATE_NEW_POST_TEXT:
            // вызываем subscriber,если subscriber не был переопределён вызовется console.log('no subscribers'), но если кто-то
            // подписался и отдал своего обсервера(rerenderEntireTree из index.js) и получается мы вызываем rerenderEntireTree из index.js как-будто
            // this._callSubscriber(this._state);  // уведомить подписчка
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
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

export const setUserProfile = profile => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export default profileReducer;