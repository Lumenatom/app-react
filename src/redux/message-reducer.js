const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

export const messageReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body })
            return state;
        default:
            return state;
    }
}