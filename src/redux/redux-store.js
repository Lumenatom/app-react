import { combineReducers, legacy_createStore as createStore } from "redux";
import { messageReducer } from "./message-reducer";
import { profileReducer } from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;

export default store;