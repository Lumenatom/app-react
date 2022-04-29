const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Как ты?', likeCount: 15 },
        { id: 2, message: 'pbsdsd', likeCount: 234 },
        { id: 3, message: 'How are you??????' },
      ],
      newPostText: 'Social...'
    },
    messagePage: {
      dialogsData: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Se' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Marina' },
        { id: 5, name: 'Marina' },
        { id: 6, name: 'Egor' },

      ],
      messagesData: [
        { id: 1, message: "how are you?" },
        { id: 2, message: "hahahahaha" },
        { id: 3, message: "heloy...." },
        { id: 4, message: "how are you?" },
      ],
      newMessageBody: ''
    },
  },
  _callSubscriber() {
    console.log(1212);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
      };
      this._state.profilePage.postsData.unshift(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_BODY) {
      this._state.messagePage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagePage.newMessageBody;
      this._state.messagePage.newMessageBody = '';
      this._state.messagePage.messagesData.push({ id: 6, message: body })
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_POST_BODY, body: body })


export default store;