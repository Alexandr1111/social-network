import React, { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
