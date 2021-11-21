import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = ( state: AppStateType ): MapPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

//WCP-wrappedComponent props
export function WithAuthRedirect<WCP>( WrappedComponent: ComponentType<WCP> ) {  //HOC не прокидывает пропосв в целевую компоненту
    const ComponentWrapper: FC<MapPropsType> = (props) => {  // создаёт для целевой компоненты контейнерную компоненту и возвращает её
        // не нужно во WrappedComponent засовывать isAuth
        const { isAuth, ...restProps } = props;
        return props.isAuth ? <WrappedComponent {...restProps as WCP} /> : <Redirect to={'/login/'} />
    }

    const ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(ComponentWrapper);

    return ConnectedAuthRedirectComponent;
}
