import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import s from "./Header.module.css";

type P = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: FC<P> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>
                        {login}
                        <input type="button" onClick={logout} value="Log out" />
                      </div>
                    : <NavLink to={'/login'}>
                        Login
                      </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
