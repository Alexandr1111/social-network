import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
    }

    render() {
        const { profile } = this.props;
        return this.props.isAuth ? <Profile {...this.props} profile={profile} /> : <Redirect to={'/login'} />
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainer); // HOC(компонент, который возвращает новый компонент) занимается закидыванием данных из урла

export default connect( mapStateToProps, { getUserProfile } )(WithURLDataContainerComponent);
