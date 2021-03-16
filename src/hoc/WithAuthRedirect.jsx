import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component) => {
    class ComponentWrapper extends React.Component {  // создаёт для целевой компоненты контейнерную компоненту и возвращает её
        render() {
            return this.props.isAuth ? <Component {...this.props} /> : <Redirect to={'/login/'} />
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(ComponentWrapper);

    return ConnectedAuthRedirectComponent;
}
