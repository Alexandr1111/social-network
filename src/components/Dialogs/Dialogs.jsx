import React, { createRef } from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsPage, updateNewMessageBody, sendMessage}) => {

    const newMessageElement = createRef();

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = () => {
        updateNewMessageBody(newMessageElement.current.value);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)}
            </div>
            <div className={c.messages}>
                {dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onNewMessageChange} value={dialogsPage.newMessageBody} />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;
