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
    ]
}
export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: body }],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


