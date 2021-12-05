import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
    saveProfile: (profileData: ProfileType) => any
}

type OwnPropsType = {

}

type PathParamsType = {
    userId: string
}

type P = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends Component<P> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        if (!userId) {
            console.error('ID should exists');
        }
        else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: P, prevState: P) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        const { profile, status, updateStatus, savePhoto, saveProfile, ...restProps } = this.props;
        return <Profile
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={savePhoto}
            saveProfile={saveProfile}
            {...restProps}
        />
    }
}

const mapStateToProps = ( state: AppStateType ) => {
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

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>( mapStateToProps,
        { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } ),
    withRouter
)(ProfileContainer);
