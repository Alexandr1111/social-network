import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        const { profile, status, updateStatus, savePhoto, saveProfile } = this.props;
        return <Profile
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={savePhoto}
            saveProfile={saveProfile}
            {...this.props}
        />
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
    connect( mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } ),
    withRouter
)(ProfileContainer);

