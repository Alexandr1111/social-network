import {getAuthUserData} from "./auth-reducer";    // это actionCreator

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

// export const setAuthUserData = ( userId, email, login, isAuth ) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

// export const getAuthUserData = () => {
//     return dispatch => {
//         authAPI.me()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     const { id, email, login } = data.data;
//                     dispatch(setAuthUserData(id, email, login, true));
//                 }
//             })
//     }
// }

export const initializeApp = () => {
    return dispatch => {
        const promise1 = dispatch(getAuthUserData());
        //dispatch(something)
        Promise.all([promise1])
            .then(() => {
                dispatch(initializedSuccess());
            })

    }
}

// export const login = ( email, password, rememberMe ) => {
//     return dispatch => {
//         authAPI.login(email, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(getAuthUserData());
//                 }
//                 else {
//                     const message = response.data.messages.length ? response.data.messages[0] : 'Some error';
//                     dispatch(stopSubmit('login', { _error: message }));  // 1)название формы, 2)проблемные поля и текст ошибки(можно по имени Field)
//                 }
//             })
//     }
// }
//
// export const logout = ( ) => {
//     return dispatch => {
//         authAPI.logout()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(setAuthUserData(null, null, null, false));
//                 }
//             })
//     }
// }

export default appReducer;
