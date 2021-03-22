import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = ({dialogsPage, sendMessage, isAuth}) => {

    const AddNewMessage = values => { // сидят все данные полей после submit, обращаемся к name поля чтобы достать конкретное
        sendMessage(values.newMessageBody);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)}
            </div>
            <div className={c.messages}>
                {dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)}
            </div>
            <AddMessageForm onSubmit={AddNewMessage} />
        </div>
    )
}


export default Dialogs;
