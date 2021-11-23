import React, {FC} from "react";
import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem: FC<DialogItemType> = ({name, id}) => {
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
