import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        usersAPI.setUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data.id, data.data.email, data.data.login);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect( mapStateToProps, { setAuthUserData } )(HeaderContainer);
