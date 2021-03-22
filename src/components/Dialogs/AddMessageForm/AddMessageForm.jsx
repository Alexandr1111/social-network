import {Field, reduxForm} from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import React from "react";

const maxLength50 = maxLengthCreator(50);   // Форма не будет сабмитится просто

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message' />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export default AddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
