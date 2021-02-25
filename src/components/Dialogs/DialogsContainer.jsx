import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        // если на одной строке после <StoreContext.Consumer> будет фигурная скобка-выкинет ошибку, баг реакта !
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    const onNewMessageChange = body => {
                        store.dispatch(updateMessageBodyCreator(body))
                    }

                    return <Dialogs dialogsPage={state} sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
