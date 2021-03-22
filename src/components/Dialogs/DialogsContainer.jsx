import Dialogs from "./Dialogs";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
    // state === store.getState()
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: newMessageBody => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// const AuthRedirectComponent = WithAuthRedirect(Dialogs);

// в качестве пропсов передаёт объект возвращаемый из f1() и f2(). f1-пропсы, f2-колбэки
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// connect подписывается на изменение стейта, когда он меняется заново вызывается f1() и формируется новый объект, сравниваясь со старым

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs); // Возьмёт Dialogs и закинет в вызов функции WithAuthRedirect, потом === connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect(Dialogs))
