import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ChatMessageType} from "../../api/chat-api";
import {Button} from "@mui/material";



const ChatPage: FC = () => {
    return (
        <div>
            <Chat />
        </div>
    );
};

const Chat: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])

    return (
      <div>
          <Messages />
          <AddMessageForm />
      </div>
    );
}

const Messages: FC<{}> = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div style={{height: '400px', overflow: 'auto'}}>
            {messages.map((m, index) => {
                return <Message key={index} message={m}/>
            })}
        </div>
    );
}

const Message: FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: '30px'}} alt="" /> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    const sendMessageHandler = () => {
        if (message) {
            dispatch(sendMessage(message));
            setMessage('');
        }
    }

    return (
      <div style={{display: 'flex'}}>
          <textarea style={{marginRight: '10px'}} name="" id="" onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
          {/*<button disabled={status !== 'ready'} onClick={sendMessageHandler}>send</button>*/}
          <Button variant="contained" onClick={sendMessageHandler}> Send</Button>
      </div>
    );
}

export default ChatPage;
