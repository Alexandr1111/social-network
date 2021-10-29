import {getAuthUserData} from "./auth-reducer";    // это actionCreator

const SET_INITIALIZED_SUCCESS = 'app/SET-INITIALIZED-SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

// let a: 'yoyo'
// a = 'yoyo'
//a = 'yoyo2' // ошибка

export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS    // тип равный значению константы
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
        const promise1 = dispatch(getAuthUserData());
        //dispatch(something)
        Promise.all([promise1])
            .then(() => {
                dispatch(initializedSuccess());
            })

}

export default appReducer;
