import {getAuthUserData} from "./auth-reducer";
import {BaseThunkType, InferActionsTypes} from "./redux-store";    // это actionCreator

const SET_INITIALIZED_SUCCESS = 'SN/APP/SET-INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsType>;

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

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    initializedSuccess: () => ({ type: SET_INITIALIZED_SUCCESS } as const)
}

// @ts-ignore
export const initializeApp = (): ThunkType => async (dispatch) => {
        const promise1 = dispatch(getAuthUserData());
        //dispatch(something)
        Promise.all([promise1])
            .then(() => {
                dispatch(actions.initializedSuccess());
            })
}

export default appReducer;
