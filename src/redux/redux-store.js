import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import { messageReducer } from "./message-reducer";
import { profileReducer } from "./profile-reducer";
import usersReducer from "./users-reducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;

// thunkMiddleware