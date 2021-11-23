import c from "../Dialogs.module.css";
import React, {FC} from "react";
import {MessageType} from "../../../types/types";

const Message: FC<Omit<MessageType, 'id'>> = ({message}) => {
    return (
        <div className={c.message}>
            {message}
        </div>
    )
}

export default Message;
