const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [{id: 1, message: "Hi how are you?"}, {id: 2, message: "What did you do yesterday?"}, {id: 3, message: "Yes, sure"}],
    dialogs: [{id: 1, name: "Dima"}, {id: 2, name: "Sveta"}, {id: 3, name: "Vika"}, {id: 4, name: "Masha"}]
}

const dialogsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = { id: 4, message: action.newMessageBody };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = newMessageBody => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;
