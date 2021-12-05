import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type P = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: FC<P> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div style={{display: 'flex', alignItems: 'center'}}>
                        {login}
                        <input type="button" className={s.btn} onClick={logout} value="Log out" />
                      </div>
                    : <NavLink to={'/login'} className={s.btn}>
                        Login
                      </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
