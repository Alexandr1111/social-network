const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

// export type InitialStateType = {
//     messages: <Array>[string]
//     dialogs: string | null
// }

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    messages: [{id: 1, message: "Hi how are you?"}, {id: 2, message: "What did you do yesterday?"}, {id: 3, message: "Yes, sure"}] as Array<MessageType>,
    dialogs: [{id: 1, name: "Dima"}, {id: 2, name: "Sveta"}, {id: 3, name: "Vika"}, {id: 4, name: "Masha"}] as Array<DialogType>
}

type InitialStateType = typeof initialState;

const dialogsReducer = ( state = initialState, action: ActionsType ): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = { id: 4, message: action.newMessageBody };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

type ActionsType = SendMessageCreatorActionType;

export type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = ( newMessageBody: string ): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;
