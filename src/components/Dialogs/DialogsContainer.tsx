import Dialogs from "./Dialogs";
import { actions } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogType, MessageType} from "../../types/types";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    sendMessage: ( messageText: string ) => void
}

type OwnPropsType = {
    // пропсы, которые передали через атрибуты в теге
}

const mapStateToProps = ( state: AppStateType ): MapStatePropsType => {
    // state === store.getState()
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

// const AuthRedirectComponent = WithAuthRedirect(Dialogs);

// в качестве пропсов передаёт объект возвращаемый из f1() и f2(). f1-пропсы, f2-колбэки
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// connect подписывается на изменение стейта, когда он меняется заново вызывается f1() и формируется новый объект, сравниваясь со старым

// export default DialogsContainer;

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { sendMessage: actions.sendMessage }),
    WithAuthRedirect
)(Dialogs); // Возьмёт Dialogs и закинет в вызов функции WithAuthRedirect, потом === connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect(Dialogs))
