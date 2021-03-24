import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <input type="button" onClick={props.logout} value="Log out" />
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
