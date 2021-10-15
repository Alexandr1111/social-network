import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";    // это actionCreator

const SET_USER_DATA = 'auth/SET_USER_DATA';

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
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = ( userId, email, login, isAuth ) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = ( email, password, rememberMe ) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    else {
        const message = response.data.messages.length ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));  // 1)название формы 2)проблемные поля и текст ошибки(_error - общая. Можно по имени Field)
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;