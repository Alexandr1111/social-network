import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";
import {AppStateType} from "../../redux/redux-store";

const LoginForm: FC<InjectedFormProps<LoginFormValuesType & LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>    {/* redux-form событие с e.preventDefault() чтобы страница не перезагружалась */}
            <div>
                <Field name='email' placeholder='Email' component={Input} validate={[required]} />
            </div>
            <div>
                <Field name='password' placeholder='Password' component={Input} validate={[required]} />
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' /> remember me
            </div>
            {captchaUrl &&
            <>
                <img src={captchaUrl} alt="" />
                <Field name='captcha' placeholder='input captcha...' component={Input} validate={[required]} />
            </>}
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm);

type LoginFormOwnPropsType = {
    captchaUrl?: string | null
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type CommonType = LoginFormOwnPropsType & MapStatePropsType & MapDispatchPropsType;

// Данные, собираемые формой
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: FC<CommonType> = ({login, isAuth, captchaUrl}) => {

    const onSubmit = ( formData: LoginFormValuesType ) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

const mapStateToProps = ( state: AppStateType ): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);
