import React from "react";
import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <div className={c.dialog}>
            <img src="https://topmsg.ru/wp-content/uploads/whatsapp-avatar-1.png" alt=""/>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
