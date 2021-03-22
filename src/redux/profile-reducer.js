import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}],
    profile: null,
    status: ''
}

const profileReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: 5, message: action.newPostText, likeCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = newPostText => ({ type: ADD_POST, newPostText });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userId => {
    return dispatch => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getStatus = userId => {
    return dispatch => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = status => {
    return dispatch => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export default profileReducer;
