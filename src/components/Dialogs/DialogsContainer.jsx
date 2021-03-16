import Dialogs from "./Dialogs";
import { sendMessageCreator, updateMessageBodyCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // state === store.getState()
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

// Создаёт контейнерную компоненту SuperDialogsContainer, которая рендерит презент. компоненту Dialogs и внутрь Dialogs
// в качестве пропсов передаёт объект возвращаемый из f1() и f2(). f1-пропсы, f2-колбэки
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// connect подписывается на изменение стейта, когда он меняется заново вызывается f1() и формируется новый объект, сравниваясь со старым

export default DialogsContainer;
