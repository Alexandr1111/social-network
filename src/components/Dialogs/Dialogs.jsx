import React, { createRef } from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";

const Dialogs = ({data, dispatch}) => {

    const newMessageElement = createRef();

    const onMessageChange = () => {
        dispatch(updateMessageTextActionCreator(newMessageElement.current.value))
    }

    const onAddMessage = () => {
        dispatch(addMessageActionCreator());
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {data.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={c.messages}>
                {data.messages.map(m => <Message message={m.message} />)}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={data.newMessageText} />
            </div>
            <div>
                <button onClick={onAddMessage}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
