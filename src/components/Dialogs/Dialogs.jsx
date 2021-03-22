import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

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
            <AddMessageFormRedux onSubmit={AddNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component='textarea' placeholder='Enter your message' />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
