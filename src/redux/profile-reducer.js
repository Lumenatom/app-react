import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postsData: [
        { id: 1, message: 'Как ты?', likeCount: 15 },
        { id: 2, message: 'pbsdsd', likeCount: 234 },
        { id: 3, message: 'How are you??????' },
    ],
    newPostText: '',
    profile: null
};
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (profileId) => (dispatch) => {
    usersAPI.getProfile(profileId).then((response) => {
        dispatch(setUserProfile(response.data));
    }
    )
}

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


