import {ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {InferActionsTypes, BaseThunkType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const SET_USER_DATA = 'SN/AUTH/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsType>;

const authReducer = ( state = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean ) =>
        ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth }} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = ( email: string, password: string, rememberMe: boolean, captcha: any ): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData());
    }
    else {
        if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {   // captcha
            await dispatch(getCaptchaUrl());
        }
        const message = data.messages.length ? data.messages[0] : 'Some error';
        // @ts-ignore
        dispatch(stopSubmit('login', { _error: message }));  // 1)название формы 2)проблемные поля и текст ошибки(_error - общая. Можно по имени Field)
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;