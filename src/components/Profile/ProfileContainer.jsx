import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        const { profile, status, updateStatus } = this.props;
        return <Profile {...this.props} profile={profile} status={status} updateStatus={updateStatus} />
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

// const WithURLDataContainerComponent = withRouter(AuthRedirectComponent); // HOC(компонент, который возвращает новый компонент) занимается закидыванием данных из урла

// export default connect( mapStateToProps, { getUserProfile } )(WithURLDataContainerComponent);

export default compose(
    connect( mapStateToProps, { getUserProfile, getStatus, updateStatus } ),
    withRouter
)(ProfileContainer);

