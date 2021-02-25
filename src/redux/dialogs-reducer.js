const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [{id: 1, message: "Hi how are you?"}, {id: 2, message: "What did you do yesterday?"}, {id: 3, message: "Yes, sure"}],
    dialogs: [{id: 1, name: "Dima"}, {id: 2, name: "Sveta"}, {id: 3, name: "Vika"}, {id: 4, name: "Masha"}],
    newMessageBody: ''
}

const dialogsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = { id:4, message: state.newMessageBody }
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateMessageBodyCreator = body => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;
