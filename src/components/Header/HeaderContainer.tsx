import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

type OwnPropsType = {
    // пропсы, которые передали через атрибуты передали в теге
}

type P = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class HeaderContainer extends Component<P> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = ( state: AppStateType ): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>( mapStateToProps, { logout } )(HeaderContainer);
