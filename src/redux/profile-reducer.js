import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    postsData: [
        { id: 1, message: 'Как ты?', likeCount: 15 },
        { id: 2, message: 'pbsdsd', likeCount: 234 },
        { id: 3, message: 'How are you??????' },
    ],

    profile: null,
    staus: '',
};
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (profileId) => (dispatch) => {
    usersAPI.getProfile(profileId).then((response) => {
        dispatch(setUserProfile(response.data));
    }
    )
}
export const getStatus = (profileId) => (dispatch) => {
    profileAPI.getStatus(profileId).then((response) => {
        dispatch(setStatus(response.data));
    }
    )
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0);
        dispatch(setStatus(status));
    }
    )
}




