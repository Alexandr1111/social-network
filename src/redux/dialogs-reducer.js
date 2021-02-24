const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = ( state, action ) => {
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
