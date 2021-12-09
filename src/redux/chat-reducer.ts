import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageType} from "../api/chat-api";
import {Dispatch} from "redux";

const MESSAGES_RECEIVED = 'SN/CHAT/MESSAGES_RECEIVED';
const STATUS_CHANGED = 'SN/CHAT/STATUS_CHANGED';

type StatusType = 'pending' | 'ready'

const initialState = {
    messages: [] as Array<ChatMessageType>,
    status: 'pending' as StatusType
}

type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsType>;

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    messagesReceived: (messages: Array<ChatMessageType>) => ({ type: MESSAGES_RECEIVED, payload: { messages } } as const),
    statusChanged: (status: StatusType) => ({ type: STATUS_CHANGED, payload: { status } } as const),

}

let _newMessageHandler: ((messages: Array<ChatMessageType>) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages));
        }
    }
    return _newMessageHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe(newMessageHandlerCreator(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unSubscribe(newMessageHandlerCreator(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}


export default chatReducer;