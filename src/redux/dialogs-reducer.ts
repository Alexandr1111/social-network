import {InferActionsTypes} from "./redux-store";
import {DialogType, MessageType} from "../types/types";

const SEND_MESSAGE = 'SN/DIALOGS/SEND-MESSAGE';

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

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    sendMessage: (newMessageBody: string ) => ({ type: SEND_MESSAGE, newMessageBody } as const)
}

export default dialogsReducer;
