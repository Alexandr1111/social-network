import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import c from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src={logo} alt="logo" />
            <div className={c.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>
                        Login
                      </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
