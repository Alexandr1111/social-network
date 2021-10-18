import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import c from "./ProfileInfo.module.css";
import s from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name</b>: <Field name='fullName' placeholder='Full name' component={Input} validate={[]} />
            </div>
            <div>
                <b>Looking for a job</b>: <Field name='lookingForAJob' component='input' type='checkbox' validate={[]} />
            </div>
            <div>
                <b>My professional skills</b>: <Field name='lookingForAJobDescription' placeholder='My professional skills' component={Textarea} validate={[]} />
            </div>
            <div>
                <b>About me</b>: <Field name='aboutMe' placeholder='About me' component={Textarea} validate={[]} />
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={c.contact}>
                            <b>{key}</b>: <Field name={"contacts." + key} placeholder={key} component={Input} validate={[]} />
                           </div>
            })}
            </div>
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}
            <button className={c.btn}>save</button>
        </form>
    )
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);