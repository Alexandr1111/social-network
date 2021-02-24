import React, { createRef } from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = ({store, dispatch}) => {

    const state = store.getState().dialogsPage

    const newMessageElement = createRef();

    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    }

    const onNewMessageChange = () => {
        dispatch(updateMessageBodyCreator(newMessageElement.current.value))
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={c.messages}>
                {state.messages.map(m => <Message message={m.message} />)}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onNewMessageChange} value={state.newMessageBody} />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;
