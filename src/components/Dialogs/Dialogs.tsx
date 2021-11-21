import React, {FC} from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../types/types";
import AddMessageReduxForm from "./AddMessageForm/AddMessageForm";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    sendMessage: ( messageText: string ) => void
}

type NewMessageFormType = {
    newMessageBody: string
}

const Dialogs: FC<DialogsPropsType> = ({dialogs, messages, sendMessage}) => {

    const onSubmit = ( values: NewMessageFormType ) => { // сидят все данные полей после submit, обращаемся к name поля чтобы достать конкретное
        sendMessage(values.newMessageBody);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)}
            </div>
            <div className={c.messages}>
                {messages.map(m => <Message message={m.message} key={m.id} />)}
            </div>
            <AddMessageReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Dialogs;
