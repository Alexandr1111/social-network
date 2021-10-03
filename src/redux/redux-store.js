import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";  // своё название любое
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer   // Обязательно должно быть именно form
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
