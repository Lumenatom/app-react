
let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Как ты?', likeCount: 15 },
        { id: 2, message: 'ахахахах', likeCount: 234 },
        { id: 3, message: 'How are you??????' },
      ]
    },
    messagePage: {
      dialogsData: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Se' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Marina' },
        { id: 5, name: 'Marina' },
        { id: 6, name: 'Egor' },
        { id: 7, name: 'Sergey' },
        { id: 8, name: 'Sergey' },
        { id: 9, name: 'Se' },
        { id: 10, name: 'Ivan' },
        { id: 11, name: 'Marina' },
        { id: 12, name: 'Marina' },
        { id: 13, name: 'Egor' },
        { id: 14, name: 'Sergey' }
      ],
      messagesData: [
        { id: 1, message: "how are you?" },
        { id: 2, message: "hahahahaha" },
        { id: 3, message: "heloy...." },
        { id: 4, message: "how are you?" },
        { id: 5, message: "heloy...." },
        { id: 6, message: "how are you?" },
      ]
    },
  },
  getState() {
    return this._state;
  },
  callSubscriber() {
    console.log(1212);
  },

  addPost(postMessage) {
    let newPost = {
      id: 5,
      message: postMessage,
      likeCount: 0
    };
    this._state.profilePage.postsData.unshift(newPost);
   this._callSubscriber(this._state);
  },

  addMessage(postMessage) {

    let newMessage = {
      id: 5,
      message: postMessage,
    };
    this._state.messagePage.messagesData.push(newMessage);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }



}




export default store;