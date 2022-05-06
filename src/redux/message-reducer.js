const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}
 export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody;
            state.newMessageBody = '';
            stateCopy.messagesData = [state.messagesData];
            stateCopy.messagesData.push({ id: 6, message: body })
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_POST_BODY, body: body })

