import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import React, {FC} from "react";

// Данные, собираемые формой
type AddMessageFormValuesType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);   // Форма не будет сабмитится просто

let AddMessageForm: FC<InjectedFormProps<AddMessageFormValuesType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newMessageBody' component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<AddMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);