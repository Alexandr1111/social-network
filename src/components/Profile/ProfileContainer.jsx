import React, { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        const { profile } = this.props;
        return <Profile {...this.props} profile={profile} />
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainer); // HOC(компонент, который возвращает новый компонент) занимается закидыванием данных из урла

export default connect( mapStateToProps, { setUserProfile } )(WithURLDataContainerComponent);
