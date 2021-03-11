import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
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
