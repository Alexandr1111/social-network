import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class ProfileContainer extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
    }

    render() {
        const { profile } = this.props;
        return <Profile {...this.props} profile={profile} />
    }
}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
}

const WithURLDataContainerComponent = withRouter(AuthRedirectComponent); // HOC(компонент, который возвращает новый компонент) занимается закидыванием данных из урла

export default connect( mapStateToProps, { getUserProfile } )(WithURLDataContainerComponent);
