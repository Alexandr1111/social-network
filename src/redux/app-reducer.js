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

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
        const promise1 = dispatch(getAuthUserData());
        //dispatch(something)
        Promise.all([promise1])
            .then(() => {
                dispatch(initializedSuccess());
            })

}

export default appReducer;
