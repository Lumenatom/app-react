import {combineReducers, legacy_createStore as createStore} from "redux";
import {messageReducer} from "./message-reducer";
import{ profileReducer} from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
});

let store = createStore(reducers);


export default store;