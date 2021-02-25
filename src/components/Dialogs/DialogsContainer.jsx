import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateMessageBodyCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = ({store}) => {

    const state = store.getState().dialogsPage;

    const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = body => {
        store.dispatch(updateMessageBodyCreator(body))
    }

    return (
        <Dialogs dialogsPage={state} sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} />
    )
}

export default DialogsContainer;
