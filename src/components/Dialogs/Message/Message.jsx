import c from "../Dialogs.module.css";
import React from "react";

const Message = ({message}) => {
    return (
        <div className={c.message}>
            {message}
        </div>
    )
}

export default Message;
