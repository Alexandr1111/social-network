import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>    {/* redux-form событие с e.preventDefault() чтобы страница не перезагружалась */}
            <div>
                <Field name='email' placeholder='Email' component={Input} validate={[required]} />
            </div>
            <div>
                <Field name='password' placeholder='Password' component={Input} validate={[required]} />
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' /> remember me
            </div>
            {props.error &&
            <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { login })(Login);
