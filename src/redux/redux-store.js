import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import { messageReducer } from "./message-reducer";
import { profileReducer } from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;