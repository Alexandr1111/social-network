import {getAuthUserData} from "./auth-reducer";
// import {ThunkType} from "./users-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";    // это actionCreator

const SET_INITIALIZED_SUCCESS = 'app/SET-INITIALIZED-SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

const appReducer = ( state = initialState, action: ActionsType ): InitialStateType => {
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

type ActionsType = InitializedSuccessActionType;

// let a: 'yoyo'
// a = 'yoyo'
//a = 'yoyo2' // ошибка

export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS    // тип равный значению константы
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS});

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const initializeApp = (): ThunkType => (dispatch) => {
        const promise1 = dispatch(getAuthUserData());
        //dispatch(something)
        Promise.all([promise1])
            .then(() => {
                dispatch(initializedSuccess());
            })

}

export default appReducer;
