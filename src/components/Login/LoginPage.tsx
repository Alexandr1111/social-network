import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors/login-selectors";

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

// type MapStatePropsType = {
//
// }
//
// type MapDispatchPropsType = {
//
// }
//
// type CommonType = LoginFormOwnPropsType & MapStatePropsType & MapDispatchPropsType;

// Данные, собираемые формой
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const LoginPage: FC = (props) => {

    const captchaUrl = useSelector(getCaptchaUrl);
    const isAuth = useSelector(getIsAuth);

    const dispatch = useDispatch();

    const onSubmit = ( formData: LoginFormValuesType ) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
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