import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateMessageBodyCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const mapStateToProps = state => {
    // state === store.getState()
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageBody: body => {
            dispatch(updateMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

// Создаёт контейнерную компоненту SuperDialogsContainer, которая рендерит презент. компоненту Dialogs и внутрь Dialogs
// в качестве пропсов передаёт объект возвращаемый из f1() и f2(). f1-пропсы, f2-колбэки
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// connect подписывается на изменение стейта, когда он меняется заново вызывается f1() и формируется новый объект, сравниваясь со старым

export default DialogsContainer;
