import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";    // это actionCreator

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
                // isAuth: action.isAuth
            };
        default:
            return state;
    }
}

export const setAuthUserData = ( userId, email, login, isAuth ) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});

export const getAuthUserData = () => {
    return dispatch => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const login = ( email, password, rememberMe ) => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
                else {
                    const message = response.data.messages.length ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', { _error: message }));  // 1)название формы, 2)проблемные поля и текст ошибки(можно по имени Field)
                }
            })
    }
}

export const logout = ( ) => {
    return dispatch => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;
